import AddToCartActions from "../addToCart/addToCartActions";
import CartActions from "../cart/cartActions";
import SearchActions from "../search/searchActions";
import Utilities from "../utils/utilities";

const addToCartActions = new AddToCartActions();
const searchActions = new SearchActions();
const cartActions = new CartActions();
const utilities = new Utilities();

const quantity = 2;

describe("Evershop site Verify Amount in Cart page", () => {
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
