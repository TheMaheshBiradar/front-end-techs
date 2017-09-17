var a=10;

function outer() {
  
  var b=a;
  
  console.log(b);
  
  function inner (){
    var c=b;
    console.log(c);
     var b=20;
  }
  
 inner(); 
}

outer();

//if you revove var b=20 , it would give you an error or not =10.bu now it is undefined.

//