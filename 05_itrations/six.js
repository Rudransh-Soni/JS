//const coding = ["C++","Js","Python","ruby","Java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);        // For each loop doesn't return any values.



//   Filter Operations:-

const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

// const newNum = Number.filter ( (num) => num > 5 )      // here we use call back function with Arrow function.
                                       // "num > 5" here we have to give condition so that those who clear the condition then can proceed.
// console.log(newNum);


// const newNum = Number.filter ( (num) => {   // if we use this {} beackets then we have to use 'Retuen' keyword, otherwise we can wite it in single line also.
//     return num > 5
// })


// using For Each loop

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
const arr = []                                  // here we declare empty array.
Numbers.forEach( (num) => {                    // here we iuse for each llop with arrow function
    if (num > 4) {                            // here we use if condition for checking our condition.
        arr.push(num)                        // here we use push method to insert elements in our array.
    }
})

// console.log(arr);





// FILTER METHOD


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks = books.filter( (bk) => bk.genre === "Fiction")     // this way is ***IMPORTANT*** bcz we will use this method in projects also to feth data from database.
//   console.log(userbooks);


//   const userbooks1 = books.filter ( (bk) => { 
//     return bk.publish >= 2000 
// })


//   const userbooks1 = books.filter ( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"     // here we give two condition with '&&' operator.
// })


const userbooks1 = books.filter ( (bk) => { 
     return bk.publish >= 2000 && bk.edition >= 2005
 })
  console.log(userbooks1);