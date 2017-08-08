var path = require('path')
var data = require('./data')

var elements = data.reduce(function (obj, element) {
  obj[element.name] = element
  return obj
}, {})

var symbols = data.reduce(function (obj, element) {
  obj[element.symbol] = element
  return obj
}, {})

var numbers = data.reduce(function (obj, element) {
  obj[element.atomicNumber] = element
  return obj
}, {})

module.exports = {
  jsonFile: path.join(__dirname, 'data.json'),
  csvFile: path.join(__dirname, 'data.csv'),

  all: function all () {
    return data
  },

  elements: elements,
  symbols: symbols,
  numbers: numbers
}
