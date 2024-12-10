import { defineConfig } from "cypress";
import browserify from "@cypress/browserify-preprocessor";
import fs from "fs";

const cucumber = require("cypress-cucumber-preprocessor").default;

export default defineConfig({
  e2e: {
    // Definir o setup para processar TypeScript
    setupNodeEvents(on, config) {
      // Configuração para o pré-processador de TypeScript
      const options = browserify.defaultOptions;
      options.typescript = require.resolve("typescript"); // Resolver o caminho do TypeScript
      on("file:preprocessor", cucumber(options));

      // Retorna a configuração
      return config;
    },

    // Definir o padrão para os arquivos .feature
    specPattern: "cypress/Features/*.feature", // Ajuste para o caminho correto dos seus arquivos .feature

    // Definições adicionais para o relatório de teste
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/Cypress-Testes-QA-[hash].xml",
      attachments: true,
      attachmentsPath: "./cypress/screenshots",
    },

    // Outras configurações de tempo e resoluções
    retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 15000,
    requestTimeout: 100000,

    supportFile: "cypress/support/e2e.ts",
  },
});
