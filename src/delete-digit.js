const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = 0;
  for(let k = 1; parseInt(n / k, 10) > 0; k *= 10){
    let temp = parseInt(n / (k * 10), 10)
       * k
       + (n % k);
    number = Math.max(number, temp);
  }
  return number
}

module.exports = {
  deleteDigit
};
