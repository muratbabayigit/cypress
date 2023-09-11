describe('JSON place Holder Assert', () => {
    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    /*
    {
    "postId": 2,
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": ",'Presley.Mueller@myrl.com),
    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  }
    */

    it('JSON PLace Holder Test', () => {
        cy.request(requestUrl).should((response =>{
            assert.equal(response.body[5].id,6)
            assert.equal(response.body[5].email,'Presley.Mueller@myrl.com')
            assert.equal(response.body[5].name,'et fugit eligendi deleniti quidem qui sint nihil autem')

        }))
        
    });
        it('Test01', () => {
        cy.request(requestUrl).should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].email).to.eq("Eliseo@gardner.biz")


        })

        
    });
    it('Test 02', () => {
        cy.request({
            url:requestUrl,
            method:'GET'
        }).should((response)=>{
            expect(response.body[0].id).to.eq(1)
        })
    });
    
});
