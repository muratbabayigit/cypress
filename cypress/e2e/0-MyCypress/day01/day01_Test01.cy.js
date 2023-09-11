describe('Temel Cypress Komutları', () => {
    it('cy.visit komutu', () => {
        cy.visit('/') //baseUrl tanımlandıysa
        cy.visit('https://www.amazon.com') //base url tanımlı değilse
    });

    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
        
    });

    it.skip('cy.title komutu', () => { //skip komutu bu testin es geçilmesini sağlar
        cy.visit('/') //baseUrl adrese gider
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected') //title için tam eşitlik durumudur
        cy.title().should('include', 'expected') //verilen string içerme durumu
        cy.title().should('contains','Deliver') //verilen string içerme durumu

        
    });

    it('cy.url ve cy.location', () => { //only komutu ise sadece o testin çalışmasına neden olur
        cy.visit('/')
        cy.url().should('eq', 'https://wisequarter.com/') //Url tam eşitlik durumunu kontrol eder
        cy.url().should('include','wisequarter') //Url string içerme durumuna bakar
        cy.location('pathname').should('eq','/about-us') //Pathname about-us olduğunu doğrular


        
        
    });

});