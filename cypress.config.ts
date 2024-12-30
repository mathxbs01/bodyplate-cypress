import { defineConfig } from "cypress";
import browserify from "@cypress/browserify-preprocessor";
import fs from "fs";

const cucumber = require("cypress-cucumber-preprocessor").default;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      options.typescript = require.resolve("typescript");
      on("file:preprocessor", cucumber(options));

      return config;
    },
    specPattern: "cypress/features/*.feature",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/Cypress-Testes-QA-[hash].xml",
      attachments: true,
      attachmentsPath: "./cypress/screenshots",
    },
    // retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 5000,
    requestTimeout: 10000,

    supportFile: "cypress/supports/e2e.ts",
  },
});
