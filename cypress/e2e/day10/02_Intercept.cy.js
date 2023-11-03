/// <references type="cypress" />

describe('Intercept Test',()=>{
   
    it('Test01',()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
        //intercept komutu sayfa işlemleri dinlemeye alınıyor
        //hareket console network alanından izlenebilir.

        cy.intercept('GET', '**/comments/*').as('getComment')
        //network u dinle dedik, as ile daha sonra @ işareti ile kullanmak üzere isimlendirme yaptık

        cy.get('.network-btn').click()
        //yaptığımız click işlemini network alanındaki hareketinden teyit ediyoruz

        cy.wait('@getComment').its('response').then((response)=>{
            console.log(response)
            assert.equal(response.statusCode, 200,'Status Code Kontrol edildi.')
            //mesajı kendimiz belirleyebiliyoruz.
        })




   })

   

})