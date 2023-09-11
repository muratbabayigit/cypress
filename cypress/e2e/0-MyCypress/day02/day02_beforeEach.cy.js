describe('', () => {
    beforeEach(() => { //beforeEach her bir it bloğundan yani her bir testten önce çalışır
        cy.visit('https://www.google.com')
       // cy.visit('/')
    });
    it('title', () => {
        cy.title().should('eq','Google')
        cy.title().should('include','Google')
    });
    it('url test', () => {
        cy.url().should('include','google')
        
    });
});