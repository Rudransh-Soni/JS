// Operatos :-

// <, >, <=, >=, ==, !=, ===, !==, 

// const VotingAge = 18        // here we have to define the VotingAge.

// if(VotingAge === 18){       // and here we will check whether the condition meets the criteria or not.
//     console.log("You are eligible to vote");
// } else{
//     console.log("You are not Eligible");
// }


        //  SCOPE
// const marks = 500;
// if(marks > 150){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);     // here it's execution shows error bcz we are executing it outside of it's scope.


        // NESTED CONDITION
// const Balance = 1000

// if (Balance < 500) {
//     console.log("Your balance is less than 500");

// }else if (Balance < 700) {
//     console.log("Your balance is less than 700");

// }else if (Balance < 900) {
//     console.log("Your balance is less than 900");

// }else{
//     console.log("Your balance is less than 1500");
// }


            //  LOGICAL OPERATORS
const userLoggedIN = true
const debitCard = true
const CreditCard = false
const userLoggedInfromGoogle = true
const userLoggedInfromEmail = false

if (userLoggedIN && debitCard) {        // In &&(AND) operator if both the statement is true then it will print True
    console.log("Allow to buy Course");
}

if (userLoggedIN || CreditCard || debitCard) {      // In ||(OR) operator if one condition is true then it willl print TRUE.
    console.log("Allow to buy course2");
}
