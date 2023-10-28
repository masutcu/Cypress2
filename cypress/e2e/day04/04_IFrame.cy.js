/// <references type="cypress" />

describe('IFrame',()=>{

    //ıframe yönetimi için plugin indirmemiz gerekiyor
    /*
    1:nmpjs.com sitesinden ilgili plugin kodu alınır ve terminalde aşağıdaki komut girilir
    npm install -D cypress-iframe
    2:indirilen plugin import edilir. 
    bunun için: support içerisinde e2ejs dosyamıza 
    import 'cypress-iframe' kodunu ekliyoruz.
    3:Bu işlemlerden sonra cy.frameLoaded() komutu kullanılabilir oldu
    */
   
    it.only('Iframe Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.wait(3000)
        
        cy.frameLoaded('#mce_0_ifr')


   })

   it('',()=>{


   })

})