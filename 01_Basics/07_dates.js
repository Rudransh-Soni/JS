let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());  // It is showing Day Month Date Year
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString()); // First it will show date and them timme.

// console.log(typeof myDate); // Date is an "Object" in JS

// let myCreaterdDate = new Date(2001, 8, 26)  // here we can also give Dates according to ourself. In Js monthes counts from 0 e.g - 0=Jan, 1=feb
                            // here we also declare static time  
// console.log(myCreaterdDate.toDateString());
// console.log(myCreaterdDate.toLocaleString());  // Using LocalString we can see both date and time.

// let CreaterdDate = new Date(2001, 8, 26, 10, 30, 25)
// console.log(CreaterdDate.toLocaleString()); // it will print "9/26/2001, 10:30:25 AM"

let myCreaterdDate = new Date("09-26-2001") // this is in the formate of MM-DD-YY
// console.log(myCreaterdDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   // This method returns the number of milliseconds since January 1, 1970.
// console.log(myCreaterdDate.getTime()); // This menthod returns the number of miliseconds since the date which we are mentioned in our "myCretedDate" function.

// console.log(Date.now()/1000); // this will convert miliseconds into Seconds
// console.log(Math.floor(Date.now()/1000)); // and for removing decimal value we can use "Math.floor()" function.




let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday: "long",
    
})
