///<reference types="Cypress" />

describe('JS Alerts Click', () => {
    it.skip('Only Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click() //Cypress default olarak Tamam(Ok)'e tıklar
        cy.get('#result').should('have.text','You successfully clicked an alert')
     
    });
    it('Confirm Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        //default olarak ok butonuna tıklar
        cy.get('#result').should('have.text','You clicked: Ok')
    });

    it('Dismiss Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm', ()=> {   //on() fonksiyonu JQuery fonksiyonudur. Browse'da pencerelerin kontrolünü sağlar
            return false
            
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    });

    it.only('Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
        cy.wait(3000)
        cy.get(':nth-child(3) > button').click()
        cy.window().then(($windowsElement) => {
            cy.stub('$windowsElement','prompt').returns('Wise')
            cy.screenshot()
        })
    });
});