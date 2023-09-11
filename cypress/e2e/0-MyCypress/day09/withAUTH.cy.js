describe('Test with Auth.', () => {
    /*
 
 {
  "firstname": "Josh",
  "lastname": "Allen",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "super bowls"
}
    */

    it.skip('test 1-GET', () => {
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking/878',
            method:'GET',
            auth:
            {
                "username" : "admin",
                "password" : "password123"
            },
            "token": "abc123"
        }).then(response =>{
            expect(response.body.lastname).to.eq("Allen")

        })
        
    });
    it('test 2 -POST and Assert', () => {
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'POST',
            auth:
            {
                "username" : "admin",
                "password" : "password123"
            },
            "token": "abc123",
            body:{
                "firstname" : "Yasir",
                "lastname" : "Turk",
                "totalprice" : 223,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2023-07-17",
                    "checkout" : "2023-07-23"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then(response =>{
            expect(response.body.booking.firstname).to.eq("Yasir")
            expect(response.body.booking.lastname).to.eq("Turk")
            expect(response.body.booking.bookingdates.checkin).to.eq("2023-07-17")
            expect(response.body.booking.depositpaid).to.eq(true)

        })
        
    });

});