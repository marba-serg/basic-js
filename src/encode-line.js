const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let ch = str[i];

    while (ch === str[i + 1]) {
      count++;
      i++;
    }
   
    if (count > 1) result += count + ch
    else result += ch;
  }
  return result;
}

module.exports = {
  encodeLine
};
