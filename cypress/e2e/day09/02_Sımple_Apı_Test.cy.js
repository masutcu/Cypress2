/// <references type="cypress" />

describe('Simple API test',()=>{
   
    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    
   it('Header Assert01',()=>{

    cy.request(requestUrl).
        its('headers'). //sayfada görülen dataların tamamı browser console da görülür oldu
        its('content-type').
        should('include','application/json; charset=utf-8')
        
   })

    //2.yol

   it('Header Assert02',()=>{

    cy.request({ url: requestUrl, method:'GET'}).
    its('headers').
    its('content-type').
    should('include','application/json; charset=utf-8')
               
    })


   })



