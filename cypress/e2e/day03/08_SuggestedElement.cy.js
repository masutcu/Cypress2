/// <references type="cypress" />

describe('Suggested Element',()=>{
   
    it('Test Case1',()=>{
        cy.visit('https://google.com/')
        cy.get('.gLFyf').type('Yahoo')

        //arama butonuna yazdığımızda önerilen metinlerin locate i css ile: 'li span b'
        cy.get('li span b').contains('mail').click()



   })

   

})