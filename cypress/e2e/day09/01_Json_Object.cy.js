/// <references type="cypress" />

describe('Json Object',()=>{
   
    it('Json Object1',()=>{

        cy.visit('https://www.google.com')
        const simpleObject = {"key1": "value1", "key2": "value2", "key3": "value3"}
        
        console.log(simpleObject.key2)//bu kod browser consola key2 nin value sini yazdırır.
        console.log(simpleObject["key2"])//2.yol bu kod consola key2 yazdırırır.

        const simpleArrayOfValue=["one", "two", "three"]
        console.log(simpleArrayOfValue[0])//bu kod browser consola one yazdırır.

        const arrayObject=[{"key1": "value1"}, {"key2": "value2"}, {"key3": "value3"}]
        console.log(arrayObject[2].key3)//value3

        const dataType={"String": "Mehmet", "number": 21}
        const body={
            "Student":[
                {"FirstName": "Seda", "LastName": "Öztürk"},
                {"FirstName": "Halil", "LastName": "Günbatı"},
                {"FirstName": "Cemil", "LastName": "Çiçek"},                           
    
    ]}
    console.log(body.Student[2].FirstName)
    console.log(body.Student[1].LastName)
    console.log(body)
        



   })

   

})