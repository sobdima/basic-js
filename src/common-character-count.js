const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let charCount = {};
  let count = 0;

  for (let i of s1) {
    charCount[i] = (charCount[i] || 0) + 1;
  }

  for (let k of s2) {
    if (charCount[k] > 0) {
      count++;
      charCount[k]--;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
