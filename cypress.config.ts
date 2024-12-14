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
    specPattern: "cypress/Features/*.feature",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/Cypress-Testes-QA-[hash].xml",
      attachments: true,
      attachmentsPath: "./cypress/screenshots",
    },
    retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 15000,
    requestTimeout: 100000,

    supportFile: "cypress/Supports/e2e.ts",
  },
});
