describe('Locate alma', () => {
    it('cy.get komutu', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}')
        cy.get('.gb_d').click
        cy.get('div#hdtb-msb div:nth-child(2) > a').click()   
     });
});

// xpath-->  //input[@id='APjFqb']     ///   cy.get('//input[@id="APjFqb"]')


//cy.get komutunda id alınıyorsa cy.get('id[APjFqb']) yerine cy.get('#APjFqb') yani id ise # koymak yeterli 
//class almışsak onun içinde . koymak yeterli