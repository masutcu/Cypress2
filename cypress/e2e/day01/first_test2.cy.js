/// <references type="cypress" />
//testler describe komutu ile tanımlanır.

describe('My first test',function(){
    // ()=> yerine fuction() kullanılabilir
   
    it('URL test',function(){
        cy.visit('https://www.google.com/')        
        cy.url().should('include','google')
        

   })

   it('Title test',function(){
    cy.visit('https://www.google.com')
    cy.title().should('include','Google')
    cy.title().should('eq','Google')


   })

})