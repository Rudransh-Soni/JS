const name = "Rudransh"
const Rollnumber = 134
// console.log(name + Rollnumber + " MCA_SCT");

// String Interpollation :- We can make Placeholders ( ${} ) and put the variables in it directly.

// console.log(` My name is ${name} and my Rollnumber is ${Rollnumber}`);

// another way to declare string using object key value pair

const Gamename = new String('Rudransh-Soni')
// console.log(Gamename[0]); 

// using this [0] we are accessing its key value pair.
// We have different differnet prototypes of the STRING.

//console.log(Gamename.length);
//console.log(Gamename.toUpperCase());
//console.log(Gamename.toLowerCase());
//console.log(Gamename.charAt(5)); // to see the position of the character.
//console.log(Gamename.indexOf('a')); // to see the position of the character.

const newString = Gamename.substring(0, 5) // SUBSTRING  here we are dividing the Variable "Gamename" into substring.
console.log(newString);

const anotherString = name.slice(-8, 2) // we can also use negative values in ".slice"
console.log(anotherString);

const StringOne = "    Rudransh    "
console.log(StringOne);             // TRIM
console.log(StringOne.trim());


const url = "hhtps://Rdransh.com/babu%20soni"
console.log(url.replace('%20', '-'));           // REPLACE


console.log(Gamename.split('-'));