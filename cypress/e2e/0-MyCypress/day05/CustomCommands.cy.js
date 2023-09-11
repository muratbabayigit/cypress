///<reference types="Cypress" />

describe('CustomCommands', () => {
    it.skip('Pozitif Login Testi 1', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.btn-sign-in-simple').click()
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b')
    });
    it.skip('Komutla Pozitif Login Testi', () => {
        cy.Login('mb@babayigit.net','M123456.b{enter}')
        
    });

    it('Komutla negatif login testi', () => {
        cy.Login('murat@babayigit.net','M123456b{enter}')
        
    });
});