
var assert = require('assert');
var data = require('../data');
var util = require('../util');
var pt = require('../');

describe('periodic-table', function() {
	
	describe('#all() Array', function() {
		it('should return the whole dataset', function() {
			assert.equal(pt.all().length, data.length);
			assert.deepEqual(pt.all(), data);
		});
	});

	describe('.elements[name]', function() {
		it('should contain the whole set of elements', function() {
			var names = data.map(function(elem) {
				return elem.name;
			});
			names.forEach(function(name) {
				assert.ok(pt.elements[name]);
			});
		});
	});

	describe('.symbols[symbol]', function() {
		it('should contain the whole set of symbols', function() {
			var symbols = data.map(function(elem) {
				return elem.symbol;
			});
			symbols.forEach(function(symbol) {
				assert.ok(pt.symbols[symbol]);
			});
		});
	});

  describe('.numbers[atomicNumber]', function() {
    it('should contain the whole set of atomic numbers', function() {
      var numbers = data.map(function(elem) {
        return elem.atomicNumber;
      });
      numbers.forEach(function(number) {
        assert.ok(pt.numbers[number]);
      });
    });
  });

});

describe('periodic-table/util', function() {
  
  describe('#atomicMass(formula String) Number', function() {
    it('should return the correct atomic mass sum', function() {
      var mass = (1.00794 * 2) + 15.9994;
      var test = util.atomicMass('H2 O');
      assert.equal(test, mass);
    });
  });

});

