var pt = require("./index");

module.exports.atomicMass = function(formula) {
  formula = parseFormula(formula);
  return formula.reduce(function(sum, element) {
    sum += pt.symbols[element.symbol].atomicMass.split("(")[0] * element.factor;
    return sum;
  }, 0);
};

var parseFormula = function(formula) {
  var elements = formula.split(" ");
  var result = elements.reduce(function(obj, element) {
    var firstDigit = element.search(/\d/);
    var factor = 1;
    var symbol = element;
    if(firstDigit != -1) {
      factor = parseInt(element.slice(firstDigit));
      symbol = element.slice(0, firstDigit);
    }
    obj.push({symbol: symbol,
              factor: factor});
    return obj;
  }, []);
  return result;
};
