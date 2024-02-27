const number = 200
// console.log(number);
// console.log(typeof'number');

const Score = new Number(200)   // here we convert String into Number with New function.
// console.log(Score);

// console.log(Score.toString());      // Converting Number to String.
// console.log(Score.toString().length);       // To check its length.
// console.log(typeof'Score');

// console.log(Score.toFixed(3));  // It will print the 3 value after decimal.


const Othernumber = 134.812
// console.log(Othernumber.toPrecision(3));    // It will see the first three value   

const hundreds = 10000
// console.log(hundreds.toLocaleString('en-IN'));  // It will convert the number into easily readable formate



// +++++++++++++++++ MATHS ++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10)); // abs = Absolute vlaue, It will chahnge negative value in positive value.
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));   // ROUND OFF 

// console.log(Math.ceil(4.1));   // ceil = Ceiling value. It always shows the Higher vlaue.
// console.log(Math.floor(4.9));   // floor = It will always print pervious value of small value.

// console.log(Math.min(4,6,8,2,9,3,1));
// console.log(Math.max(4,6,8,2,9,3,1));

console.log(Math.random());     // Using RANDOM function the value will always comes between 0 and 1.
console.log(Math.random()*10 + 1);     
console.log(Math.floor(Math.random()*10) + 1);   // Using this method we can sure that the value will be between 0 and 1. It can not be 0


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))  // This ia an another way of writing function of line 38.
 