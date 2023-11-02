/// <references type="cypress" />

describe('Dummy Delete',()=>{

    const requestUrl="https://dummy.restapiexample.com/api/v1/delete/2"
    
  
    it('Delete Test01',()=>{

        

        cy.request({
            url:requestUrl,
            method:'DELETE'
                    

        }).then(response=>{
            expect(response.body.status).to.equal('success')
            expect(response.body.message).to.equal('Successfully! Record has been deleted')

        })

        })     
        

   })
 

   