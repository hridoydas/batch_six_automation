import CartObjects from "./cartObjects";

export class CartActions {
  async getGrandTotalAmount() {
    const grandTotal = await CartObjects.grandTotalAmount().getText();
    return grandTotal;
  }
}

// module.exports = new CartActions();
