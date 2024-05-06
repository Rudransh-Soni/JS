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
console.log(userLogIn("Rudransh"))      // and for printing its value we use "console.log". // if we are not defining any values in it then it will print "Undefined"  

