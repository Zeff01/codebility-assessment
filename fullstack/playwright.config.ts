import { defineConfig, devices } from "@playwright/test";

/**
 * E2E against the PRODUCTION build (`npm run start`), dev server would lie
 * about prerendering/perf. The runner boots the server itself and reuses an
 * existing one only when it matches the current build.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  fullyParallel: false,
  retries: 0,
  use: {
    baseURL: "http://localhost:3000",
    locale: "en-US",
    permissions: [],
  },
  webServer: {
    command: "npm run start",
    port: 3000,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
