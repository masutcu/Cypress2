describe('Shadow Root',()=>{
   
    it.only("file upload Shadow Dom", () => {
        cy.visit(
          "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
        );
    
        cy.get('[class="smart-browse-input"]', {
          includeShadowDom: true,
        }).attachFile("bir.png");
        cy.get('[class="smart-item-name"]', { includeShadowDom: true }).should("have.text","bir.png" );
      });

   

})