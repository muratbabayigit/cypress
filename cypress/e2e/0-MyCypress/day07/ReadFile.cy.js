describe('WriteAndReadFiles', () => {
    it('Read Files', () => {
        cy.readFile('C:/Users/murat/OneDrive/Masaüstü/cypreess/cypress/fixtures/örnek2.txt').should('contain','Murat')
        
    });
});