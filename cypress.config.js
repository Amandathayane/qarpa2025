const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
