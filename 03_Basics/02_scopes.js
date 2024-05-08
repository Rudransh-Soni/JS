//           SCOPE
//    Block Scope and Global Scope.

let a = 200

if(true){
    let a = 10      // let is blocked Scope
    const b = 20       // const is blocked Scope
    // var c = 30      // var is not blocked Scope
    // console.log("Inner ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



//         Nested Scope
function one(){
    const name = "Rudransh"
    
    function two(){
        const age = 22
        // console.log(name);
    }
    // console.log(age);    // O/P = Error.

    two()          // Here we are executing it. O/P = it will print the console.log(name) of function two.
}
one()              // Here we are executing it.  O/P = it ewill not print anything.


if(true){                       // More familarization about Scopes.
    const name = "rudransh"

    if(name === "rudransh"){
        const age = 22
        // console.log(name + " age is", age);
    }
    // console.log(age);
}
// console.log(name);


// ++++++++++++++++++++  INTRESTING  ++++++++++++++++++

function addone(num){
    return num +1 
}
addone(4)

const addtwo = function(num){       // this method is also known as "EXPRESSIONS"
    return num +2
}
addtwo(5)