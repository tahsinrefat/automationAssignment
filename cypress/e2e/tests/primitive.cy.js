/// <reference types="cypress" />

// const { it } = require("mocha");

import 'cypress-file-upload';

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
}

function getParts(string) {
    const parts = string.split(' ');
  
    return parts;
}

describe('Primitive Way', () => {
    it('Single Task', () => {
        //signup task
        cy.visit('https://automationexercise.com/login');

        // cy.get('[data-qa="login-email"]').clear().type('tahsin.refat@gmail.com').should('have.value', 'tahsin.refat@gmail.com');
        // cy.get('[data-qa="login-password"]').clear().type('Zen1tsuzzz').should('have.value', 'Zen1tsuzzz');
        // cy.get('[data-qa="login-button"]').click();
        const randomName = generateRandomString(4)+ ' ' + generateRandomString(6);
        cy.get('[data-qa="signup-name"]').clear().type(randomName).should('have.value', randomName);
        cy.log(randomName);

        const randomEmail = generateRandomString(6)+'@'+generateRandomString(4)+'.com';
        cy.get('[data-qa="signup-email"]').clear().type(randomEmail).should('have.value', randomEmail);
        cy.log(randomEmail);

        cy.get('[data-qa="signup-button"]').click();


        cy.get('[data-qa="title"]').first().click();

        const randomPassowrd = generateRandomString(10);
        cy.get('[data-qa="password"]').clear().type(randomPassowrd).should('have.value', randomPassowrd);
        cy.log(randomPassowrd);

        cy.get('[data-qa="days"]').select('15');
        cy.get('[data-qa="months"]').select('9');
        cy.get('[data-qa="years"]').select('1999');

        cy.get('#newsletter').click();
        cy.get('#optin').click();

        const partsOfName = getParts(randomName);
        cy.get('[data-qa="first_name"]').clear().type(partsOfName[0]).should('have.value', partsOfName[0]);

        cy.get('[data-qa="last_name"]').clear().type(partsOfName[1]).should('have.value', partsOfName[1]);

        const randomCompany = generateRandomString(8);
        cy.get('[data-qa="company"]').clear().type(randomCompany).should('have.value', randomCompany);
        cy.log(randomCompany)

        const randomAddress = generateRandomString(6) + ', ' + generateRandomString(7) + ', ' + generateRandomString(8)+ ', ' + generateRandomString(9);
        cy.get('[data-qa="address"]').clear().type(randomAddress).should('have.value', randomAddress);
        cy.log(randomAddress);

        const randomAddress2 = generateRandomString(6) + ', ' + generateRandomString(7) + ', ' + generateRandomString(8)+ ', ' + generateRandomString(9);
        cy.get('[data-qa="address2"]').clear().type(randomAddress2).should('have.value', randomAddress2);
        cy.log(randomAddress2);

        cy.get('[data-qa="country"]').select('Singapore');

        const randomState = generateRandomString(6);
        cy.get('[data-qa="state"]').clear().type(randomState).should('have.value', randomState);
        cy.log(randomState);

        const randomCity = generateRandomString(8);
        cy.get('[data-qa="city"]').clear().type(randomCity).should('have.value', randomCity);
        cy.log(randomCity);

        cy.get('[data-qa="zipcode"]').clear().type(123456).should('have.value', 123456);

        cy.get('[data-qa="mobile_number"]').clear().type('+88018927364').should('have.value', '+88018927364');

        cy.get('[data-qa="create-account"]').click();
        
        cy.get('[data-qa="continue-button"]').click();
        //signup task

        //shopping task
        cy.contains('a', 'Men');

        // cy.contains('a', 'Jeans').click();
        // cy.get('a').contains('Jeans').should('be.visible').click();
        cy.get('a').contains('Jeans').click({ force: true });



        cy.get('a[href="/product_details/33"]').click();


        cy.get('#quantity').clear().type(2).should('have.value', 2);

        cy.get('button.cart').contains('Add to cart').click();

        cy.get('a[href="/view_cart"]').first().click();


        cy.get('a.check_out').contains('Proceed To Checkout').click();


        cy.get('a.check_out').contains('Place Order').click();
        //shopping task

        //payment task
        cy.get('[data-qa="name-on-card"]').clear().type(randomName).should('have.value', randomName);

        cy.get('[data-qa="card-number"]').clear().type(123456789).should('have.value', 123456789);

        cy.get('[data-qa="cvc"]').clear().type(123).should('have.value', 123);

        cy.get('[data-qa="expiry-month"]').clear().type(12).should('have.value', 12);

        cy.get('[data-qa="expiry-year"]').clear().type(2024).should('have.value', 2024);

        cy.get('[data-qa="pay-button"]').click();
        //payment task

        //contact task
        cy.contains('a', 'Contact us').click();


        cy.get('[data-qa="name"]').clear().type(randomName).should('have.value', randomName);

        cy.get('[data-qa="email"]').clear().type(randomEmail).should('have.value', randomEmail);

        const randomSubject = generateRandomString(12) + ' ' + generateRandomString(4) + ' ' + generateRandomString(6) + ' ' + generateRandomString(15);
        cy.get('[data-qa="subject"]').clear().type(randomSubject).should('have.value', randomSubject);

        const randomMessage = generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12)+ 
                                generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12)+
                                generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12)+
                                generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12)+
                                generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12)+
                                generateRandomString(4)+ ' ' +generateRandomString(15) + ' '+ generateRandomString(5) + ' ' + generateRandomString(12);
        cy.get('[data-qa="message"]').clear().type(randomMessage).should('have.value', randomMessage);

        const filePath = 'example.json';
        cy.get('input[type="file"]').attachFile(filePath);
        cy.pause();

        cy.get('[data-qa="submit-button"]').click();
        cy.pause();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed!');
        });


        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
        //contact task

        // cy.contains('a', 'Delete Account').click();


        // cy.get('[data-qa="continue-button"]').click();

    });
})