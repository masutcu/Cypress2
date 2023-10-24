/// <references type="cypress" />

describe('Koala Resort Hotel',()=>{
   
    it('LogIn Testi',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        //cy.get('#navLogon > .nav-link').click()
        //veya
        cy.contains('Log in').click()
        //DOM da log in text ini bul ve click le
        cy.url().should('include','Account/Logon')

        //username: Manager
        cy.get('#UserName',{timeout:5000}).type('Manager')

        //password: Manager1!
        cy.get('#Password', {timeout:5000}).type('Manager1')

        cy.get('#btnSubmit', {timeout:5000}).click()

   })

   it('',()=>{


   })

})