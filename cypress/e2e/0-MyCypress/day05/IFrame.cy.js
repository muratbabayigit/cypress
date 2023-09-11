///<reference types="Cypress" />

describe('', () => {
    //https://gitlab.com/kgroat/cypress-iframe

    //Terminalden npm install -D cypress-iframe komutu ile kurulum

    //require('cypress-iframe') kodunu e2e.js dosyasına ekledik.
    //Bu satırla biz cy.frameLoaded ve cy.iframe komutlarını kullanmamızı sağlıyor


    it.only('iFrame test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //driver.switchTo.frame(locate)

        cy.frameLoaded('#mce_0_ifr')
        cy.screenshot()
        cy.wait(2000)
        cy.iframe().find('p').clear()
        cy.wait(2000)
        cy.iframe().find('p').type('Have a WISE Day')
        cy.get('.large-4 > div').should('contains.text','Elemental Selenium')
        cy.log('Sayfa girşi doğrulandı')
        cy.get('.large-4 > div').click()
        cy.screenshot()

    
    });

    it('', () => {
        
    });

});