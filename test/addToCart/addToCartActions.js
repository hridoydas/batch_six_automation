import { AddToCartObjects } from "./addToCartObjects";
const addToCartObjects = new AddToCartObjects();
export default class AddToCartActions {
  async selectProduct() {
    await addToCartObjects.nikeShoe.click();
  }

  async selectSize() {
    await addToCartObjects.size.click();
  }

  async selectColor() {
    await addToCartObjects.color.click();
  }

  async enterQuantity(qty) {
    await addToCartObjects.quantity.setValue(qty);
  }

  async getSingleProductPrice() {
    const productPrice =
      await addToCartObjects.singleProductSalePrice.getText();
    return productPrice;
  }
  async clickOnViewCart() {
    await addToCartObjects.viewCart.click();
  }

  async clickOnAddToCartButton() {
    await addToCartObjects.addToCartButton.click();
  }

  async addToCart(qty) {
    await this.selectProduct();
    await this.selectColor();
    await browser.pause(5000);
    await this.selectSize();
    await this.enterQuantity(qty);
    await browser.pause(5000);
    await this.clickOnAddToCartButton();
    await this.clickOnViewCart();
  }
}

// module.exports = new AddToCartActions();
