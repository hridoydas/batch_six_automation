export default class Utilities {
  getAmountIntoNumber(text) {
    let numberData = parseFloat(text.replace(/[$,]/g, ""));
    return Math.round(numberData);
  }
}
