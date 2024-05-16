// FOR Of Loop

// Basic Syntax
const myarr = [1, 2, 3, 4, 5]

for (const value of myarr) {
    // console.log(value);
}

// For of loop on String.

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// MAPS  :- maps is not iteratable.

const map = new Map()       // It contains only unique values.  Duplicate values cannot supported.
map.set('JAI' , 'Jaipur')
map.set('BOM' , 'Bombay')
map.set('BLR' , 'Bangalore')
// console.log(map);


// Maps in For of Loop

for (const [key, value] of map) {       // here are doing Array de-structure. and it holds both key as well as value also.
    // console.log(key, ":-", value);
}

// We can not Itreate object in For of loop.
