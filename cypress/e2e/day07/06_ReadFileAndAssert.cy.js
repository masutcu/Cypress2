/// <references type="cypress" />

describe('Read File And Assert',()=>{
   
    it('Assert',()=>{
        cy.readFile('./cypress/fixtures/users.json').then((userdata)=>{
            expect(userdata[3].name).to.equal('Patricia Lebsack');
            expect(userdata[3].address.street).to.equal('Hoeger Mall');
            expect(userdata[3].company.name).to.equal('Robel-Corkery');
        })
        


   })

   it('',()=>{


   })

})