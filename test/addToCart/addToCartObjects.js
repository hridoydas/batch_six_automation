export class AddToCartObjects {
  get nikeShoe() {
    return $("(//span[contains(.,'Nike react phantom run flyknit 2')])[1]");
  }

  get size() {
    return $("//a[contains(text(),'S') and @href='#']");
  }

  get color() {
    return $("//a[contains(text(),'Black') and @href='#']");
  }

  get quantity() {
    return $("//input[@name='qty']");
  }

  get addToCartButton() {
    return $("//button[contains(.,'ADD TO CART')]");
  }

  get viewCart() {
    return $("//a[@href='/cart' and @class='add-cart-popup-button']");
  }

  get singleProductSalePrice() {
    return $("//span[@class='sale-price']");
  }
}
