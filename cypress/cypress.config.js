const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
  },

  videosFolder: 'cypress/Mali_Videos', // Videoların kaydedileceği klasör
  video: true, // Video kaydını etkinleştir
  screenshotsFolder: false, // Screenshot özelliğini devre dışı bırak
  


});
