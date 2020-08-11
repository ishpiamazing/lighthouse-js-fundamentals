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

// const calculateRectangleArea = function(length, width)
// {
//   let rectangle = 0 ;
//   if(length < 0 || width < 0)
//   {
//     rectangle = undefined;
//   }
//   else
//   {
//     rectangle = length * width;

//   }
//   return rectangle;
// }
// const calculateTriangleArea = function (base, height)
// {
//   let triangle = 0;
//   if(base < 0 || height < 0)
//   {
//     triangle = undefined;
//   }
//   else
//   {
//     triangle = base * height / 2;

//   }
//   return triangle;
// }
// const calculateCircleArea = function (radius)
// {
//   let circle = 0;
//   if(radius < 0)
//   {
//     circle = undefined;
//   }
//   else
//   {
//     circle = Math.PI* (radius * radius);
//   }
//   return circle;
// }

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined



// const carPassing = function(cars,speed)
//   {
//   const car = {
//     time : Date.now(),
//     speed : speed
//   }
 
  
//   if(speed > 0)
  
//     cars.push(car);
//   return cars;
// }
// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40
//   },
//   {
//     time: 1568329821632,
//     speed: 42
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }

// ]

// const speed = 38

// console.log(carPassing(cars, speed));



/*KATA 1 Sum of Largest Two Numbers*/

// const sumLargestNumbers = function(data)
// {
//   let value = 0;
//   for(let i= 0 ; i < data.length ; i ++)
//   {
//     for(let j = 0; j< data.length; j++)
//     {
    
//     if(data[j] < data[j+1])
//       {
//         temp = data[j];
//         data[j] = data[j+1];
//         data[j+1] = temp;
//       }
//     }    
//   }
  
//   value = data[0]+data[1];
//   return value;
// }

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));



// /*KATA 2*/
// const conditionalSum = function(values, condition) {
  
//   let count = 0;
//   for(let i = 0; i < values.length; i ++)
//   {
//     if(condition === "even")
//     {
//       if(values[i] % 2 === 0)
//       {
//         count +=values[i];
        
//       }
//     }
//     else if (condition == "odd")
//     {

//       if(values[i] % 2 !== 0)
//       {
//         count += values[i];
//       }
//     }
//   }
//   return count;
// }

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));



/*KATA 3*/
// const numberOfVowels = function(data) {
  
//   let count = 0;
//   for(let i = 0; i< data.length; i++)
//   {
    
    
//     if((data[i]== 'a') || (data[i]== 'e') || (data[i]== 'i') || (data[i]== 'o') || (data[i]== 'u'))
//     {
        
//         count = count + 1;
//     }
//   }
  
//   return count;
// };

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));




/*KATA 4*/
// const instructorWithLongestName = function(instructors) {

//   let len=0;
//   let lgth =0;
//   let longest;
  

// for(let i= 0;i<instructors.length;i++)
// {
//   len= instructors[i].name.length;
//   if(len > lgth)
//   {
//     lgth = len;
//     longest = instructors[i];
//   }
// }

// return longest;
// }

// console.log(instructorWithLongestName([
 
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"},
  
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));

/*KATA 5*/
// const urlEncode = function(text) {

//   let value="";
 
//   for(let i = 0;i < text.length; i++)
//   {
//     if((text[i] === " ") && (i > 0) && (i < text.length-1))
//     {
//       value += "%20"
//     }
//     else if((text[i] === " ") && ((i == 0) || (i == text.length-1)))
//     {
      
//       continue;
//     }
   
//     else
//     {
//     value += text[i];
//     }
   
//   }
//   return value;
// }

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));
// console.log(urlEncode("blue is greener than purple for sure afjklla akflsf kiasfna klasfnlasn    ksaflakf kasfnlan f lkfsnalfnl  "));

/*KATA 6*/
// const whereCanIPark = function (spots, vehicle) {
 
  
//   for(let i=0; i < spots.length;i++)
//   {
//     for(let j=0; j < spots.length; j++)
//     {
//       if((vehicle === "regular") && (spots[i][j] === "R"))
//       {
//         return [j,i];
        
//       }
//       else if((vehicle === "small") && ((spots[i][j] === "R") || (spots[i][j] === "S")))
//       {
//         return[j,i];
        
//       }
      
//       else if((vehicle === "motorcycle") && ((spots[i][j] === "R") || (spots[i][j] === "S") || (spots[i][j] === "M")))
//       {
//         return [j,i];
//       }
//     }
//   }
//   return false;
// };

// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'r', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))


/*KATA 7 */
// const checkAir = function (samples, threshold) {
//   let count = 0;
  
//   for(let i = 0; i < samples.length; i++)
//   {
//     if(samples[i] === "dirty")
//     {
      
//       count += 1;
//     }
//   }
//   count = count * 0.1;
//   if(count > threshold)
//   {
//     return "Polluted";
//   }
//   else
//   {
//     return "Clean";
//   }
// };

// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.3
// ));

// console.log(checkAir(
//   ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
//   0.25
// ));

// console.log(checkAir(
//   ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
//   0.9
// ))





/*KATA 6 (stretch)*/
// const repeatNumbers = function(data) {
//    let value = "";
   
   
//   for(i = 0; i < data.length;i++)
//   {
//     for(j = 0; j < data[i][1]; j++)
//    {
    
//    value += data[i][0] ;
//    }
//    if(i < data.length-1)
//    {   
//    value += ", ";
//    }
  
//   }
 
//   return value;
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


//Kata 7 - Case Maker
// const camelCase = function(input) {
// let value = "";
// let val = "";
 
// for(let i = 0 ; i < input.length;i++)
// {
//   if(input[i]!== " ")
//     {
//       value += input[i];
//     }
//   else if(input[i]=== " ")
//   {
//     val = input[i+1].toUpperCase();
//     value += val;
//     i++;
//   }
// }
// return value;

// };

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));



//Kata 8 - Multiplication Table
// const multiplicationTable = function(maxValue)
// {
//   let multi = "";
  
//   for(let i = 1; i <= maxValue; i++)
//   {
//     let value = " ";
//     for(let j = 1; j <= maxValue; j++)
//     {
//     value += i*j + " ";
//     }
//     multi += value + "\n";
    
    
//   }
//  return multi;
// }

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));







/*Kata 9 - Bouncy Castles*/
// const PI = 3.14159 ;


// const sphereVolume = function (radius) {
//   return (4/3) * PI * radius * radius * radius;
 
  
// }
// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

// const coneVolume = function (radius, height) {
//    return ( PI * radius * radius * (height / 3));
  
// }

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

// const prismVolume = function (height, width, depth) {
//    return height * width * depth ;
  
// }

// console.log(prismVolume(3, 4, 5) === 60);



// const totalVolume = function (solids) {
//    let total = 0;
  
// for(let i = 0 ;i < solids.length ; i++)
// {
//   if(solids[i].type === "sphere")
//   {
    
//    total += sphereVolume(solids[i].radius);
    
//   }
//   else if(solids[i].type === "cone")
//   {
//   total += coneVolume(solids[i].radius, solids[i].height);
//   }
//   else if(solids[i].type === "prism")
//   {
//     total += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
//   }
// }

// return total;
// }

// const largeSphere = {
//   type: 'sphere',
//   radius: 40
// }

// const smallSphere = {
//   type: 'sphere',
//   radius: 10
// }

// const cone = {
//   type: 'cone',
//   radius: 3,
//   height: 5
// }

// const duck = [
//   largeSphere,
//   smallSphere,
//   cone
// ]

// console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);




/*Kata 10 - The Great Codeville Bake-off*/

// const chooseRecipe = function(bakeryA, bakeryB, recipes) {
//   let inBakeryA = 0;
//   let inBakeryB = 0; 
//   for(let i=0; i < recipes.length; i++) {

    
//     for(let j=0; j < recipes[i].ingredients.length; j++){
  
//       for(let k=0; k < bakeryA.length;k++){
//         if(bakeryA[k] === recipes[i].ingredients[j])
//         {
//           inBakeryA = inBakeryA + 1;
         
//         }
//       }
//       for(let m=0; m < bakeryB.length; m++){
//         if(bakeryB[m] === recipes[i].ingredients[j]){
//           inBakeryB = inBakeryB + 1;
       
//         }
//       }

      
//     }
//     if ((inBakeryA === 1) && (inBakeryB === 1)){
//       return recipes[i].name; 

//     }
//     inBakeryA=0;
//     inBakeryB=0;

//   }
// }

// let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
// let bakeryB = ['milk', 'butter', 'cream cheese'];
// let recipes = [
//     {
//         name: 'Coconut Sponge Cake',
//         ingredients: ['coconut', 'cake base']
//     },
//     {
//         name: 'Persian Cheesecake',
//         ingredients: ['saffron', 'cream cheese']
//     },
//     {
//         name: 'Custard Surprise',
//         ingredients: ['custard', 'ground beef']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon mustard', 'raisins']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*Kata 10 - Talking Calendar*/
// const talkingCalendar = function(date) {
  
//  let s= date.split('/')
  
//   let expr = s[1];
//   let total = "";
//   let mon ="";
 
//   switch(expr){
//     case '01':
//       mon = "January";
//       break;
//     case '02' :
//       mon = "February";
//       break;
//     case '03' :
//       mon = "March";
//       break;
//     case '04' :
//       mon = "April";
//       break;
//     case '05' :
//       mon = "May";
//       break;
//     case '06' :
//       mon = "June";
//       break;
//     case '07' :
//       mon = "July";
//       break;
//     case '08' :
//       mon = "August";
//       break;
//     case '09' :
//       mon = "September";
//       break;
//     case '10' :
//       mon = "October";
//       break;
//     case '11' :
//       mon = "November";
//       break;
//     case '12' :
//      mon = "December";
//       break;
//     default:
//         console.log("Not Valid");
      
//   }

//   let day =s[2];
  
//   if(day < 10)
//   {
//     day = day[1];
  

//   if(day === '1')
//   {
//     day += "st";
    
//   }
//   if(day === '2')
//   {
//     day += "nd";
    
//   }
//   if(day === '3')
//   {
//     day += "rd";
    
//   }
//   }
//   if(day >= 4)
//   {
//     day += "th";
    
//   }
 
//   total = mon + " " + day + ", " + s[0];
//   return total;

// };

// console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));



/*Kata 11 - Change Calculator*/
// const calFloor = function(value,num){
//   return Math.floor(value/num);
// }

// const calculateChange = function(total, cash) {
  
// let sub = cash - total;
// let obj = {};


// if(calFloor(sub,2000) !== 0){
//   obj.twentyDollars = calFloor(sub,2000);
//   sub = sub - (2000*(calFloor(sub,2000)))
// }
// if(calFloor(sub,1000)!==0){
//   obj.tenDollars = calFloor(sub,1000);
//   sub = sub - (1000*(calFloor(sub,1000)))
// }
// if(calFloor(sub,500)!==0){
//   obj.fiveDollars = calFloor(sub,500);
//   sub = sub - (500*(calFloor(sub,500)))
// }
// if(calFloor(sub,200) !== 0){
//   obj.twoDollars = calFloor(sub,200);
//   sub = sub - (200*(calFloor(sub,200)))
// }
// if(calFloor(sub,100)!==0){
//   obj.oneDollar = calFloor(sub,100);
//   sub = sub - (100*(calFloor(sub,100)))
// }
// if(calFloor(sub,25)!==0){
//   obj.quarter = calFloor(sub,25);
//   sub = sub - (25*(calFloor(sub,25)))
// }
// if(calFloor(sub,10)!==0){
//   obj.dime = calFloor(sub,10);
//   sub = sub - (10*(calFloor(sub,10)))
// }
// if(calFloor(sub,5)!==0){
//   obj.nickel = calFloor(sub,5);
//   sub = sub - (5*(calFloor(sub,5)))
// }
// if(calFloor(sub,1)!==0){
//   obj.penny = calFloor(sub,1);
//   sub = sub - (1*(calFloor(sub,1)))
// }

// return obj;
// };

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));



//const organizeInstructors = function(instructors) {

  // console.log(typeof(instructors));
  // const courseInstructors = {
  //   'iOS' : [],
  //   'Web' : [],
  //   'Blockchain' : []
  // }
  
  
  // for(let i = 0; i < instructors.length ; i++){
  //   obj = instructors[i];
  //   for (key in obj){
  //     if(obj[key] === "iOS"){
  //       courseInstructors.iOS.push(instructors[i].name);
  //     }
  //     if(obj[key] === "Web"){
  //       courseInstructors.Web.push(instructors[i].name);
  //     }
  //     if(obj[key] === "Blockchain"){
  //       courseInstructors.Blockchain.push(instructors[i].name);
  //     }
      // console.log(obj[key]);

  //}
//}
// console.log(courseInstructors);
    

/*Kata 12 - Organizing Instructors*/
//   const organizeInstructors = function(instructors) {
//   let courseName;
//   const obj ={}  ;
//   iOS = [];
//   Web =[];
//   Blockchain = [];
  
//   console.log(instructors[0].course);
//   for(let i = 0; i < instructors.length ; i++)
//   {
  
//   courseName = instructors[i].course;
//   if(courseName === 'iOS')
//   {
//     iOS.push(instructors[i].name);
//     obj[courseName] = iOS;
    
//   }
//   if(courseName === 'Web')
//   {
//     Web.push(instructors[i].name );
//     obj[courseName] = Web;
    
//   }
//   if(courseName === 'Blockchain')
//   {
//     Blockchain.push(instructors[i].name);
//     obj[courseName] = Blockchain;
    
//   }  
// }
// return obj ;
// };

// console.log(organizeInstructors([
//   {name: "Samuel", course: "iOS"},
//   {name: "Victoria", course: "Web"},
//   {name: "Karim", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));


/*Kata 13 - Case Maker II*/
// const makeCase = function(input,cases) {
  
//  if(cases.length > 3)
//  {

//   cases = cases.split();
  
//  }
//   cases = cases.sort();

//   let value = "";
//   let val="";
//   let values ="";
//   let valuess = "";

//   for(let j =0; j < cases.length; j++)
//   {
//   for(let i = 0; i < input.length ;i++)
//   {
    
//     if(cases[j] === "camel")
//     {
//       if(input[i] === " ")
//       {
//         val = input[i+1].toUpperCase();
//         value += val;
//         i++;
//       }
//       else
//       {
//         value += input[i];
//       }
//     }
    

//     else if(cases[j] === "pascal")
//     {
//       if(i === 0)
//       {
        
//         value += input[0].toUpperCase();
//       }
      
//       else if(input[i] === " ")
//       {
//         val = input[i+1].toUpperCase();
//         value += val;
//         i++;
//       }
//       else
//       {
//         value += input[i]; 
//       }
//     }



//     else if(cases[j] === "snake")
//     {
//       if(input[i] === " ")
//       {
//         value += "_";
//       }
//       else
//       {
//         value += input[i];
//       }
//     }
//     else if(cases[j] === "kebab")
//     {
//       if(input[i] === " ")
//       {
//         value += "-";
//       }
//       else
//       {
//         value += input[i];

//       }
//     }
//     else if(cases[j] === "title")
//     {
//       if(i === 0)
//       {
//         value += input[0].toUpperCase();
//       }
//       else if(input[i] === " ")
//       {
//         val = input[i+1].toUpperCase();
        
//         value += " " + val;
//         i++;
//       }
//       else
//       {
//         value += input[i];
//       }
//     }
//   }
// }

// if (value === ""){
//   value = input;
// }
 
//   for (let j = 0 ; j < cases.length ;j++)
//   {
//     for ( let k = 0; k < value.length ; k++)
//   {
//     if(cases[j] === "vowel")
//     {
      
//       if((value[k] === "a") || (value[k] === "e") || (value[k] === "i") || (value[k] === "o") || (value[k] === "u"))
//       {
//         values += value[k].toUpperCase();
     
//       }
//       else
//       {
//         values += value[k];
        
//       }
      
//     }
    
//     if(cases[j] === "consonant")
//     {
//       if((value[k] === "a") || (value[k] === "e") || (value[k] === "i") || (value[k] === "o") || (value[k] === "u"))
//       {
//         values += value[k];
//       }
//       else
//       {
//         values += value[k].toUpperCase();

//       }
//     }
    
//   }
//   if (values != ""){
//  value = values;
//   }
 
//  }

//  for (let j = 0 ; j < cases.length ;j++)
//  {
//    for ( let k = 0; k < value.length ; k++)
//  {
//    if(cases[j] === "upper")
//    {
    
//     valuess += value[k].toUpperCase();
//     }
     
//    }
   
//    if(cases[j] === "lower")
//    {
//     valuess += value[k].toLowerCase()
//    }
   
//  }
//  if (valuess != ""){
// value = valuess;
//  }
// return value;
// }

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));













// const makeCase = function(input,cases) {

//   //console.log(cases)
//  // console.log(input)
//   let value ="";
//   let values ="";
// cases = cases.sort();
// console.log(cases)
 
  
//   for (let j = 0 ; j < cases.length ; j++)
//   {


//     for( let  i = 0 ; i < input.length; i++)
//     {
//       if(cases[j] === "snake")
//     {
//       if(input[i] === " ")
//       {
//         value += "_";
//       }
//       else
//       {
//         value += input[i];
//       }
//       // console.log(value)
//     }
    
//      else if(cases[j] === "upper")
//       {
       
//       values += value[i].toUpperCase();
      
//       }

      
//     } 
    
// }
// return values;
  
// }


// console.log(makeCase("this is a string", ["upper", "snake"]));




// const urlDecode = function(text) {
//   obj = {};
//   text=text.split("=").join("&").split("&");
//   for (i=0; i<text.length;i++){
//     text[i]=text[i].split("&");
//   }
//   for(i=0;i <text.length-1;i+=2){
//     text[i+1]=(text[i+1].toString()).replace(/%20/g," ");
//     obj[text[i]]=text[i+1];
//   }
//   return obj;
// };
// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);





/*Kata 14 - JS Object From URL Encoded String*/
const urlDecode = function(text) {
  
  let obj ={};
  let val ="";
  let value= text;
  value = text.replace(/%20/g," ");
  value = value.split(/[=,&]+/)
  for(let i= 0; i < value.length; i++)
  {
    obj[value[i]]= value[i+1];
    i++;
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);




/*Kata 15 - Square Code*/

// const initializeArray = function(sol, len){
//   let s = [];
 
//   for (i = 0;i < len; i ++)
//   {
//     s[i] = "";
//   }
//     return s;
// }


// const squareCode = function(message) {

// message = message.replace(/ /g,"");

// let len = message.length;
// let value = Math.ceil(Math.sqrt(len));

// let val = [];
// let solution = [];


// for(let i = 0 ; i < message.length ; i += value)
// {
//     val.push(message.substr(i,value));
// }


// solution = initializeArray(solution, value);
// for(let j = 0; j < val.length ; j++)
// {
  
//   for(let k = 0 ; k < val[j].length; k++)
//   {
   
//     solution[k] += val[j][k] ;
    
//   }
  
// }

// solution = solution.join(" ");

// return solution;
// };

// console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));




