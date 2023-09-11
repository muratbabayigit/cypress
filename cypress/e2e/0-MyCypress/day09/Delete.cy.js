describe('Delete Post', () => {
    it('', () => {
        cy.request({
            url:'https://dummy.restapiexample.com/api/v1/delete/2',
            method:'DELETE'
        }).then(response =>{
            expect(response.body.message).to.eq("Successfully! Record has been deleted")
        })
        
    });
});