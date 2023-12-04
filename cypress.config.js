const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },


  },
  videosFolder: 'cypress/Mali_Videos', // Videoların kaydedileceği klasör
  video: false, // Video kaydını etkinleştir
  screenshotsFolder: true, // Screenshot özelliğini devre dışı bırak


});
