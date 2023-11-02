/// <references type="cypress" />

describe('Dummy Post',()=>{

    const requestUrl="https://dummy.restapiexample.com/api/v1/create"
    
  
    it('Post Test02',()=>{

        const bodyRequest={"name": "Cypress", "salary": "199$","age":"44"}

        cy.request({
            url:requestUrl,
            method:'POST',
            body:bodyRequest
            

        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq("success");
            expect(response.body.message).to.eq("Successfully! Record has been added.")
            
        })     
        

   })
 

   })


