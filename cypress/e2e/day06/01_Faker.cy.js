/// <references type="cypress" />
import { faker } from '@faker-js/faker';

describe('Using Faker',()=>{

    //FAKER KURULUM

    //npmjs.com adresinden faker-js/faker indiriyoruz
    //npm install --save-dev @faker-js/faker
    // kullanılacak sayfada bu kod girilir: 
    //import { faker } from '@faker-js/faker';
   
    it('Faker Login Test',()=>{

        cy.visit('http://www.automationpractice.pl/index.php');
        cy.wait(3000)

        cy.get('.login').click()

        //let, var, const javascript değişkenleri

        let email=faker.internet.email()
        cy.get('#email_create').type(email)
        cy.wait(2000)  

        cy.get('#SubmitCreate > span').click()

        cy.get('#id_gender1').click()

        let firstName = faker.person.firstName()
        cy.get('#customer_firstname').type(firstName)
        cy.wait(2000)

        let lastName = faker.person.lastName()
        cy.get('#customer_lastname').type(lastName)
        cy.wait(2000) 

        let psw = faker.internet.password()
        cy.get('#passwd').type(psw)
        cy.wait(2000) 
        
        /*
        burası kaldırılmış
        let address=faker.location.streetAddress()
        cy.get('#address1').type(address)
        cy.wait(2000) 

        let city = faker.location.city()
        cy.get('#city').type(city)
        cy.wait(2000)
        
        cy.get('#id_state).select(1)
        cy.get('#phone_mobile')
        cy.get('#submit_account')
        */

        
        cy.get('#submitAccount > span').click()

        cy.get('.account > span').should('include.text',firstName)
        cy.get('.account > span').should('include.text',lastName)
        


   })

   

})