describe('', () => {
    beforeEach('QualitDemy Log in Test', () => {
        cy.visit('https://qa.qualitydemy.com/')
        //login testi yapılacak siteye gittil [ seleniumdaki get()]
        cy.get('.cookieButton > a').click()
        //cookies onayı verildi
    });
        //ASSERTION

        it('', () => {
            //1 have-text
        cy.get('.btn-sign-in-simple').should('have.text','Log in')
        //sayfa log in yazısı var mı
        });
        it('', () => {
        //2 cy.url().should()
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')
        //login adresi login kelimesi içeriyor mu
    });
        it('', () => {
        //3 cy.title.should
        cy.get('.btn-sign-in-simple').click()
        cy.title().should('eq','Login | QualityDemy')
        //login sayfa title istenilen değere tam eşit mi
    });
        it('', () => {
        //4 be.visible
        cy.get('.text-14px').should('be.visible')
    });
        it('', () => {
        //5 include text
        cy.get('.btn-sign-in-simple').should('include.text','Log')
        //sayfa log in yazısı var mı
        

    });
});