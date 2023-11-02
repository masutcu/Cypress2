/// <references type="cypress" />

describe('Json Place Holder',()=>{

    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    //Bu sayfaya request ile dashboard da gittiğimizde BOŞ sayfa görülüyor. inspact ile consola bakıyoruz.
    
    /*
    Thunder Clint ile aldığımız 1. data
    {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
    */

   
    it('Test01',()=>{

        cy.request(requestUrl).should((response)=>{
            //assert ve expect ile yapılan assertion Chai den geliyor
            
            assert.equal(response.status,200)
            assert.equal(response.body[0].postId,1)
            assert.equal(response.body[0].id,1)
            assert.equal(response.body[0].name,"id labore ex et quam laborum")
            assert.equal(response.body[0].email,"Eliseo@gardner.biz")


        })


   })

   it('Test02',()=>{
    
    cy.request(requestUrl).should((response)=>{
        
        expect(response.status).to.eq(200)
        expect(response.body[0].postId).to.eq(1)
        expect(response.body[0].id).to.eq(1)
        expect(response.body[0].name).to.eq("id labore ex et quam laborum")
        expect(response.body[0].email).to.eq("Eliseo@gardner.biz")


    })

    })

    it('Test03',()=>{
    
        cy.request({url:requestUrl, method: 'GET'}).      
        should((response)=>{
            
            expect(response.status).to.eq(200)
            expect(response.body[0].postId).to.eq(1)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].name).to.eq("id labore ex et quam laborum")
            expect(response.body[0].email).to.eq("Eliseo@gardner.biz")
    
    
        })

   })

   })