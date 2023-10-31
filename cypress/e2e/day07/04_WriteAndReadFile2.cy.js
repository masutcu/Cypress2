/// <references type="cypress" />

describe('Write&Read File 2',()=>{
   
    it('Write And Read Json File',()=>{
        cy.writeFile('./cypress/e2e/day07/05_UserData.json',{name: 'MehmetAli', title: 'SoftWare Test Engineer'})

        cy.readFile('./cypress/e2e/day07/05_userData.json').then( (user)=>{
            
            expect(user.name).to.equal('MehmetAli')
            
            expect(user.title).to.equal('SoftWare Test Engineer')
        })


   })

   

})