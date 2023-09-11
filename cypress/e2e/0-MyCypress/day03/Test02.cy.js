/*
TEST-2 Negatif
1-	http://www.automationexercise.com 
2-	Signup/Login sayfasına git
3-	baba71@gmail.com 123456 ile giriş yap
4-	Giriş yapılamadığını doğrula 
*/

describe('Negatif Login test', () => {
    it('Test İşlemi', () => {
        cy.visit('http://www.automationexercise.com')  //Burad ilgili sayfaya gidildi
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() //Login sayfasına gidebilmek için alınan locate cilck edildi
        cy.get('[data-qa="login-email"]').type('baba71@gmail.com') //username bilgisi girildi
        cy.get('[data-qa="login-password"]').type('123456') //Şifre bilgisi girildi
        cy.get('[data-qa="login-button"]').click() // Giriş butonuna tıklandı
        cy.get('.login-form > form > p').should('include.text','incorrect') //Giriş yapılamadığı doğrulandı
        ,cy.log('Test Başarıyla Tamamlandı')

        
    });
});