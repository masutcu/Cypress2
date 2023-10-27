/// <references type="cypress" />

describe('SuperDomain',()=>{
   
    it('Test Case1',()=>{
        cy.visit('https://www.amazon.com/')
        cy.wait(3000)
        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')

        //Super domain : aynı domain içindeki 2. sayfalara gidebilirsiniz.


   })

   it('Test Case2',()=>{
    cy.visit('https://www.google.com/')
    cy.wait(3000)
    cy.visit('https://www.amazon.com/')


    //ayrı sayfalara gitmek isterseniz hata verir


   })

})