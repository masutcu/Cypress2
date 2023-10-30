/// <references type="cypress" />

describe('KitapYurdu2', () => {
    
    before(function () {
        cy.fixture('kitapyurdu').then(function (data) {
            this.data = data
        })
    })

        //Bu class daki sayfaya ulaşılamıyor

        it('KitapYurdu Login Test2', function() {


            cy.visit(this.data.url)

            cy.wait(3000)

            cy.get('.login > a').click()

            cy.get('#login-email').type(this.data.email)
            cy.wait(1000)
            cy.get('#login-password').type(this.data.psw)
            cy.wait(1000)
            cy.get('.ky-btn-orange').click()

            cy.get('b').should('include.text', 'Mehmet')
            cy.get('b').should('include.text', 'Sutcu')



        })
        })