import { ContactMethods } from "./page-methods/ContactMethods"
import { generateRandomEmailPassoword } from "./page-methods/Methods";

export class ContactTasks{

    randomSubject = generateRandomEmailPassoword(12) + ' ' + generateRandomEmailPassoword(4) + ' ' + generateRandomEmailPassoword(6) + ' ' + generateRandomEmailPassoword(15);
    randomMessage = generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12)+ 
                    generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12)+
                    generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12)+
                    generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12)+
                    generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12)+
                    generateRandomEmailPassoword(4)+ ' ' +generateRandomEmailPassoword(15) + ' '+ generateRandomEmailPassoword(5) + ' ' + generateRandomEmailPassoword(12);
    pathToFile = 'example.json';

    contactTasks = (userInfo) => {
        const contactMethods = new ContactMethods();

        contactMethods.clickOnContactUs();
        contactMethods.setName(userInfo.get('name'));
        contactMethods.setEmail(userInfo.get('email'));
        contactMethods.setSubject(this.randomSubject);
        contactMethods.setMessage(this.randomMessage);
        contactMethods.attachFile(this.pathToFile);
        contactMethods.clickOnSubmitButton();
        contactMethods.clickOnAlertOkButton();
        contactMethods.verifySubmission();
    }
}