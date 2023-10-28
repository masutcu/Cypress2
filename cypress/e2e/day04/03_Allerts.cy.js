/// <references type="cypress" />

describe('Allerts',()=>{
   
    it('Allert Test',()=>{
        //Cypress otomatik olarak Alert tamam butonuna onay verir.
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(1) > button').click()

        cy.get('#result').should('have.text','You successfully clicked an alert')


   })

   it('Accept Allert Test',()=>{
    
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    cy.get(':nth-child(2) > button').click()
    //iki seçenek var iptal ve tamam
    //Cypress otomatik olarak tamam butonuna tıklar

    cy.get('#result').should('have.text','You clicked: Ok')
    


})
it('Dismiss Allert Test',()=>{
    
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    cy.get(':nth-child(2) > button').click()
    //Cypress otomatik olarak tamam a tıkladı ANCAK ben iptal butonuna tıklamak istiyorum.
    
    //on() -> jQuary bir fonksiyondur. Browserda açılan pencerelerin kontrolü için kullanılır.
    cy.on('window:confirm', ()=>{
        return false

    }) //iptali onaylıyoruz.
    //bu fonksiyon default olarak true şeklinde tanımlıdır.

    cy.get('#result').should('have.text','You clicked: Cancel')
    


})

   
it.only('SendText AllertWindow Test',()=>{
    
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    //tıklamadan önce 
    cy.window()//açılacak pop up penerelerini kontrol ediyoruz
    .then(($windowsElement) =>{
        
        cy.stub($windowsElement, 'prompt').returns('Cypress')
        cy.get(':nth-child(3) > button').click()
        
    })

    cy.get('#result').should('have.text','You entered: Cypress')
    

    
    


})


})