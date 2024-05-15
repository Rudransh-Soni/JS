// While Loop
// -- First we will declare variable before entering to loop.

let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2                    // this is the termination line.
}


// Array using While Loop

let myArr = ["JAI", "BLR", "BOM"]

let arr = 0
while (arr < myArr.length) {
    // console.log(`Favourite places are ${myArr[arr]}`);
    arr = arr + 1
}


// Do-While Loop

let score = 1
do {
    console.log(`your Score is ${score}`);
    score++
} while (score <= 5);