import AddToCartObjects from "./addToCartObjects";

export class AddToCartActions {
  async selectProduct() {
    await AddToCartObjects.nikeShoe().click();
  }

  async selectSize() {
    await AddToCartObjects.size.click();
  }

  async selectColor() {
    await AddToCartObjects.color.click();
  }

  async enterQuantity(qty) {
    await AddToCartObjects.quantity.setValue(qty);
  }

  async getSingleProductPrice() {
    const productPrice =
      await AddToCartObjects.singleProductSalePrice.getText();
    return productPrice;
  }
  async clickOnViewCart() {
    await AddToCartObjects.viewCart.click();
  }

  async addToCart(qty) {
    await this.selectProduct();
    await this.selectSize();
    await this.selectColor();
    await this.enterQuantity(qty);
    await this.clickOnViewCart();
  }
}

// module.exports = new AddToCartActions();
