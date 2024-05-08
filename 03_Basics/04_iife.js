// Immediately Invoked Function Expressions (IIFE)
// for protecting our function from global scope pollution we use IIFE

// Syntax:- () ()  in first bracket we protect our function and seconf bracket is used for declaration.

(function one(){        // this is called named IIFE bcz function have its name.
    console.log('Database Connected');
})();               // we have to end this IIFE function using ';' semicolon.


( (name) => {                       // here we passed one parameter with 'name'.
    console.log(`name is ${name}`);
} )
("Rudrash")