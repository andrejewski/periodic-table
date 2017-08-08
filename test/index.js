var test = require('ava')
var data = require('../data')
var pt = require('../')

test('#all() should return the whole dataset', function (t) {
  t.is(pt.all().length, data.length)
  t.deepEqual(pt.all(), data)
})

test('.elements[name] should contain the whole set of elements', function (t) {
  var names = data.map(function (elem) {
    return elem.name
  })
  names.forEach(function (name) {
    t.truthy(pt.elements[name])
  })
})

test('.symbols[symbol] should contain the whole set of symbols', function (t) {
  var symbols = data.map(function (elem) {
    return elem.symbol
  })
  symbols.forEach(function (symbol) {
    t.truthy(pt.symbols[symbol])
  })
})

test('.numbers[atomicNumber] should contain the whole set of atomic numbers', function (t) {
  var numbers = data.map(function (elem) {
    return elem.atomicNumber
  })
  numbers.forEach(function (number) {
    t.truthy(pt.numbers[number])
  })
})
