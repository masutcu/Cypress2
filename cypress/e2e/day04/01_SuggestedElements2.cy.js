/// <references type="cypress" />

describe('Suggested Elements',()=>{
   
    it('Test Case',()=>{
        cy.visit('http://www.automationpractice.pl/index.php');
        
        //arama moturu
        cy.get('#search_query_top').type('dress')
        cy.wait(2000)
        cy.get('ul > :nth-child(7)').click()
        cy.wait(3000)

        cy.get('h1').should('be.visible')


   })

   

})