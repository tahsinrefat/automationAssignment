
export class ShoppingMethods{

    menSectionSelectors = ['a', 'Men'];
    jeansSectionSelectors = ['a', 'Jeans'];
    viewProductSelector = 'a[href="/product_details/33"]';
    quantityFieldSelector = '#quantity';
    addToCartButtonSelector = 'button.cart';
    viewCartSelector = 'a[href="/view_cart"]';
    proceedToCheckoutSelector = 'a.check_out';
    placeOrderSelector = 'a.check_out';

    clickOnMenSection = () => cy.contains(this.menSectionSelectors[0], this.menSectionSelectors[1]);
    clickOnJeansSection = () => cy.get(this.jeansSectionSelectors[0]).contains(this.jeansSectionSelectors[1]).click({ force: true });
    clickOnViewProduct = () => cy.get(this.viewProductSelector).click();
    setQuantity = (quantity) => cy.get(this.quantityFieldSelector).clear().type(quantity).should('have.value', quantity);
    clickOnAddToCartButton = () => cy.get(this.addToCartButtonSelector).contains('Add to cart').click();
    clickOnViewCart = () => cy.get(this.viewCartSelector).first().click();
    clickOnProceedToCheckout = () => cy.get(this.proceedToCheckoutSelector).contains('Proceed To Checkout').click();
    clickOnPlaceOrder = () => cy.get(this.placeOrderSelector).contains('Place Order').click();
}