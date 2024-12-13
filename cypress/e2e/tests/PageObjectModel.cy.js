import { ContactTasks } from "../../support/pages/ContactTasks";
import { PaymentTasks } from "../../support/pages/PaymentTasks";
import { ShoppingTasks } from "../../support/pages/ShoppingTasks";
import { SignupTasks } from "../../support/pages/SignupTasks"

describe('PageObjectModelStyle', () => {
    it ('Assignment', () => {
        const signup = new SignupTasks();
        const shopping = new ShoppingTasks();
        const payment = new PaymentTasks();
        const contact = new ContactTasks();

        const userInfo = signup.signUpTasks();
        shopping.shoppingTasks();

        payment.paymentTasks(userInfo);

        contact.contactTasks(userInfo);
        
    })
})