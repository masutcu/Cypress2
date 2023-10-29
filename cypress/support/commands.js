// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('automation_practice_login',(email, password)=> { 
    
    cy.visit('http://www.automationpractice.pl/index.php');
        cy.wait(3000)
        cy.get('.login').click()

        cy.get('#email').type(email)
        cy.get('#passwd').type(password)

        cy.get('#SubmitLogin > span').click()

 })

 Cypress.Commands.add('amazonSearch',(productName)=> { 
    
    cy.visit('http://www.amazon.com/');
        cy.wait(3000)
        cy.get('#twotabsearchtextbox').type(productName)
        cy.wait(1000)
        cy.get('#nav-search-submit-button').click()

 })

