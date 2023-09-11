describe('Login testi', () => {
    it('Pozitif Login Testi', () => {
      
        cy.visit('http://www.automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.log('Login to your account yazısı kontrol ediliyor');
        cy.get('.login-form > h2').should('be.visible')
        cy.get('.signup-form > h2').should('have.text','New User Signup!')     
    });
    it('Giriş İşlemi', () => {
        cy.visit('http://www.automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456{enter}')
        cy.get(':nth-child(10) > a').should('include.text','Logged')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.log('Pozitif Login Testi Tamamlandı')

        
        
    });
});
/*
TEST  – 1 Pozitif
1-	http://www.automationexercise.com adresine git
2-	Signup/Login sayfasına git
3-	“Login to your account” yazısının bulunduğunu doğrula
4-	“New User Signup!” yazısının varlığını doğrula
5-	babayigit@gmail.com 123456 ile giriş yap
6-	Giriş yaptığını doğrula
7-	Çıkış yap
8-	Çıkış yapıldığını doğrula


*/
