
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

module.exports.numbers = data.reduce(function(obj, element) {
  obj[element.atomicNumber] = element;
  return obj;
}, {});

