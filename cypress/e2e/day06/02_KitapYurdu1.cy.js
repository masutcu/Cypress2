/// <references type="cypress" />

describe('KitapYurdu',()=>{

    //Bu class daki sayfaya ulaşılamıyor
   
    it('KitapYurdu Login Test',()=>{
        
        
        cy.visit('https://kitapyurdu.com/')
        
        cy.wait(3000)

        cy.get('.login > a').click()

        cy.get('#login-email').type('masutcu@gmail.com')
        cy.wait(1000)
        cy.get('#login-password').type('Litvanya')
        cy.wait(1000)
        cy.get('.ky-btn-orange').click()

        cy.get('b').should('include.text','Mehmet')
        cy.get('b').should('include.text','Sutcu')

        


   })

   

})