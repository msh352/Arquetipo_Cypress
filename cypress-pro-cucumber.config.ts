const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

export default defineConfig({
  reporterEnabled: 'spec, json, txt',
  userAgent: 'testing',
  refUrl: 'https://www.autohero.com/es/',
  chromeWebSecurity: false,
  env: {
    allure: true,
    allureResultsPath: './allure-results',
    allureLogCypress: false,
    bbdd: '',
    adminUserName: '',
    adminPasswordUser: '',
    source: 'local',
    browserPermissions: {
      notifications: 'allow',
      geolocation: 'allow',
    },
  },
  defaultCommandTimeout: 30000,
  videoUploadOnPasses: true,
  videoCompresion: 0,
  video: true,
  viewportWidth: 1440,
  viewportHeight: 960,
  retries: 2,
  modifyObstructiveCode: false,
  signatureActive: true,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/tests/features/*.feature',
    baseUrl: 'https://www.autohero.com/es/',
  },
})
