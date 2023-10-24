/// <references type="cypress" />

describe('Koala ResortHotel',()=>{
   
    it('Log in Test',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        
        //contains kullanımları 1: içrerik text ile
        // cy.contains('Log in').click()
       
        //2:veya aşağıdaki gibi element adresinde text aratarakda yapılabilir
        //cy.contains('[class="nav-link"]','Log in').click()

        //3:veya tag name i vererek yapılabilir
        cy.contains('li','Log in').click()
        
        //4: veya büyük küçük harf dikkate almadan 
        cy.contains('log in', {matchCase: false}).click()

        //ASSERT

        //1 have.text ile -locate edilen yerdeki metinde istenilen text varmı?
        cy.get('#navLogon > .nav-link').should('have.text','Log in')

        //2 cy.url()
        cy.url().should('include','Account/Logon')

        //3 be.visible
        cy.get('.row > .mb-4').should('be.visible')

        //4 title ile 
        cy.title().should('eq','KoalaResortHotels - Log in')

        //5 include.text
        cy.get('#navLogon > .nav-link').should('include.text','Log in')

        //Toplam link sayısı
        cy.get('li a').should('have.length',29)

        //find(): belirli bir html seçiminin alt elemanlarını bulmak için 
        cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')

        //within() : 
        cy.get('div.categories').within(()=>{
            cy.get('a[href="/Rooms/320"]').click()


            /*
            Web elementleri ilk olarak get() ile bulacağız, Bulamaz isek find() ile, olmaz ise within() ile deneyeceğiz
            */




        })






   })

   

})