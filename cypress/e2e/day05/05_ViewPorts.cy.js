/// <references type="cypress" />

describe('ViewPorts',()=>{

    //ekranı farklı cihazlarda açmak için kullanacağız
   
    it('iphone-8',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-8')
        cy.screenshot()


   })

   it('macbook-16',()=>{
        cy.visit('https://www.google.com')
        cy.viewport('macbook-16')
        cy.screenshot()


})

    it('samsung-s10',()=>{
        cy.visit('https://www.google.com')
        cy.viewport('samsung-s10')
        cy.screenshot()


})

   

})