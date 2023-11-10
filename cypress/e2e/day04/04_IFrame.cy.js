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
   
    it('Iframe Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.wait(3000)
        
        //cy.frameLoaded() : bu kodla iframe in yerini tanımlıyoruz
        cy.frameLoaded('#mce_0_ifr')

        //cy.iframe(): kodu ile iframe e gidiyoruz

        cy.iframe().find('p').clear()
        cy.iframe().find('p').type('Cypress was here')

        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()



   })
   //plugin olmadan

   it.only('secondway',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.wait(3000)
        
        //reusable method yaptık -getIframe()
        let iframe=cy.getIframe('#mce_0_ifr')
        iframe.clear().type('Wellcome{ctrl+a}')
        cy.get('[aria-label="Bold"]').click()


   })

})