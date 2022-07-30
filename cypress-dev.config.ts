import { defineConfig } from 'cypress'

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
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/tests/**/*.spec.js',
    baseUrl: 'https://www.autohero.com/es/',
  },
})
