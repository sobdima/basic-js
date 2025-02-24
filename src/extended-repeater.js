const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strConvert = String(str);
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;

  let resultString = "";

  repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options.additionRepeatTimes
    : 1;
  separator = options.hasOwnProperty("separator") ? options.separator : "+";
  additionSeparator = options.hasOwnProperty("additionSeparator")
    ? options.additionSeparator
    : "|";
  addition = options.hasOwnProperty("addition") ? String(options.addition) : "";

  let numOfSeparators = repeatTimes - 1;
  let numOfAdditionalSeparator = additionRepeatTimes - 1;

  for (let i = 1; i <= repeatTimes; i++) {
    resultString += strConvert;

    for (let k = 1; k <= additionRepeatTimes; k++) {
      resultString += addition;
      if (numOfAdditionalSeparator !== 0) {
        resultString += additionSeparator;
      }
      numOfAdditionalSeparator -= 1;
    }
    numOfAdditionalSeparator = additionRepeatTimes - 1;

    if (numOfSeparators !== 0) {
      resultString += separator;
    }
    numOfSeparators = numOfSeparators - 1;
  }

  numOfSeparators = repeatTimes - 1;

  return resultString;
}

module.exports = {
  repeater,
};
