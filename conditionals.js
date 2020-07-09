const raining=false;
if(!raining)
{
  console.log("Leave your umbrella at home");
}

const temperature=50;

if(temperature<0)
{
  console.log("Make sure you pick out a scarf.");
}
else if(temperature<15)
{
  console.log("Short sleeves won't cut it!")
}
else if(temperature < -40 || temperature > 40)
{
  console.log("Maybe going outside isn't such a great idea.");
}
else 
{
  console.log("Short sleeves are fine.");
}


const isCitizen=true;
const age=26;
if(isCitizen && age>18)
{
  console.log("You are aligible to vote.");
}


// let start=3;
// while(start<=30){
//   console.log(start);
//   start=start+3;
// }



