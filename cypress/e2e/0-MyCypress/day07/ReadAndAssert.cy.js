describe('Read and Assert form Files', () => {
    it('Read and Assert', () => {
        cy.readFile('cypress/fixtures/user.json').then(
            (userdata) =>{
            expect(userdata[7].name).to.equal('Nicholas Runolfsdottir V')
            expect(userdata[7].username).to.equal('Maxime_Nienow')
            expect(userdata[7].email).to.equal('Sherwood@rosamond.me')
        }
        )
    });
});