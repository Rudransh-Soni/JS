const user = {
    username: "rudransh",
    price: 999,
                    // "THIS" refers to current context.

    welcomemessage: function(){
        console.log(`${this.username}, welocme to website`);    // here we can call a variable with 'this' function
        // console.log(this);   // using this it will every context(values) of the function/user.
    }

}
// user.welcomemessage()
// user.username = "Soni"
// user.welcomemessage()

console.log(this);      // if we using 'this' method here then it will print {} means EMPTY. bcz no global scope is ther.


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {          //  here we can store a function in a variable also.
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {           // syntax of arrow function.
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2          // this is also a syntax of "Arrow" function

// const addTwo = (num1, num2) => ( num1 + num2 )       // this is also a syntax of "Arrow" function. always use ()()

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()