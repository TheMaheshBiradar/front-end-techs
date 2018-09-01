{
  var number = 10;
}

if (100 === 100) {
  var description = "user has 100 marks"
}

var mahesh = function testUser() {

  if (100 === 100) {
    var descriptionFunction = "user has 100 marks"
  }

}
document.getElementById('testDiv2').innerHTML = " variable is available outside of IF block:<br/>" + description + number +
  "<br/>";

document.getElementById('testDiv3').innerHTML = " Here you can not access descriptionFunction is available outside of IF block: < br/> " + descriptionFunction + "<br/>";
