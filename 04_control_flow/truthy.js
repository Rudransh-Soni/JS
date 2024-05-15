//  Truthy value and Falsy value Concept.

const userEmail = "Rudr@gmail.com"   // here we are only assuming that is may be true(Truthy) ot flase(falsy) value.
if (userEmail) {                     // here we are not comparing anything with our variable
    console.log("Email found");
}else{
    console.log("Email Not found");        // if the string is empty then this statement will run.
}


// 'Truthy' values and 'Flasy' vlaues
// Falsy vlaues :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values
// "0", 'false', " ", [], {}, function(){}


// // Way to declare and check Array in if-else condition.
// const MyArr = []
// if (MyArr.length === 0) {
//     console.log("Array is empty");
// }

// Detacting Object is empty or not.

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {      // we use '.length' property because"Object.keys(emptyObj)" its output is Array.
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined.

let val1;

// val1 = 10 ?? 20
// val1 = null ?? 30
// val1 = undefined ?? 40
val1 = null ?? 50 ?? 60
console.log(val1);

// Terniary Operator

// condition ? true : false

const coffeePrice = 110
coffeePrice <=  70 ? console.log("lesst than 70") : console.log("more than 70");