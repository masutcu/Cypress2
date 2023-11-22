describe('FixtureDemoTest', () => {


    

    it('DemoTest', () => {



        cy.visit("https://opensource-demo.orangehrmlive.com")
        //dataları fixture klasöründen çekeceğiz
        cy.fixture('orangehrm').then((data) => {
            //burada data isimlendirmesini biz istediğimiz şekilde yapabiliriz

            cy.get('[name="username"]').type(data.username)
            cy.get('[name="password"]').type(data.password)
            cy.get('[type="submit"]').click()

            cy.get('[class="oxd-topbar-header-breadcrumb"]').should('have.text', data.expected)

        })




    })

    let userdata;

    before(() => {
        cy.fixture('orangehrm').then((data) => {
            //fixture dan gelen ve data olarak isimlendirdiğimiz verileri userdata olarak çağır
            userdata = data

        })
    })

    

    it.only('Fixture2', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com")
        //dataları fixture klasöründen çekerken data ismini before ile userdatya çevirdik
        cy.fixture('orangehrm').then((data) => {

            cy.get('[name="username"]').type(userdata.username)
            cy.get('[name="password"]').type(userdata.password)
            cy.get('[type="submit"]').click()

            cy.get('[class="oxd-topbar-header-breadcrumb"]').should('have.text', userdata.expected)

        })




    })



})