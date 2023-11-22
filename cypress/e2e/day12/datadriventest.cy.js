describe('myTestSuite', () => {

    it('dataDrivenTest', () => {

        cy.fixture('orangehrm2').then((data) => {
            //Buradaki data fixture json paketindeki 3 paketi temsil ediyor
            cy.visit('https://opensource-demo.orangehrmlive.com')

            data.forEach((userdata) => {
                //buradaki userdata fixture json  paketindeki datalardan herbirini temsi ediyor. NestedLoop

                cy.get('[name="username"]').type(userdata.username)

                cy.get('[name="password"]').type(userdata.password)

                cy.get('[type="submit"]').click()

                if ((userdata.username == "Admin") && (userdata.password == "admin123")) {

                    cy.get('[class="oxd-topbar-header-breadcrumb"]').should('have.text', userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()

                    cy.get('[class="oxd-dropdown-menu"]>li:nth-child(4)').click()

                } else {
                    //başarısız girişte assert için başarısız giriş yazısını kullan diyoruz

                    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', userdata.expected)
                }


            })



        });



    });




})