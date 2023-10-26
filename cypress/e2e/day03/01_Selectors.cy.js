/// <references type="cypress" />

describe('Selectors Example ',()=>{
   
    it('Css Selectors',()=>{
    
        cy.visit('https://www.amazon.com')

        //By Tag Name 
        cy.get('input')

        //By id
        cy.get('#twotabsearchtextbox')

        //By Class
        cy.get('.nav-search-field')

        //By Attiribute Name and Value
        cy.get('input[type="text"]')

        //By 2 Attiribute
        cy.get('[type="text"][id="twotabsearchtextbox"]')

   })

   it.only('XPath',()=>{
    //önerilmiyor.
    //install için: npm install -D cypress-xpath
    //support file dosyasına : require(cypress-xpath);
    cy.visit('https://www.google.com')

    //By XPath
    //şuan xpath çalışmıyor. yüklenen plugin kaldırılmış
   
    //cy.xpath("//a[@class='gb_d']").should('include.text','Gmail')



   })

})