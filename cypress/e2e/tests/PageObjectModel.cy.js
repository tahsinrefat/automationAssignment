import { APITestTasks } from "../../support/pages/APITestTasks";
import { ContactTasks } from "../../support/pages/ContactTasks";
import { PaymentTasks } from "../../support/pages/PaymentTasks";
import { ShoppingTasks } from "../../support/pages/ShoppingTasks";
import { SignupTasks } from "../../support/pages/SignupTasks"

describe('PageObjectModelStyle', () => {
    it ('UI Testing', () => {
        const signup = new SignupTasks();
        const shopping = new ShoppingTasks();
        const payment = new PaymentTasks();
        const contact = new ContactTasks();

        const userInfo = signup.signUpTasks();
        shopping.shoppingTasks();

        payment.paymentTasks(userInfo);

        contact.contactTasks(userInfo);
    });

    it('API Testing - Validate Brand List', () => {
        const api = new APITestTasks();
        api.brandApiTesting();
    });

    it('API Testing - Verify User Login', () => {
        const api = new APITestTasks();
        api.verifyUserLoginApiTesting();
    });
})