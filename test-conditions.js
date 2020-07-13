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
// function emotions(myString, myFunc) {
//   console.log("I am " + myString + ", " + myFunc(2));
// }


// emotions("happy",function laugh(num){
//   var adam = "";
//   for(var i = 0; i < num ; i++){
//       adam = adam + "ha";
//   }
//   adam = adam + "!";
//   return adam;
// });

// let stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// const chooseStations = function (stations) 
// {
//   const goodStations = [];
//   for(const station of stations)
//   {
//     const capacity = station [1] ;
//     const type = station [2] ;
//     if(capacity >= 20 )
//     {
//       if(type === "school" || type === "community centre")
//         goodStations.push( station [0] );
//     }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations)); 


// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

// const finalPosition = function (moves)
// {
//   const goodPosition = [];
//   let x = 0;
//   let y = 0;

  
//   for (const move of moves)
//   {
//     if (move === "north")
//     {
//       y = y + 1;
//     }
    
//     if (move === "west"){
//       x = x - 1;
//     }

//     if(move === "east")
//     {
//       x = x + 1;
//     }

//     if(move === "south")
//     {
//       y = y - 1;
//     }
//   }
//   goodPosition.push(x);
//   goodPosition.push(y);
  
//   return goodPosition;
// }


// console.log(finalPosition(moves));


// const ageCalculator = function(name, yearOfBirth, currentYear)
// {
//   let age = 0;
//   let output;
//   age = currentYear - yearOfBirth ;
//   output = name + " is " + age + " years old.";
//   return output;
// }
// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));


// const howManyHundreds = function (num)
// {
//   let number = 0;
//   number = num / 100 ;
//   number = Math.floor(number);
//   return number;
// }

// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

const calculateRectangleArea = function(length, width)
{
  let rectangle = 0 ;
  if(length < 0 || width < 0)
  {
    rectangle = undefined;
  }
  else
  {
    rectangle = length * width;

  }
  return rectangle;
}
const calculateTriangleArea = function (base, height)
{
  let triangle = 0;
  if(base < 0 || height < 0)
  {
    triangle = undefined;
  }
  else
  {
    triangle = base * height / 2;

  }
  return triangle;
}
const calculateCircleArea = function (radius)
{
  let circle = 0;
  if(radius < 0)
  {
    circle = undefined;
  }
  else
  {
    circle = Math.PI* (radius * radius);
  }
  return circle;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined