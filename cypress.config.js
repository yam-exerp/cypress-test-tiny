const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
