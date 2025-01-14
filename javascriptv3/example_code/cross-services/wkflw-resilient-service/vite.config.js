import { defineConfig } from "vitest/config";

const TEST_TIMEOUT_IN_MINUTES = 45;
const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;

const testTimeout = TEST_TIMEOUT_IN_MINUTES * SECONDS_IN_MINUTE * MS_IN_SECOND;
const hookTimeout = testTimeout;

export default defineConfig({
  test: {
    testTimeout,
    hookTimeout,
    threads: false,
    coverage: {
      all: true,
    },
    silent: false,
  },
});
