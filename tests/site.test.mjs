import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');

const readDistFile = (relativePath) => {
  const filePath = join(distDir, relativePath);
  assert.ok(existsSync(filePath), `Expected ${relativePath} to exist in dist`);
  return readFileSync(filePath, 'utf8');
};

test('core static routes are generated', () => {
  const expectedRoutes = [
    'index.html',
    'features/index.html',
    'who-its-for/index.html',
    'coming-soon/index.html',
    'developer-preview/index.html',
    'privacy/index.html',
    'support/index.html',
    '404.html',
    'robots.txt',
    'sitemap.xml',
  ];

  for (const route of expectedRoutes) {
    assert.ok(existsSync(join(distDir, route)), `Expected route output for ${route}`);
  }
});

test('homepage contains the current value proposition and shared logo asset', () => {
  const html = readDistFile('index.html');

  assert.match(html, /Con Gusto keeps property work visible from request to closeout\./);
  assert.match(html, /Property operations platform/);
  assert.match(html, /\/con-gusto-mark\.svg/);
  assert.match(html, /What It Does/);
  assert.match(html, /data-analytics-event="cta_request_walkthrough"/);
  assert.match(html, /data-analytics-event="cta_view_features"/);
  assert.doesNotMatch(html, /favicon\.ico/);
});

test('homepage metadata points to the refreshed social share image', () => {
  const html = readDistFile('index.html');

  assert.match(html, /<meta property="og:image" content="https:\/\/congustoapp\.com\/social-share\.svg">/);
  assert.match(html, /<meta name="twitter:image" content="https:\/\/congustoapp\.com\/social-share\.svg">/);
  assert.match(html, /<link rel="icon" type="image\/svg\+xml" href="\/favicon\.svg">/);
});

test('developer preview remains noindex', () => {
  const html = readDistFile('developer-preview/index.html');

  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.match(html, /Preview routes are for controlled review, not public rollout\./);
});

test('support page exposes the expected public contact paths', () => {
  const html = readDistFile('support/index.html');

  assert.match(html, /support@congusto\.app\.com|support@congustoapp\.com/);
  assert.match(html, /privacy@congustoapp\.com/);
  assert.match(html, /https:\/\/preview\.congustoapp\.com/);
});
