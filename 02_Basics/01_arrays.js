//  Arrays

//  JavaScript arrays are resizable and can contain a mix of different data types.
//  JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
//  JavaScript arrays are zero-indexed: the first element of an array is at index 0
//  JavaScript array-copy operations create shallow copies and Deep copies.

const myArr = [10,20,30,40,50,60]
// const newArr = ["Soni", "Hatim", "Money Heist"]
// const myArr2 = new Array(1, 2, 3, 4)
                                // these are some methods to declare ARRAYS.

// console.log(myArr[5]);


//  Array Methods

// myArr.push(70)      // "PUSH" for instering any element in Array.
// myArr.pop()      // "POP" using POP method the 'last element' of Array will automatically deleted.

// myArr.unshift(100)  // usign "Unshift" the value will be add in the starting of the Array.
// myArr.shift()       // usign "Shift" the value will be remove from the Array.


// console.log(myArr.includes(90)); // the are some questioner methods.
// console.log(myArr.indexOf(40));

const newArr = myArr.join() // Join method use to join two Arrays and it also conver array object into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


// Slice and Splice
console.log("A", myArr);

const mynewArr1 = myArr.slice(0, 4) // using 'slice' method the range(excluding the last number) will be slice from Array but is will not affect the original array or it will not manipulate the orignial array
console.log(mynewArr1);
console.log("B", myArr);

const mynewArr2 = myArr.splice(0, 2) // using Splice method the range will be manipulate from the original Array and the Array will also change.
console.log(mynewArr2);
console.log("C", myArr);