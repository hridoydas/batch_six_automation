import { CartObjects } from "./cartObjects";
const cartObjects = new CartObjects();
export default class CartActions {
  async getGrandTotalAmount() {
    await cartObjects.grandTotalAmount.waitForDisplayed();
    const grandTotal = await cartObjects.grandTotalAmount.getText();
    return grandTotal;
  }
}
