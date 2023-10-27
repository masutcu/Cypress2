/// <references type="cypress" />

describe('Check Box',()=>{
   
    it('Test Case1',()=>{
    //işaretleme için click() yerine check() kullanıyoruz
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.wait(2000)
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
        cy.wait(2000)

        //category tıklı olmadığını kontrol
        cy.get('#layered_category_4').should('not.be.checked')

        //medium tıklı ve tıksız olduğunu kontrol
        cy.get('#layered_id_attribute_group_2').check()
        cy.wait(2000)
        cy.get('#layered_id_attribute_group_2').should('be.checked')
        cy.wait(2000)
        cy.get('#layered_id_attribute_group_2').uncheck()
        cy.wait(2000)
        cy.get('#layered_id_attribute_group_2').should('not.be.checked')


        //turuncu
        cy.get('#layered_id_attribute_group_13').click()
        cy.wait(2000)


   })

   it('all CheckBoxes',()=>{
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.wait(2000)
    cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    cy.wait(2000)

    //bütün check box lara tıkla. burada önemli olan checkbox lara gidilen locate hepsini kapsamalıdır.

    cy.get('input[type="checkbox"]').check()
    cy.wait(2000)
    cy.get('input[type="checkbox"]').uncheck()
    cy.wait(2000)




   })

   it('all Checkboxes2',()=>{
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.wait(2000)
    cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    cy.wait(2000)

    //1. kutuya tıkla

    cy.get('input[type="checkbox"]').eq(0).check()
    cy.wait(2000)

    //5. kutuya tıkla
    cy.get('input[type="checkbox"]').eq(4).check()
    cy.wait(2000)


    //10. kutuya tıkla
    cy.get('input[type="checkbox"]').eq(9).check()
    cy.wait(2000)

    //1. kutu Tıklamayı kaldır ve assert yap
    cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked')
    cy.wait(2000)

   })

   it.only('Çoklu CheckBox Click ile',()=>{

    cy.visit('http://www.automationpractice.pl/index.php');
    cy.wait(2000)
    cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    cy.wait(2000)

    cy.get('input[type="checkbox"]').click({ multiple: true })
    cy.wait(2000)
    //burada alınan locate de 15 element olduğu için herbirini tıklamak istiyırsak { multiple: true } şeklinde belirtmeliyiz.


   })

})