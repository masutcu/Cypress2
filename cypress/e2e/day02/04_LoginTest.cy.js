/// <references type="cypress" />

describe('Login Test',()=>{
   
    it('Pozitif Test',()=>{
        
        const username="Manager"
        const password="Manager1!"
        
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        cy.contains('Log in').click()

        cy.get('#UserName',{timeout:2000}).type(username)
        cy.get('#Password', {timeout:5000}).type(password)
        cy.get('#btnSubmit').click()

        cy.url().should('include','Admin/UserAdmin')
        cy.get('.username').should('contain','manager')




   })

   it.only('Negatif Test',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/');
    cy.contains('Log in').click()

    const username="Manager"
    const password="Manager"
    cy.get('#UserName',{timeout:2000}).type(username)
        cy.get('#Password', {timeout:5000}).type(password)
        cy.get('#btnSubmit').click()

        cy.get('.validation-summary-errors > span').should('include.text','Try again please')

        cy.get('.validation-summary-errors > ul > li').should('include.text','Username or password is incorrect, please correct them and try again')

        



   })

})