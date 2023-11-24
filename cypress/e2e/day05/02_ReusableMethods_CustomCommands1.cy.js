/// <references type="cypress" />

describe('Custom Command1',()=>{
   
    //Cypress da reusable method class custom command ile yapılıyor
   
    it('Positive Login',()=>{
   
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.wait(3000)
        cy.get('.login').click()

        cy.get('#email').type('masutcu@gmail.com')
        cy.get('#passwd').type('mehmetali123')

        cy.get('#SubmitLogin > span').click()

        cy.get('.account > span').should('have.text','Mehmet ali')


   })

   it('Positive Login With reuasable Custom',()=>{
    cy.automation_practice_login('masutcu@gmail.com','mehmetali123')
    
    cy.get('.account > span').should('have.text','Mehmet ali')

   })

   it.only('Negative Login',()=>{
    cy.automation_practice_login('masutcu@gmail.com','mehmetali555')
    
    cy.get('ol > li').should('have.text','Authentication failed.')

    cy.get('ol > li').should('be.visible')

    cy.url().should('include','controller=authentication')


   })



})