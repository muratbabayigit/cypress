const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:"https://www.wisequarter.com",
    projectId: "uyk61t",
    "video":false,    // video kaydı alınmasını engeller false yerine true yapılarak kayıt alması sağlanabilir.
    "retire":2        //Fail olan testlerin 2 kere DAHA çalıştırılmasını sağlar.
   
    

    
  },
  
});
