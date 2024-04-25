const RCB = ["Virat", "FaF", "Dinesh"]
const CSK = ["Dhoni", "Jaddu", "Rituraj"]

// RCB.push(CSK)   // using this Push method it count CSK as One element along with all RCB elements.
// console.log(RCB);   // Output:- [ 'Virat', 'FaF', 'Dinesh', [ 'Dhoni', 'Jaddu', 'Rituraj' ] ]


// Concatinaion

// const Team = RCB.concat(CSK)    // It combines two or more arrays and returns a new array.
// console.log(Team);   Output:- [ 'Virat', 'FaF', 'Dinesh', 'Dhoni', 'Jaddu', 'Rituraj' ]



//       Spread Operator :- it will spread all the elements as individuals and combine into one array.

// const all_Team = [...RCB, ...CSK]
// console.log(all_Team);  // Output:- [ 'Virat', 'FaF', 'Dinesh', 'Dhoni', 'Jaddu', 'Rituraj' ]


//  Flat Method :- it combines all the values of array and returns in a single array.

// const Arr_2 = [1, 2, 3, [3, 4, 5], 5, 6, 7,[7, 8,[8, 9]]]
// const Arr_3 = Arr_2.flat(Infinity)

// console.log(Arr_3);
//  Output:- [
//     1, 2, 3, 3, 4, 5,
//     5, 6, 7, 7, 8, 8,
//     9
//   ]

// console.log(Array.isArray("Rudransh"))
// console.log(Array.from("Rudransh"))
// console.log(Array.from({name: "Rudransh"})) // it will print empty array.

let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1, score2, score3));  // Of method is use to combine all the variables & converting into one array 
