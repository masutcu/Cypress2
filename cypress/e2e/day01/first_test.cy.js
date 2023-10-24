/// <references type="cypress" />
//testler describe komutu ile tanımlanır.
describe('My first test',()=>{
   
    it('URL test',()=>{
        cy.visit('https://www.google.com/')
        //visit istenilen url e gitmek için kullanılır.

        cy.url().should('include','google')
        //should assert işlemi için kullanılır.

   })

   it('Title test',()=>{
    cy.visit('https://www.google.com')
    cy.title().should('include','Google')
    //title sayfanın başlığını alır.
    cy.title().should('eq','Google')


   })

})