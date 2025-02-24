const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const resArr = matrix.flat(Infinity);

  const res = resArr.reduce((acc, item) => {
    if (item === "^^" || item === "^^") {
      acc = acc + 1;
    }
    return acc;
  }, 0);

  return res;
}

module.exports = {
  countCats,
};
