/// <references type="cypress" />

describe('HoverOver',()=>{
   
    it('Test Case1',()=>{
        cy.visit('https://www.amazon.com/')
        //üzerine geldiğinde pencere açılan yerlerde önce locate alınır
        //sonra trigger() ile mause işlemi tanımlanır. mouseover:üzerine gel
        cy.get('#icp-nav-flyout').trigger('mouseover')

        cy.wait(3000)

        cy.contains('Change country/region.').click()

        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})







        




   })

  

})