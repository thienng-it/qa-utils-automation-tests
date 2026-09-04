import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

import buildRunRecord, { mergeManifest } from './report-data.mjs';

test('buildRunRecord publishes measured Allure results with unique CI identity', () => {
  const record = buildRunRecord(
    {
      statistic: {
        passed: 10,
        failed: 1,
        broken: 2,
        skipped: 3,
        unknown: 0,
        total: 16,
      },
      time: {
        start: Date.UTC(2026, 8, 4, 3),
        stop: Date.UTC(2026, 8, 4, 3, 1, 21, 67),
        duration: 81_067,
      },
    },
    [
      { data: { run: 16, retry: 4 } },
      { data: { run: 15, retry: 99 } },
    ],
    {
      runId: '33834857265',
      runNumber: '133',
      runAttempt: '2',
      date: '2026-09-04',
      commit: '6a29ca9b8f967ddc4667f95ec65e4712dcdb2827',
      branch: 'main',
      event: 'push',
      workflow: 'Enterprise E2E Automation Pipeline',
      serverUrl: 'https://github.com',
      repository: 'thienng-it/qa-utils-automation-tests',
      targetUrl: 'https://kobenguyent.github.io/kobeanqautils/',
      browser: 'Chromium',
      runner: 'Linux',
    },
  );

  assert.deepEqual(record, {
    schemaVersion: 1,
    runId: '33834857265',
    runNumber: 133,
    runAttempt: 2,
    date: '2026-09-04',
    startedAt: '2026-09-04T03:00:00.000Z',
    completedAt: '2026-09-04T03:01:21.067Z',
    durationMs: 81_067,
    status: 'failed',
    passed: 10,
    failed: 1,
    broken: 2,
    skipped: 3,
    unknown: 0,
    total: 16,
    retries: 4,
    commit: '6a29ca9b8f967ddc4667f95ec65e4712dcdb2827',
    branch: 'main',
    event: 'push',
    workflow: 'Enterprise E2E Automation Pipeline',
    workflowUrl: 'https://github.com/thienng-it/qa-utils-automation-tests/actions/runs/33834857265/attempts/2',
    commitUrl: 'https://github.com/thienng-it/qa-utils-automation-tests/commit/6a29ca9b8f967ddc4667f95ec65e4712dcdb2827',
    reportPath: 'reports/2026-09-04/33834857265-2/allure/index.html',
    targetUrl: 'https://kobenguyent.github.io/kobeanqautils/',
    browser: 'Chromium',
    runner: 'Linux',
  });
});

test('buildRunRecord rejects an empty Allure report', () => {
  assert.throws(
    () => buildRunRecord(
      {
        statistic: { passed: 0, failed: 0, broken: 0, skipped: 0, unknown: 0, total: 0 },
        time: { start: 1, stop: 2, duration: 1 },
      },
      [],
      {
        runId: '1',
        runNumber: '1',
        runAttempt: '1',
        date: '2026-09-04',
        commit: 'abc',
        branch: 'main',
        event: 'push',
        workflow: 'CI',
        serverUrl: 'https://github.com',
        repository: 'owner/repo',
        targetUrl: 'https://example.com',
        browser: 'Chromium',
        runner: 'Linux',
      },
    ),
    /contains no tests/,
  );
});

test('buildRunRecord rejects Allure totals that do not match status counts', () => {
  assert.throws(
    () => buildRunRecord(
      {
        statistic: { passed: 2, failed: 1, broken: 0, skipped: 0, unknown: 0, total: 2 },
        time: { start: 1, stop: 2, duration: 1 },
      },
      [],
      {
        runId: '1',
        runNumber: '1',
        runAttempt: '1',
        date: '2026-09-04',
        commit: 'abc',
        branch: 'main',
        event: 'push',
        workflow: 'CI',
        serverUrl: 'https://github.com',
        repository: 'owner/repo',
        targetUrl: 'https://example.com',
        browser: 'Chromium',
        runner: 'Linux',
      },
    ),
    /status counts do not equal total/,
  );
});

test('buildRunRecord rejects missing CI run identity', () => {
  assert.throws(
    () => buildRunRecord(
      {
        statistic: { passed: 1, failed: 0, broken: 0, skipped: 0, unknown: 0, total: 1 },
        time: { start: 1, stop: 2, duration: 1 },
      },
      [],
      {
        runId: undefined,
        runNumber: '1',
        runAttempt: '1',
        date: '2026-09-04',
        commit: 'abc',
        branch: 'main',
        event: 'push',
        workflow: 'CI',
        serverUrl: 'https://github.com',
        repository: 'owner/repo',
        targetUrl: 'https://example.com',
        browser: 'Chromium',
        runner: 'Linux',
      },
    ),
    /runId/,
  );
});

test('buildRunRecord rejects invalid Allure status counts', () => {
  assert.throws(
    () => buildRunRecord(
      {
        statistic: { passed: 2, failed: -1, broken: 0, skipped: 0, unknown: 0, total: 1 },
        time: { start: 1, stop: 2, duration: 1 },
      },
      [],
      {
        runId: '1',
        runNumber: '1',
        runAttempt: '1',
        date: '2026-09-04',
        commit: 'abc',
        branch: 'main',
        event: 'push',
        workflow: 'CI',
        serverUrl: 'https://github.com',
        repository: 'owner/repo',
        targetUrl: 'https://example.com',
        browser: 'Chromium',
        runner: 'Linux',
      },
    ),
    /non-negative integers/,
  );
});

test('buildRunRecord rejects invalid timing, retry, and run identity metrics', () => {
  const summary = {
    statistic: { passed: 1, failed: 0, broken: 0, skipped: 0, unknown: 0, total: 1 },
    time: { start: 2, stop: 1, duration: -1 },
  };
  const metadata = {
    runId: '1',
    runNumber: 'not-a-number',
    runAttempt: '0',
    date: '2026-09-04',
    commit: 'abc',
    branch: 'main',
    event: 'push',
    workflow: 'CI',
    serverUrl: 'https://github.com',
    repository: 'owner/repo',
    targetUrl: 'https://example.com',
    browser: 'Chromium',
    runner: 'Linux',
  };

  assert.throws(() => buildRunRecord(summary, [{ data: { retry: -1 } }], metadata), /run identity|timing|retry/i);
});

test('mergeManifest preserves same-day runs and replaces duplicate or legacy snapshots', () => {
  const current = {
    runId: '200',
    runAttempt: 2,
    date: '2026-09-04',
    startedAt: '2026-09-04T12:00:00.000Z',
  };
  const previousAttempt = {
    runId: '200',
    runAttempt: 1,
    date: '2026-09-04',
    startedAt: '2026-09-04T11:00:00.000Z',
  };
  const olderRun = {
    runId: '100',
    runAttempt: 1,
    date: '2026-09-04',
    startedAt: '2026-09-04T10:00:00.000Z',
  };
  const priorDay = { date: '2026-09-03', passed: 7, failed: 0, skipped: 0, total: 7 };

  assert.deepEqual(
    mergeManifest(current, [
      { ...current, startedAt: 'stale' },
      { date: '2026-09-04', passed: 114, failed: 0, skipped: 0, total: 114 },
      previousAttempt,
      olderRun,
      { ...olderRun, startedAt: 'duplicate' },
      priorDay,
    ]),
    [current, previousAttempt, olderRun, priorDay],
  );
});

test('report-data CLI writes the current run and merges the published manifest', (t) => {
  const workspace = mkdtempSync(join(tmpdir(), 'report-data-'));
  t.after(() => rmSync(workspace, { recursive: true, force: true }));

  const reportDir = join(workspace, 'allure-report');
  const manifestPath = join(workspace, 'manifest.json');
  const statsPath = join(workspace, 'stats.json');
  mkdirSync(join(reportDir, 'widgets'), { recursive: true });
  writeFileSync(join(reportDir, 'widgets', 'summary.json'), JSON.stringify({
    statistic: { passed: 2, failed: 0, broken: 0, skipped: 0, unknown: 0, total: 2 },
    time: { start: Date.UTC(2026, 8, 4, 3), stop: Date.UTC(2026, 8, 4, 3, 0, 2), duration: 2_000 },
  }));
  writeFileSync(join(reportDir, 'widgets', 'retry-trend.json'), '[{"data":{"run":2,"retry":1}}]');
  writeFileSync(manifestPath, '[{"date":"2026-09-03","passed":7,"failed":0,"skipped":0,"total":7}]');

  const result = spawnSync(
    process.execPath,
    [fileURLToPath(new URL('./report-data.mjs', import.meta.url)), reportDir, manifestPath, statsPath],
    {
      encoding: 'utf8',
      env: {
        ...process.env,
        GITHUB_RUN_ID: '300',
        GITHUB_RUN_NUMBER: '9',
        GITHUB_RUN_ATTEMPT: '1',
        GITHUB_SHA: 'abc123',
        GITHUB_REF_NAME: 'main',
        GITHUB_EVENT_NAME: 'schedule',
        GITHUB_WORKFLOW: 'CI',
        GITHUB_SERVER_URL: 'https://github.com',
        GITHUB_REPOSITORY: 'owner/repo',
        RUN_DATE: '2026-09-04',
        TARGET_URL: 'https://example.com',
        TEST_BROWSER: 'Chromium',
        RUNNER_OS: 'Linux',
      },
    },
  );

  assert.equal(result.status, 0, result.stderr);
  assert.equal(existsSync(statsPath), true, 'stats file was not written');
  assert.equal(JSON.parse(readFileSync(statsPath, 'utf8')).runId, '300');
  assert.deepEqual(
    JSON.parse(readFileSync(manifestPath, 'utf8')).map(({ runId, date }) => ({ runId, date })),
    [
      { runId: '300', date: '2026-09-04' },
      { runId: undefined, date: '2026-09-03' },
    ],
  );
});
