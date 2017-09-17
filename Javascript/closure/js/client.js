var i=0;


for(i=0;i<10;i++){
  
  (function(){
var currentNumber=i;
    setTimeout(function(){
    console.log(currentNumber);
  },1000)})()
;  
}


//as we stored the function scope , it works fine