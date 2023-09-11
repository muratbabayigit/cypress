describe('WriteandRead Files', () => {
    it('Write Files', () => {
        cy.writeFile('C:/Users/murat/OneDrive/Masaüstü/cypreess/cypress/fixtures/örnek2.txt','Murat Babayiğit\n')
        cy.writeFile('C:/Users/murat/OneDrive/Masaüstü/cypreess/cypress/fixtures/örnek2.txt','Wise Quarter',{flag:'a+'})
    });
});