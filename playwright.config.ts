import { defineConfig } from '@playwright/test';

// Use PLAYWRIGHT_PORT para reaproveitar um servidor de desenvolvimento que já esteja rodando.
const port = process.env.PLAYWRIGHT_PORT || '4328';
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests',
  workers: 1,
  use: { baseURL, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' },
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${port}`,
    url: baseURL, reuseExistingServer: !process.env.CI,
    env: { ASTRO_TELEMETRY_DISABLED: '1', ASTRO_DEV_BACKGROUND: '1', PUBLIC_GA_MEASUREMENT_ID: '' },
  },
});
