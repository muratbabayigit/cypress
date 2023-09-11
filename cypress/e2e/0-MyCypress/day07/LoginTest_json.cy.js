///<reference types="Cypress" />
describe('Json Login testi', () => {

    before(function() {
        cy.fixture('qualitydemy').then(function(data){
            this.data=data
        })
    })
    it('Json test', function() {
        cy.visit(this.data.url)
        cy.contains('log in',{matchCase:false}).click()
        
    })
    
})