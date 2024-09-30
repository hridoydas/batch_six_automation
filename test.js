function trim() {
  const number = "$718.00";
  const integerValue = parseFloat(number.replace("$", ""));
  console.log(integerValue);
}

trim();
