/// <references type="cypress" />

describe('Multiple Windows',()=>{
    /*
    Cypress de dashborda açılan pencere sabit kalınca 
    yeni açılan penceredeki testler görükmüyor. 
    Bu yüzden yeni açılan penvcereyi eski pencere 
    alanında açmamız gerekiyor.
    */
   //1.Yol:  html kodları üzerinde  target="blank" olarak yer alan ve yeni pencere açtıran tag i, invoke() ile yok ediyoruz
    it('Removing Attribute',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)

        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.get('h3').should('have.text','New Window')


   })
   // 2. Yol: Bir fonksiyon içinde prop() ile
   // çalışılan  sayfa içinde yeni açılacak sayfanın href ini alarak esas sayfa olarak atıyoruz.

   it.only('',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.wait(3000)

    cy.get('.example > a').then((element)=>{
        const newURL = element.prop('href')
        cy.visit(newURL)

    })


   })

})