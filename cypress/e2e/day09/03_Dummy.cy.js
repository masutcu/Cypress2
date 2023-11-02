/// <references type="cypress" />
    //bu class da çalışırken Thunder Clint eklentisi ile https://dummy.restapiexample.com/api/v1/employees
    //adresi üzerinden gönderilen requestler ile çalışıldı
describe('Dummy Assert',()=>{

    /*
    {
      "id": 10,
      "employee_name": "Sonya Frost",
      "employee_salary": 103600,
      "employee_age": 23,
      "profile_image": ""
    },
    */
   
    it('Test01',()=>{
        cy.request('https://dummy.restapiexample.com/api/v1/employees').
        should((response)=>{
            assert.equal(response.status,200)
            assert.equal(response.body.data[9].id,10)
            assert.equal(response.body.data[9].employee_name,"Sonya Frost")
            assert.equal(response.body.data[9].employee_salary,103600)
            assert.equal(response.body.data[9].employee_age,23)
        })


   })

   it('',()=>{


   })

})