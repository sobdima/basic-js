const { NotImplementedError } = require("../extensions/index.js");

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
  const objStat = {};
  const arr = [];
  domains.map((i) => arr.push(i.split(".")));

  arr.forEach((item) => {
    let domainPart = "";
    for (let i = item.length - 1; i >= 0; i--) {
      domainPart = domainPart + `.${item[i]}`;
      if (!objStat[domainPart]) {
        objStat[domainPart] = 1;
      } else {
        objStat[domainPart]++;
      }
    }
  });

  return objStat;
}

module.exports = {
  getDNSStats,
};
