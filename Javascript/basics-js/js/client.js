'use-strict';


var result = false;

result = "data type of 'false' is " + typeof result;
document.getElementById('testDiv1').innerHTML = result + "<hr/>";


var nullAsObject = function nullAsObject() {
  return typeof null;
}


document.getElementById('testDiv2').innerHTML = " example of NULL datatype defition :<br/>" + nullAsObject +
  "<br/> output <br/>" + nullAsObject() + "<hr/>";
