import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function buildRunRecord(summary, retryTrend, metadata) {
  const missing = [
    'runId', 'runNumber', 'runAttempt', 'date', 'commit', 'branch', 'event',
    'workflow', 'serverUrl', 'repository', 'targetUrl', 'browser', 'runner',
  ].filter((key) => !metadata[key]);
  if (missing.length) throw new Error(`Missing required report metadata: ${missing.join(', ')}`);

  const { passed, failed, broken, skipped, unknown, total } = summary.statistic;
  const counts = [passed, failed, broken, skipped, unknown, total];
  if (!counts.every((value) => Number.isInteger(value) && value >= 0)) {
    throw new Error('Allure status counts must be non-negative integers');
  }
  if (total === 0) throw new Error('Allure summary contains no tests; refusing to publish');
  if (passed + failed + broken + skipped + unknown !== total) {
    throw new Error('Allure status counts do not equal total; refusing to publish');
  }
  const runNumber = Number(metadata.runNumber);
  const runAttempt = Number(metadata.runAttempt);
  if (![runNumber, runAttempt].every((value) => Number.isInteger(value) && value > 0)) {
    throw new Error('CI run identity must contain positive integers');
  }
  const { start, stop, duration } = summary.time ?? {};
  if (![start, stop, duration].every(Number.isFinite) || start < 0 || stop < start || duration < 0) {
    throw new Error('Allure timing must contain finite, non-negative values');
  }
  const retries = retryTrend[0]?.data?.retry ?? 0;
  if (!Number.isInteger(retries) || retries < 0) {
    throw new Error('Allure retry count must be a non-negative integer');
  }
  const adverse = failed + broken + unknown;
  const status = adverse > 0 ? 'failed' : passed > 0 ? 'passed' : 'skipped';
  const rootUrl = `${metadata.serverUrl}/${metadata.repository}`;

  return {
    schemaVersion: 1,
    runId: metadata.runId,
    runNumber,
    runAttempt,
    date: metadata.date,
    startedAt: new Date(start).toISOString(),
    completedAt: new Date(stop).toISOString(),
    durationMs: duration,
    status,
    passed,
    failed,
    broken,
    skipped,
    unknown,
    total,
    retries,
    commit: metadata.commit,
    branch: metadata.branch,
    event: metadata.event,
    workflow: metadata.workflow,
    workflowUrl: `${rootUrl}/actions/runs/${metadata.runId}/attempts/${runAttempt}`,
    commitUrl: `${rootUrl}/commit/${metadata.commit}`,
    reportPath: `reports/${metadata.date}/${metadata.runId}-${runAttempt}/allure/index.html`,
    targetUrl: metadata.targetUrl,
    browser: metadata.browser,
    runner: metadata.runner,
  };
}

export function mergeManifest(current, previous = []) {
  if (!Array.isArray(previous)) throw new Error('Published manifest must be an array');
  const seen = new Set([`${current.runId}:${current.runAttempt}`]);
  return [
    current,
    ...previous.filter((entry) => {
      const duplicate = entry.runId === current.runId && entry.runAttempt === current.runAttempt;
      const replacedLegacyDay = !entry.runId && entry.date === current.date;
      if (duplicate || replacedLegacyDay) return false;
      if (!entry.runId) return true;
      const identity = `${entry.runId}:${entry.runAttempt ?? 1}`;
      if (seen.has(identity)) return false;
      seen.add(identity);
      return true;
    }),
  ];
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT' && fallback !== undefined) return fallback;
    throw error;
  }
}

async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  const temporaryPath = `${path}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`);
  await rename(temporaryPath, path);
}

async function main([reportDir, manifestPath, statsPath]) {
  if (!reportDir || !manifestPath || !statsPath) {
    throw new Error('Usage: node scripts/report-data.mjs <allure-report> <manifest.json> <stats.json>');
  }

  const summary = await readJson(join(reportDir, 'widgets', 'summary.json'));
  const retryTrend = await readJson(join(reportDir, 'widgets', 'retry-trend.json'), []);
  const previous = await readJson(manifestPath, []);
  const record = buildRunRecord(summary, retryTrend, {
    runId: process.env.GITHUB_RUN_ID,
    runNumber: process.env.GITHUB_RUN_NUMBER,
    runAttempt: process.env.GITHUB_RUN_ATTEMPT ?? '1',
    date: process.env.RUN_DATE,
    commit: process.env.GITHUB_SHA,
    branch: process.env.GITHUB_REF_NAME,
    event: process.env.GITHUB_EVENT_NAME,
    workflow: process.env.GITHUB_WORKFLOW,
    serverUrl: process.env.GITHUB_SERVER_URL ?? 'https://github.com',
    repository: process.env.GITHUB_REPOSITORY,
    targetUrl: process.env.TARGET_URL,
    browser: process.env.TEST_BROWSER,
    runner: process.env.RUNNER_OS,
  });

  await writeJson(statsPath, record);
  await writeJson(manifestPath, mergeManifest(record, previous));
  process.stdout.write(`${JSON.stringify(record)}\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main(process.argv.slice(2));
}
