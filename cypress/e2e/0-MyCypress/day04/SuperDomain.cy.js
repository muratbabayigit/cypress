///<reference types="Cypress" />
describe('SuperDomain', () => {
    it('Aynı Classta İki Farklı Visit', () => {
        cy.visit('https://amazon.com')
        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')

       // cy.visit('https://www.google.com')
        
    });
    it('Farklı Adres', () => {
        cy.visit('https://www.google.com')
        
    });
});
