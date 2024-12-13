import { SignupMethods } from "./page-methods/SignupMethods";
import { generateRandomEmailPassoword, getPartsOfName } from "./page-methods/Methods";

export class SignupTasks{
    
    link = 'https://automationexercise.com/login';
    name = 'Tahsin Ahmed';
    randomEmail = generateRandomEmailPassoword(6)+'@'+generateRandomEmailPassoword(4)+'.com';
    randomPassword = generateRandomEmailPassoword(15);
    day = '15';
    month = '9';
    year = '1999';
    partsOfName = getPartsOfName(this.name);
    firstName = this.partsOfName[0];
    lastName = this.partsOfName[1];
    company = 'Tekarsh';
    address = 'House #03-123, 123 Jurong West Street 52';
    address2 = 'House #10-25, 51 Tampines Street 81';
    country = 'Singapore';
    state = 'Jurong';
    city = 'Jurong';
    zipCode = '640123';
    mobileNumber = '+6512345678';

    signUpTasks = () => {
        const signupMethods = new SignupMethods();
        const userInfo = new Map();

        signupMethods.visitPage(this.link);

        signupMethods.setName(this.name);
        signupMethods.setEmail(this.randomEmail);
        userInfo.set('email', this.randomEmail);
        signupMethods.clickSignupButton();

        signupMethods.titleClicker();
        signupMethods.setPassword(this.randomPassword);
        userInfo.set('password', this.randomPassword);
        signupMethods.writeToUserInfoJson(userInfo);
        signupMethods.selectBirthDay(this.day);
        signupMethods.selectBirthMonth(this.month);
        signupMethods.selectBirthYear(this.year);
        signupMethods.clickOnNewsLetter();
        signupMethods.clickOnNotification();
        signupMethods.setFirstName(this.firstName);
        signupMethods.setLastName(this.lastName);
        signupMethods.setCompany(this.company);
        signupMethods.setAddress(this.address);
        signupMethods.setAddress2(this.address2);
        signupMethods.selectCountry(this.country);
        signupMethods.setState(this.state);
        signupMethods.setCity(this.city);
        signupMethods.setZipCode(this.zipCode);
        signupMethods.setMobileNumber(this.mobileNumber);
        signupMethods.clickOnCreateAccountButton();
        signupMethods.clickOnContinueButton();

        userInfo.set('name', this.name);
        return userInfo;
    }
}