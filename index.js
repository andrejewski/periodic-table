
var path = require('path');
var data = require('./data');

module.exports.jsonFile = path.join(__dirname, 'data.json');
module.exports.csvFile = path.join(__dirname, 'data.csv');

module.exports.all = function() {
	return data;
}

module.exports.elements = data.reduce(function(obj, element) {
	obj[element.name] = element;
	return obj;
}, {});

module.exports.symbols = data.reduce(function(obj, element) {
	obj[element.symbol] = element;
	return obj;
}, {});

module.exports.calculate = {}
module.exports.calculate.atomicMass = function(formula) {
  var elements = formula.split(" ");
  var result = elements.reduce(function(sum, element) {
    var firstDigit = element.search(/\d/);
    var factor = 1;
    var symbol = element;
    if(firstDigit != -1) {
      factor = parseInt(element.slice(firstDigit));
      symbol = element.slice(0, firstDigit);
    }
    var e = module.exports.symbols[symbol];
    var atomicMass = e.atomicMass.split("(")[0];
    atomicMass = parseFloat(atomicMass);
    sum += atomicMass * factor;
    return sum;
  }, 0);
  return result;
};
