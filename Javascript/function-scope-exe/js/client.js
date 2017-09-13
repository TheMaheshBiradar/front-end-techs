'use-strict';

var outsideValue = 50;

var fn = function add() {
  var outsideValue = 40;
  return outsideValue;
}


document.getElementById('testDiv2').innerHTML = " Sum using arguments :<br/>" + fn() +
  "<br/>";


document.getElementById('testDiv3').innerHTML = " but outsideValue is different from function because it is declared outside function :<br/>" + outsideValue +
  "<br/>";
