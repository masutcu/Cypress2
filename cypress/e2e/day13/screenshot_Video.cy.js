describe('testSuite',()=>{
   
    it('ScreenShot And Video',()=>{
        cy.visit("https://demo.opencart.com/")
        //sayfa screenshot
        cy.screenshot('homepage')
        
        //element screenshot
        cy.get('#logo > a > .img-fluid').screenshot('logo')


   })

   it.only('testte Hatalı alan',()=>{
    
    cy.visit("https://demo.opencart.com/")
    
    cy.get(':nth-child(7) > .nav-link').click()

    cy.get('h2').should('have.text','Tablet')
    
    //consoldan çalıştırınca fail dosyada foto otomatik çekiyor
    //npx cypress run --spec cypress\e2e\day13\screenshot_Video.cy.js


   })

})