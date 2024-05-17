//  REDUCE METHOD.
// Accumlator, CurrentValue.

const mynums = [1, 2, 3]

// const myTotal = mynums.reduce(function (Accumlator, CurrentValue) {
//     console.log(`Acc: ${Accumlator} and Currval: ${CurrentValue}`);
//     return Accumlator + CurrentValue
// }, 0)    // here '0' is the Initial value of Accumlator.



// first 'Accmulator' takes 'Initial' value. and ADD the 'Currentvalue' in it.
// Accmulator = 0,  Currentvalue= 1 
// Total = 1        Now this one sotres in Accumlator and 'Accumlator' value = 1

// in nesxt step 'Accumlator' value is 1 and 'Currentvalue' is 2. So total= 1+2 = 3
// in nesxt step 'Accumlator' value is 3 and 'Currentvalue' is 3. So total= 3+3 = 6
// So the final output is 6.



// Reduce Method using Arrow Function.

const myTotal = mynums.reduce( (Accmulator, CurrentValue) => Accmulator + CurrentValue,  0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice = shoppingCart.reduce( (Accmulator, item) => Accmulator + item.price ,0)
console.log(`The total price os all books is ${TotalPrice}`);