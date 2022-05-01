const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let count =[]
  count = n.split("-")
  if (count.length != 6) return false;
  return checkSymbol(count)
}

function checkSymbol(arr){
  let result = true
  arr.forEach((el) => {
    if (el.split("").length != 2) res = false;
    el.split("").forEach((s) => {
      if (s.charCodeAt() < 48 || s.charCodeAt() > 70 || (s.charCodeAt() > 57 && s.charCodeAt() < 63)) {
        result = false;
      }
    });
  });
  return result;
}
module.exports = {
  isMAC48Address
};
