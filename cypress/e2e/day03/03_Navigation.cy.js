/// <references type="cypress" />

describe('Navigation',()=>{
   
    it('Back, Forward, Refresh',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        
        cy.wait(3000)
        
        cy.get('#navLogon > .nav-link').click()
        
        cy.wait(3000)
        
        cy.go('back')       //veya cy.go(-1)
        
        
        cy.wait(3000)

        cy.go('forward')    //veya cy.go(1)

        cy.wait(3000)
 
        cy.reload()


   })

   it.only('Chaing Navigation',()=>{

    cy.visit('https://qa-environment.koalaresorthotels.com/')
        
        cy.wait(3000)
        
        cy.get('#navLogon > .nav-link').click()
        
        cy.wait(3000)

        cy.go('back').go('forward').go(-1).go(1)

        cy.reload(true)
        //Browser Sayfayı hafızadan değil yeniden bağlanarak yükler


   })

})