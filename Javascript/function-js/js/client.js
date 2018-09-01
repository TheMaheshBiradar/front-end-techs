'use-strict';


var addition = function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}


document.getElementById('testDiv2').innerHTML = " Sum using arguments :<br/>" + addition(1, 2, 3) +
  "<br/>";
