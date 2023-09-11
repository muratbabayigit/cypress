describe('Simple Api Assertion', () => {
    
    it('Api Assertion1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('headers').its('date').should('include','Fri, 14 Jul 2023 ')


    });

    it('Api Assertion 2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method: 'GET'
        }).its('headers').its('date').should('include','Fri, 14 Jul 2023 ')
        
    });
});