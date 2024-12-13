import { ShoppingMethods } from "./page-methods/ShoppingMethods"

export class ShoppingTasks{

    quantity = '2';

    shoppingTasks = () => {
        const shoppingMethods = new ShoppingMethods();

        shoppingMethods.clickOnMenSection();
        shoppingMethods.clickOnJeansSection();
        shoppingMethods.clickOnViewProduct();
        shoppingMethods.setQuantity(this.quantity);
        shoppingMethods.clickOnAddToCartButton();
        shoppingMethods.clickOnViewCart();
        shoppingMethods.clickOnProceedToCheckout();
        shoppingMethods.clickOnPlaceOrder();
    }
}