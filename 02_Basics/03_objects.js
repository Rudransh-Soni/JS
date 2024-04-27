// Singleton            ---
//                        |------ These two methods use for declaring the Objects.
// Object Literals      ---

//      Object are declare in the form of Key : value pair.
//      and every key is act as String.

const mySym = Symbol("key1")    // this is a method of declaring the Symbol in Object


const Nuser = {        
    name: "Rudransh",
    "age": 22,
    [mySym]: "myKey1",  // If we use [] 'Sq bracket' in symbol then it will return Symbol, but is we don't use [] then it will return as a String.
    Location: "Jaipur",
    Email: "Soni@gmail.com",
    isLoggedIn: false
}


// console.log(Nuser.age);

// console.log(Nuser["Location"]);  // always use this method to print some Key values bcz it converts every key values into String.
console.log(Nuser[mySym]);

Nuser.Email = "Rudr1@gmail.com" // using this method we can overwrite and values.
// console.log(Nuser);

            // To freeze any value from our object so that no can change it or overs=write it.

// Object.freeze(Nuser) // the values of Nuser is Freezed.
// Nuser.Email = "Rudr100000@gmail.com"
// console.log(Nuser);

Nuser.greetings = function() {
    console.log("Hello New Users");
}
console.log(Nuser.greetings());
    //      Output:- Hello New Users
    //               undefined
// console.log(Nuser.greetings); // using this function reference will come as output but function is not exceuted.
    //      Output:- [Function (anonymous)]



Nuser.greetings2 = function() {
    console.log(`Hello New Users, ${this.name}`);   // if we wna tto use same object as reference the we use "this"  and ${} is called string interpollation.
}
console.log(Nuser.greetings2());