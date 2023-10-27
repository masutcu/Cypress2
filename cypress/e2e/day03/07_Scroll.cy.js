/// <references type="cypress" />

describe('Scroll',()=>{
   
    it('Scroll_intoView',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000)

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //Locate ettiğimiz yerin hemen altına sayfayı kaydırır

        cy.wait(3000)

        //eğer kaydırmak istediğimiz alana belirli bir süre içinde gitmesini istersek duration kullanırız

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView({duration: 3000})

        //scrollTo(x,y) en üste geri dönelim
        cy.scrollTo(0,0)
        cy.wait(3000)

        //500px aşağıya

        cy.scrollTo(0,500) //veya
        cy.scrollTo('500px')
        cy.wait(3000)

        //500px yukarıya

        cy.scrollTo(0,-500)

        






   })

   

})