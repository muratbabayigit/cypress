///<reference types="Cypress" />

describe('Scroll İşlemleri', () => {
    it.skip('Sayfayı belirli bir yere kaydırma', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({duration:1000})
        //Locate alınan yere kaydırır
        cy.wait(5000)
        cy.get('.featured-package > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        
    });
    it.skip('İstediğimiz koordinata kaydırma', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,1)
        cy.wait(3000)
        cy.get('.blog-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,500) // aşağı inmek için
        cy.wait(3000)
        cy.scrollTo(0,-500) //yukarı çıkmak için
    
    });
    it('koordinatla gitme', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.team-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({top:500, left:0})

        
    });
});
