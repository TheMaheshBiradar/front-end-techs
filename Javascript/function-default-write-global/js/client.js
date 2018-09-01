var mahesh = function testUser() {

  if (100 === 100) {
    descriptionFunction = "user has 100 marks"
  }

}


var mahesh2 = function testUser2() {

  if (100 === 100) {
    var descriptionFunction1 = "user has 100 marks"
  }

}
mahesh();
mahesh2();

document.getElementById('testDiv3').innerHTML = "without var value is assigned to global: < br/>" + descriptionFunction + "<br/>";

document.getElementById('testDiv2').innerHTML = "WITH var value is assigned to function: < br/>" + descriptionFunction1 + "<br/>";
