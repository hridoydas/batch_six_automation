const addToCartActions = require("../addToCart/addToCartActions");
const cartActions = require("../cart/cartActions");
const searchActions = require("../search/searchActions");
const utilities = require("../utils/utilities");

const quantity = 2;
describe("Evershop site Add product on Cart and Verify Amount", () => {
  it("Should able to search valid product successfully", async () => {
    await searchActions.searchProduct();
  });
  it("Should able to add product on cart successfully", async () => {
    await addToCartActions.addToCart(quantity);
  });
  it("Should able to verify product amoutn in cart successfully", async () => {
    const getPrice = utilities.getAmountIntoNumber(await addToCartActions.getSingleProductPrice())
    const expectedAmount = getPrice * quantity;
    const actualAmount = utilities.getAmountIntoNumber(await cartActions.getGrandTotalAmount())
    expect(expectedAmount).toEqual(actualAmount);
  });
});
