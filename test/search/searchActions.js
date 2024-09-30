import searchObjects from "./searchObjects";

const searchText = "Nike";
export class SearchActions {
  async clickOnSearchIcon() {
    await searchObjects.searchIcon.click();
  }

  async enterProductNameInSearch() {
    await searchObjects.searchInputField.setValue(searchText);
  }

  async enterSearch() {
    await browser.keys("Enter");
  }

  async searchProduct() {
    await this.clickOnSearchIcon();
    await this.enterProductNameInSearch();
    await this.enterSearch();
  }
}

// module.exports = new SearchActions();
