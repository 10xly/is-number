const TYPE = require("@extremejs/utils").TYPE

module.exports = function isNumber(value) {
  return typeof value === TYPE.NUMBER
}