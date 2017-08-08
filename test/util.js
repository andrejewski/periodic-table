var test = require('ava')
var util = require('../util')

test('atomicMass() should return the correct atomic mass sum', t => {
  var mass = (1.00794 * 2) + 15.9994
  var test = util.atomicMass('H2 O')
  t.is(test, mass)
})
