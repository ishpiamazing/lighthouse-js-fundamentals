// let num = 100;

// while(num <= 200)
// {
//   if(num % 3 === 0 && num % 4 === 0){
//     console.log("LoopyLighthouse");
//   }
//   else if(num % 3 === 0){
//     console.log("Loopy");
//   }
//   else if(num % 4 === 0){
//     console.log("Lighthouse");
//   }
//   else{
//     console.log(num);
//   }
//   num= num + 1;
// }

// function reverseString(reverseMe){
//   let reversed = "";
//   for(let i = reverseMe.length-1; i >= 0; i--){
//     reversed += reverseMe[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Ishmeet"));

// function sum(x,y){
//   return x+y;
// }
// console.log("The sum is " +sum(10,20));

// function makeline(length){
//   var line="";
//   for(var j=1;j<=length;j++)
//   {
//     line+="*";
//   }
//   return line + "\n";
// }
// console.log(makeline(10));

// function laugh(len){
//   var star="";
//   for(var i=0; i<len;i++){
//     for (var j=0; j<=i;j++){
//       star+="* ";
//    }  
//     star= star+"\n";
//   }
//   return star;
// }
// console.log(laugh(10));



// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* ";
//   }
//   return line + "\n";
// }

// function buildTriangle(len){
//   var star = "";
//   for(var i = 0 ; i<= len ; i++){
//     star += makeLine(i);
//   }
//   return star;
// }
// console.log(buildTriangle(10));

// function laugh(len){
//   var star="";
//   for(var i = len; i > 0;i--){
//     for (var j=i; j> 0;j--){
//       star+="1 ";
//    }  
//     star= star+"\n";
//   }
//   return star;
// }
// console.log(laugh(10));



//INLINE FUNCTION
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}


emotions("happy",function laugh(num){
  var adam = "";
  for(var i = 0; i < num ; i++){
      adam = adam + "ha";
  }
  adam = adam + "!";
  return adam;
});