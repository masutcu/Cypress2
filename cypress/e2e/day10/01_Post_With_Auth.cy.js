/// <references type="cypress" />

describe('Post With Auth',()=>{

    //şifre ile post

    //şifre için gönderilecek request
    /*
    {
        "username": "admin",
        "password": "password123"
    }
    */

    /*
    gönderilecek body formatı
    {
  "firstname": "John",
  "lastname": "Smith",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
    */
   
    it('Auth Post',()=>{
        cy.request({
            url:"https://restful-booker.herokuapp.com/booking",
            method:"POST",
            auth :{
                "username": "admin",
                "password": "password123"
            },
            body : {
                "firstname": "mehmetali",
                "lastname": "Sutcu",
                "totalprice": 777,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2023-11-01",
                    "checkout": "2023-11-02"
                    },
                "additionalneeds": "Breakfast"
            },
            
            "token":"abc123"

            }).then((response) => {
                console.log(response)

                expect(response.status).to.eq(200)
                expect(response.body.booking.firstname).to.eq("mehmetali")
                expect(response.body.booking.lastname).to.eq("Sutcu")
                expect(response.body.booking.totalprice).to.eq(777)
                expect(response.body.booking.depositpaid).to.eq(true)
                expect(response.body.booking.bookingdates.checkin).to.eq("2023-11-01")
                expect(response.body.booking.bookingdates.checkout).to.eq("2023-11-02")


            })


        })

        //consola baktığımızda gönderdiğimiz datanın 1524 id ile kayıt yapıldığını görüyoruz.
        //bu id yi endpoint e ekleyerek thunder client dan kontrol edebiliriz
        //https://restful-booker.herokuapp.com/booking//1524


   })

   

