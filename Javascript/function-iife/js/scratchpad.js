(function (){
 var a  = 10;
 b  = 10;
  console.log(a+b);
})();

console.log(b);
console.log(a);

/*even though aboce function is IIFE - b is still assigned to gloal scope as var is not present
*/
