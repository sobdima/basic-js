const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const obj = {};
  const arraySorted = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      obj[i] = -1;
    } else {
      arraySorted.push(arr[i]);
    }
  }

  arraySorted.sort((a, b) => a - b);

  const res = Array(arr.length).fill(0);

  for (let i = 0; i < res.length; i++) {
    if (obj.hasOwnProperty(i)) {
      res[i] = obj[i];
    } else {
      res[i] = arraySorted.shift();
    }
  }

  return res;
}

module.exports = {
  sortByHeight,
};
