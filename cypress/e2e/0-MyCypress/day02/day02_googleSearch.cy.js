describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google da 3 Idiots', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')
        
    });
    it('google da er ryan kurtarmak araması', () => {
        cy.get('#APjFqb').type('Er ryan kurtarmak{enter}')
    });
});