import { attachFile } from "cypress-file-upload";

export class ContactMethods{

    contactUsSelectors = ['a', 'Contact us'];
    nameFieldSelector = '[data-qa="name"]';
    emailFieldSelector = '[data-qa="email"]';
    subjectFieldSelector = '[data-qa="subject"]';
    messageFieldSelector = '[data-qa="message"]';
    attachFileFieldSelector = 'input[type="file"]';
    submitButtonSelector = '[data-qa="submit-button"]';
    successfulSubmissionMessage = 'Success! Your details have been submitted successfully.';

    clickOnContactUs = () => cy.contains(this.contactUsSelectors[0], this.contactUsSelectors[1]).click();
    setName = (name) => cy.get(this.nameFieldSelector).clear().type(name).should('have.value', name);
    setEmail = (email) => cy.get(this.emailFieldSelector).clear().type(email).should('have.value', email);
    setSubject = (subject) => cy.get(this.subjectFieldSelector).clear().type(subject).should('have.value', subject);
    setMessage = (message) => cy.get(this.messageFieldSelector).clear().type(message).should('have.value', message);
    attachFile = (pathToFile) => cy.get(this.attachFileFieldSelector).attachFile(pathToFile);
    clickOnSubmitButton = () => cy.get(this.submitButtonSelector).click();
    clickOnAlertOkButton = () =>{
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed!');
        });
    }
    verifySubmission = () => cy.contains(this.successfulSubmissionMessage).should('be.visible');
}