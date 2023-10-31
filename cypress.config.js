const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.google.com",
    projectId: "3v688k",

    "video": false,
    //testlerin videolarını kaydetmez
    
    //"retries":2
    //fail olduğunda kaç kere DAHA çalıştırılması gerektiği belirtilir.2 yazdığımızda 3 kez çalışır.



  },
});
