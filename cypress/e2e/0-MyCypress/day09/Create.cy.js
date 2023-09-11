describe('Create POST', () => {
    const bodyrequest={"name":"Aysel","salary":"3500","age":"23"}
    it('TEST', () => {
        cy.request({
            url: 'https://dummy.restapiexample.com/api/v1/create',
            method: 'POST',
            body :bodyrequest
        }).then(response =>{
            expect(response.body.message).to.eq("Successfully! Record has been added.")
            expect(response.body.data.name).to.eq("Aysel")
        })
        
    });
});