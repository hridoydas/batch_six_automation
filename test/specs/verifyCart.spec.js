import AddToCartActions from "../addToCart/addToCartActions";
import CartActions from "../cart/cartActions";
import SearchActions from "../search/searchActions";
import Utilities from "../utils/utilities";

const addToCartActions = new AddToCartActions();
const searchActions = new SearchActions();
const cartActions = new CartActions();
const utilities = new Utilities();

const quantity = 2;

describe("Evershop site Add product on Cart and Verify Amount", () => {
  it("Should able to search valid product successfully", async () => {
    await searchActions.searchProduct();
  });
  it("Should able to add product on cart successfully", async () => {
    await addToCartActions.addToCart(quantity);
  });
  it("Should able to verify product amoutn in cart successfully", async () => {
    const getPrice = utilities.getAmountIntoNumber(
      await addToCartActions.getSingleProductPrice()
    );
    const expectedAmount = getPrice * quantity;
    const actualAmount = utilities.getAmountIntoNumber(
      await cartActions.getGrandTotalAmount()
    );
    expect(expectedAmount).toEqual(actualAmount);
  });
});
