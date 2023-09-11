describe('POST İşlemi', () => {
    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    it('Test', () => {
        cy.request('POST',requestUrl,{
            userId:501,
            title:"Cypress Test Operation",
            body: "JS Based",
            name:"Murat"
        }).should((response)=>{
            expect(response.body.name).to.eq("Murat")
            expect(response.body.title).to.eq("Cypress Test Operation")
            expect(response.body.body).to.eq("JS Based")
        })

    
        
    });
});