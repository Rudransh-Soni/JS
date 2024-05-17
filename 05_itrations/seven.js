const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.map( (num) => num + 10 )

const newnum = mynum.map( (num) => {
    return num * 2 })



// CHANING :- channing means that we can use various methods together.
const newnNUM = mynum
                    .map( (num) => num * 10 ) // here first it will multiply 'num' with 10 and in result new Array is created.
                    .map((num) => num + 1)      // here +1 will be added into new array.
                    .filter ( (num) => num >=30 )

console.log(newnNUM);