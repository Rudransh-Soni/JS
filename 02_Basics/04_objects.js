// const yt = new Object()  // This is an Singleton Object

const yt = {}  // This is an Nomn-Singleton object.

yt.id = "2001"
yt.name = "Soni" 
yt.isLoggedIn = false

// console.log(yt);

const AnotherUser = {
    email: "Soni@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rudransh",
            lastname: "Soni" 
        }
    }
}

// console.log(AnotherUser.fullname.userfullname.firstname);

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj4 = {5:"E", 6:"F"}

// const returnedTarget = Object.assign(target, source);    // SYNTAX of object assign. and combining
// const obj3 = Object.assign({}, obj1, obj2, obj4)     // It combines both the objects. So here also "{}" is act like "target" and rest will act like "Source"

const obj3 = {...obj1, ...obj2, ...obj4}    // using SPREAD method we can combine Objects. this method is easy and new.
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(yt);

console.log(Object.keys(yt));
console.log(Object.values(yt));
console.log(Object.entries(yt));

// to check wether that property is present in that Object or not

console.log(yt.hasOwnProperty('isLoggedIn'));
console.log(yt.hasOwnProperty('isLoggedOut'));

//   Object de-structure
//  de-structure means you are changing you original variable name, object name into easy form so that it can be easily understandable.
//  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const course ={
    name: "JAvaScript",
    price: "999",
    courseTeacher: "Rudransh Soni"
}

const {courseTeacher:Instructor} = course // here we de-structure the object.
console.log(Instructor);