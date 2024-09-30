class Utilities {
  getAmountIntoNumber(text) {
    const numberData = parseFloat(text.replace("$", ""));
    return numberData;
  }
}
module.exports = new Utilities();
