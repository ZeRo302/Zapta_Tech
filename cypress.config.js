const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://saucasa.zaptatech.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*Spec.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 100000,
    chromeWebSecurity: true
  },
});
