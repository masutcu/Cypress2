/// <references type="cypress" />

describe('WriteAndRead File',()=>{
   
    it('Write File',()=>{
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','Başlık: Cypress Notes \n')
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','1.satır yazılar \n',{flag:'a+'})
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','2.satır yazılar \n',{flag:'a+'})


   })

   it('Read File',()=>{
    cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain','satır')
    cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('include','1.satır')




   })

})