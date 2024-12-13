export class PaymentMethods{

    cardNameFieldSelector = '[data-qa="name-on-card"]';
    cardNumberFieldSelector = '[data-qa="card-number"]';
    cvcFieldSelector = '[data-qa="cvc"]';
    expiryMonthFieldSelector = '[data-qa="expiry-month"]';
    expiryYearFieldSelector = '[data-qa="expiry-year"]';
    payButtonSelector = '[data-qa="pay-button"]';

    setCardName = (name) => cy.get(this.cardNameFieldSelector).clear().type(name).should('have.value', name);
    setCardNumber = (cardNumber) => cy.get(this.cardNumberFieldSelector).clear().type(cardNumber).should('have.value', cardNumber);
    setCVC = (cvc) => cy.get(this.cvcFieldSelector).clear().type(cvc).should('have.value', cvc);
    setExpiryMonth = (expiryMonth) => cy.get(this.expiryMonthFieldSelector).clear().type(expiryMonth).should('have.value', expiryMonth);
    setExpiryYear = (expiryYear) => cy.get('[data-qa="expiry-year"]').clear().type(expiryYear).should('have.value', expiryYear);
    clickOnPayButton = () => cy.get(this.payButtonSelector).click();
}