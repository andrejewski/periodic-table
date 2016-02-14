
var pt = require("./index");

function atomicMass(formula) {
  return formula
    .split(' ')
    .map(function(x) {return x.trim();})
    .reduce(function(list, x) {
      var firstDigit = x.search(/\d/);
      list.push(firstDigit !== -1
        ? [parseInt(x.slice(firstDigit), 10), x.slice(0, firstDigit)]
        : [1, x]);
      return list;
    }, [])
    .reduce(function(sum, vector) {
      return sum + (vector[0] * pt.symbols[vector[1]].atomicMass.split('(')[0]);
    }, 0);
}

module.exports = {
  atomicMass: atomicMass,
};

