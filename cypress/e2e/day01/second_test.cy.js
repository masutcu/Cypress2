/// <references type="cypress" />

//describe yerine context de kullanılabilir
context('My Second test',()=>{
  beforeEach('Her testen önce çalışacak',()=>{
    cy.visit('/')

  }) 

    it('URL test',()=>{
        cy.url().should('include', 'google')
        cy.url().should('eq','https://www.google.com/')
   })

   it('Title test',()=>{
    cy.title().should('include', 'Google')
    cy.title().should('eq','Google')

   })

   it('Search test',()=>{
    cy.get('#APjFqb').type('Cypress.io{enter}')
    //cy.get("input[name='q']").type('Cypress.io{enter}')  //css ile
    //get(): locate alıyoruz. locateler css ile alınıyor
    //type(): metin gönderiyoruz
    //{enter} enter tuşuna bas
    

   })

   it.skip('Search test2',()=>{
    //it.skip bu testi es geçer
    cy.get('#APjFqb',{timeout:3000}).type('Cypress.io{enter}')

   })

   it.only('Click test',()=>{
    //it.only sadece bu testi çalıştırır
    cy.get('.gb_d').click()

   })

})