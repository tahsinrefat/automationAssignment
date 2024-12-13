import { PaymentMethods } from "./page-methods/PaymentMethods"

export class PaymentTasks{

    cardNumber = '123456789';
    cvc = '123';
    expiryMonth = '12';
    expiryYear = '2024';

    paymentTasks = (userInfo) => {
        const paymentMethods = new PaymentMethods();

        paymentMethods.setCardName(userInfo.get('name'));
        paymentMethods.setCardNumber(this.cardNumber);
        paymentMethods.setCVC(this.cvc);
        paymentMethods.setExpiryMonth(this.expiryMonth);
        paymentMethods.setExpiryYear(this.expiryYear);
        paymentMethods.clickOnPayButton();
    }
}