import { SearchObjects } from "./searchObjects";
const searchObjects = new SearchObjects();
const searchText = "Nike";
export default class SearchActions {
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
