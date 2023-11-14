describe('mouse Actions', ()=> {


    it('mouseOver', () => {

        cy.visit('https://demo.opencart.com/')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('[class="dropdown-menu show"]>div>ul>li:nth-child(1)').should('be.visible')
        
    });

    it('rightClick', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')

        cy.get('[class="context-menu-list context-menu-root"]>li:nth-child(5)').should('be.visible')
    });

    it.only('doubleClick', () => {

        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')

         cy.frameLoaded('#iframeResult')

         cy.iframe("#iframeResult").find('[ondblclick="myFunction()"]').trigger('dblclick')

         cy.iframe('#iframeResult').find('#demo').should("have.text","Hello World ")





        
    });





})