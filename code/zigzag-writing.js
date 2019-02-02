module.exports = function(text, rowsNumber) {
  // From the string "PAYPALISHIRING"
  // try to write this string in zigzag on multiple rows
  // ex for 3 rows:
  // P   A   H   N
  // A P L S I I G
  // Y   I   R

  let result = "";
  let rows = [];
  let textChar = text.split("");

  for (let i = 0; i < rowsNumber; i++) {
    rows.push("");
  }
  for (let i = 0; i < textChar.length; null) {
    for (let x = 0; x < rowsNumber; x++) {}
  }

  return "wrong";
};
