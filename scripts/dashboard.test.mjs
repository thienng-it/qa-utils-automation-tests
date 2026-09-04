import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { once } from 'node:events';
import test from 'node:test';

import { chromium } from 'playwright';

const dashboardHtml = readFileSync(new URL('../dashboard/index.html', import.meta.url));

test('dashboard renders the latest structured run without fabricated claims', async (t) => {
  const server = createServer((request, response) => {
    if (request.url === '/') {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      response.end(dashboardHtml);
      return;
    }
    response.writeHead(404).end();
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');

  const browser = await chromium.launch({ headless: true });
  t.after(async () => {
    await browser.close();
    const closed = once(server, 'close');
    server.close();
    await closed;
  });

  const manifestRequests = [];
  const page = await browser.newPage();
  page.setDefaultTimeout(3_000);
  await page.route('https://fonts.googleapis.com/**', (route) => route.fulfill({
    contentType: 'text/css',
    body: '',
  }));
  await page.route('**/manifest.json*', async (route) => {
    manifestRequests.push(route.request().url());
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify([{
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
        workflowUrl: 'https://github.com/thienng-it/qa-utils-automation-tests/actions/runs/33834857265',
        commitUrl: 'https://github.com/thienng-it/qa-utils-automation-tests/commit/6a29ca9b8f967ddc4667f95ec65e4712dcdb2827',
        reportPath: 'reports/2026-09-04/33834857265-2/allure/index.html',
        targetUrl: 'https://kobenguyent.github.io/kobeanqautils/',
        browser: 'Chromium',
        runner: 'Linux',
      }]),
    });
  });

  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.locator('#kpi-total').waitFor();
  await page.locator('#latest-run-meta').getByText('Run #133.2').waitFor();

  assert.equal(await page.locator('#kpi-total').textContent(), '16');
  assert.equal(await page.locator('#detail-duration').textContent(), '1m 21s');
  assert.equal(await page.locator('#detail-retries').textContent(), '4');
  assert.match(await page.locator('#detail-source').textContent(), /main @ 6a29ca9/);
  assert.match(
    await page.locator('#latest-report-btn-container a').getAttribute('href'),
    /reports\/2026-09-04\/33834857265-2\/allure\/index\.html$/,
  );
  assert.equal(await page.getByText('0 Violations', { exact: true }).count(), 0);
  assert.equal(manifestRequests.length, 1);
  assert.match(manifestRequests[0], /manifest\.json\?v=\d+$/);
});
