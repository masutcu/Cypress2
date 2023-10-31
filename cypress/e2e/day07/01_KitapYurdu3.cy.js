/// <references type="cypress" />
import HomePage from '../POM/HomePage.cy'
import LoginPage from '../POM/LoginPage.cy'

//Bu class da POM mantığıyla testimizi yazıyoruz.

describe('KitapYurdu2', () => {
    
    before(function () {
        cy.fixture('kitapyurdu').then(function (data) {
            this.data = data
        })
    })

      

        it('KitapYurdu Login Test2', function() {

            //import edilen class dan obje oluşturuyoruz
            const homePage=new HomePage()
            const loginPage=new LoginPage()


            cy.visit(this.data.url)

            cy.wait(3000)

            //cy.get('.login > a').click()
            homePage.getSigninLink().click()

           

           // cy.get('#login-email').type(this.data.email)
            loginPage.getMailBox().type(this.data.email)

            //cy.get('#login-password').type(this.data.psw)
            loginPage.getPswBox().type(this.data.psw)
            cy.wait(1000)
            
            //cy.get('.ky-btn-orange').click()
            loginPage.getAccButton().click()

            cy.get('b').should('include.text', 'Mehmet')
            cy.get('b').should('include.text', 'Sutcu')



        })
        })