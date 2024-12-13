
export class SignupMethods {
    
    nameFieldSelector = '[data-qa="signup-name"]';
    emailFieldSelector = '[data-qa="signup-email"]';
    signUpButtonSelector = '[data-qa="signup-button"]';
    titleSelector = '[data-qa="title"]';
    passwordFieldSelector = '[data-qa="password"]';
    pathToJson = 'cypress/fixtures/userInfo.json';
    birthdayDaysSelector = '[data-qa="days"]';
    birthdayMonthsSelector = '[data-qa="months"]';
    birthdayYearsSelector = '[data-qa="years"]';
    newsLetterCheckBoxSelector = '#newsletter';
    notificationCheckBoxSelector = '#optin';
    firstNameFieldSelector = '[data-qa="first_name"]';
    lastNameFieldSelector = '[data-qa="last_name"]';
    companyFieldSelector = '[data-qa="company"]';
    addressFieldSelector = '[data-qa="address"]';
    address2FieldSelector = '[data-qa="address2"]';
    countrySelector = '[data-qa="country"]';
    stateFieldSelector = '[data-qa="state"]';
    cityFieldSelector = '[data-qa="city"]';
    zipCodeFieldSelector = '[data-qa="zipcode"]';
    mobileNumberFieldSelector = '[data-qa="mobile_number"]';
    createAccountButtonSelector = '[data-qa="create-account"]';
    continueButtonSelector = '[data-qa="continue-button"]';

    visitPage = (link) => cy.visit(link);
    setName = (name) => cy.get(this.nameFieldSelector).clear().type(name).should('have.value', name);
    setEmail = (randomEmail) => cy.get(this.emailFieldSelector).clear().type(randomEmail).should('have.value', randomEmail);
    clickSignupButton = () => cy.get(this.signUpButtonSelector).click();
    
    titleClicker = () => cy.get(this.titleSelector).first().click();
    setPassword = (randomPassowrd) => cy.get(this.passwordFieldSelector).clear().type(randomPassowrd).should('have.value', randomPassowrd);
    writeToUserInfoJson = (userInfo) => {
        const userInfoObject = Object.fromEntries(userInfo);
        cy.writeFile(this.pathToJson, userInfoObject).then(() => {
            cy.log('New user info saved to JSON file');
        });
    }
    selectBirthDay = (day) => cy.get(this.birthdayDaysSelector).select(day).should('have.value', day);
    selectBirthMonth = (month) => cy.get(this.birthdayMonthsSelector).select(month).should('have.value', month);
    selectBirthYear = (year) => cy.get(this.birthdayYearsSelector).select(year).should('have.value', year);
    clickOnNewsLetter = () => cy.get(this.newsLetterCheckBoxSelector).click();
    clickOnNotification = () => cy.get(this.notificationCheckBoxSelector).click();
    setFirstName = (firstName) => cy.get(this.firstNameFieldSelector).clear().type(firstName).should('have.value', firstName);
    setLastName = (lastName) => cy.get(this.lastNameFieldSelector).clear().type(lastName).should('have.value', lastName);
    setCompany = (company) => cy.get(this.companyFieldSelector).clear().type(company).should('have.value', company);
    setAddress = (address) => cy.get(this.addressFieldSelector).clear().type(address).should('have.value', address);
    setAddress2 = (address2) => cy.get(this.address2FieldSelector).clear().type(address2).should('have.value', address2);
    selectCountry = (country) => cy.get(this.countrySelector).select(country).should('have.value', country);
    setState = (state) => cy.get(this.stateFieldSelector).clear().type(state).should('have.value', state);
    setCity = (city) => cy.get(this.cityFieldSelector).clear().type(city).should('have.value', city);
    setZipCode = (zipCode) => cy.get(this.zipCodeFieldSelector).clear().type(zipCode).should('have.value', zipCode);
    setMobileNumber = (mobileNumber) => cy.get(this.mobileNumberFieldSelector).clear().type(mobileNumber).should('have.value', mobileNumber);
    clickOnCreateAccountButton = () => cy.get(this.createAccountButtonSelector).click();
    clickOnContinueButton = () => cy.get(this.continueButtonSelector).click();
}