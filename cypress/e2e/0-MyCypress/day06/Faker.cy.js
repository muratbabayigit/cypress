///<reference types="Cypress" />
import { faker } from '@faker-js/faker'


describe('Faker Kullanimi', () => {
    /*
    KURULUM İŞLEMİNİ
    www.npmjs.com adresine gidelim
    npm install --save-dev @faker-js/faker ile kurulum yapılır
    Cypress'te üç farklı değişken tanımlaması yapılır

    let variablename=     değer atanabilir ve değiştirilebilir
    var variablename=     değer atanabilir ve değiştirilebilir
    const variableName=   değer atanır ve değiştirilemez


*/


    it('Automationexercise.com Login testi', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        let firstName=faker.person.firstName('male')
        let surname=faker.person.lastName()
        cy.get('[data-qa="signup-name"]').type(firstName+' '+surname)  
        let email=faker.internet.email()
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        let password=faker.internet.password()
        cy.get('[data-qa="password"]').type(password)
        cy.get('[data-qa="first_name"]').type(firstName)
        cy.get('[data-qa="last_name"]').type(surname)
        let address=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(address)
        cy.get('[data-qa="country"]').select(1)
        let state=faker.location.state()
        cy.get('[data-qa="state"]').type(state)
        let city=faker.location.city()
        cy.get('[data-qa="city"]').type(city)
        let zipCode=faker.location.zipCode('#####')
        cy.get('[data-qa="zipcode"]').type(zipCode)
        let phoneNumber=faker.phone.number('###-###-##-##')
        cy.get('[data-qa="mobile_number"]').type(phoneNumber)
        cy.get('[data-qa="create-account"]').click()
        cy.wait(3000)
        cy.get('b').should('contains.text','Created')


             
    });
});