///<reference types="Cypress" />

describe('CheckBox Methodları', () => {
    it.skip('CheckBox Seçimi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
        
    });

    it.skip('Sırasına göre seçme', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(5000)
        cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')
        cy.wait(5000)
        cy.get("input[type='checkbox']").first().check().should('be.checked') //first() = eq(0)
        
    });
    it('Toplu Check', () => {
        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
        //cy.get("input[type='checkbox']").check()
        //cy.get("input[type='checkbox']").eq(11).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(16).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(24).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(35).check().should('be.checked')
        
       



        
    });
});