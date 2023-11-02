/// <references type="cypress" />

describe('Post Json Place Holder',()=>{

    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    
  
    it('Post Test01',()=>{

        cy.request('POST', requestUrl,{
            userId:501,
            title:"Cypress cok kolay",
            body:"JavScript daha Kolay"


        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.userId).to.eq(501);
            expect(response.body.title).to.eq("Cypress cok kolay");
            expect(response.body.body).to.eq("JavScript daha Kolay");
        })     
        
        


   })

   

   })

