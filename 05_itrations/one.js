// FOR Loop

for (let i = 0; i < 10; i++) {      // first it will initialize the variable, next it will do 'Condition check'. 
    const element = i;
    if (element == 8) {
        // console.log("8 is best number");
    }
    // console.log(element);
}

 // NESTED Loops
for (let i = 0; i <= 5; i++) {
    // console.log(`Outer loop value is ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop value is ${j} and outer loop value is ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);                                 // here we are printing the Tables.       
    }
    
}

//  Arrays in Loop.

const myArr = ["JAI", "BLR", "BOM"]
// console.log(myArr.length);      // 3
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}


// BREAK & CONTINUE

// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break                           // Using this break statement when the value is reached by 5 it will beak it and print till 4.
//     }
//     console.log(`Value of i is ${index}`);;
// }



for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                          
    }
    console.log(`Value of i is ${index}`);;
}