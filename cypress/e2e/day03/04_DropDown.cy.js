/// <references type="cypress" />

describe('DropDown',()=>{
   
    it('Test Case',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        
        //önce dropdown elementini locate al.cy.get('#dropdown')
        //sonra dropdown içinde görülen değer select() ile seçilir 
        //sonra should() ile assertion 
        
        cy.get('#dropdown').select('Option 1').should('have.value','1')
        cy.get('#dropdown').select('Option 2').should('have.value','2')


   })

     

})