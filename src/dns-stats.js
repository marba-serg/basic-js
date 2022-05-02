const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let listDom = [];
  let tempArr = [];
  let result = {};

 domains.forEach(el => listDom.push(el.split('.').reverse()))
  
  for (let i = 0; i <= listDom.length-1; i++) {
    let str = '';
    for (let k = 0; k < listDom[i].length; k++) {
      str = str + '.' + listDom[i][k];
      tempArr.push(str);
    }
  }
  tempArr.forEach((i) => { result[i] = (result[i] || 0) + 1; });
  return result;
}

module.exports = {
  getDNSStats
};
