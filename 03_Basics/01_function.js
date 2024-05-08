// when we are creating any function then we have to call it.
// example:- function one(){

// }
//one()         // this is called calling a function.


function Myname(){         // this is the syntax of function.
    // console.log("S");
    // console.log("O");
    // console.log("N");
    // console.log("I");
}
Myname()                  // to call a function we use its name.
// if we use "Myname" then it only calls its reference and if we use "Myname()" with bracket then it executes.


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){        // this is an "function"
    // let result = number1 + number2          // we create an variable for calling the function. this is an way to declare function.
    // return result                          // after this "return" no value will be executed.
    
    return number1 + number2                // this is another way to decalre function.
}

const result = addTwoNumber(10, 20)
// console.log("Result:", result);


function userLogIn(Username = "Soni"){           // here we created a function for user login. and we passed a value here only.
    if(Username === undefined){        // if the username is equal to undefined(username has no value) then it ask to enter the username.
        console.log("Enter a username:");
        return               // and after the use of "return" nothing will execute.
    }
    return `${Username} just logged In` // here we used String interpollation for passing a message.
}
// console.log(userLogIn())      // and for printing its value we use "console.log". // if we are not defining any values in it then it will print "Undefined"  


function calculateCartPrice(...num1){   // Spread Operator is also known as "Rest" operator. Using this we can print every value and the value will be stored in Array.
    return num1
}
// console.log(calculateCartPrice(500, 400, 450, 550));


        // How to Use Object in Function.
const user = {              // First create one object.
    name: "rudransh",
    age: 22 
}

function handleObject(anyuser){        // create one function and  using string interpollation cal the object entites which you want to use.
    console.log(`Username is ${anyuser.name}, and the Age is ${anyuser.age}`);
}
handleObject(user)

handleObject({          // This is also an another way to print the object in function.
    name: "Soni",
    Age: 22
})
    

        // How to Use Arrays in Function.

const newArray = [200, 300, 400, 500]       // create new array.

function handleArray(getArray){             // create function and paas one parameter so that it can take values from Array.
    return getArray[2]
}

console.log(handleArray(newArray));
// console.log(handleArray([200, 300, 400, 500]));