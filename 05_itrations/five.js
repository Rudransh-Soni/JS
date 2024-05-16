// For each loop

const coding = ["C++","Js","Python","ruby","Java"]

// coding.forEach( function (val){     //In callback function there were no name of function. and it is in Array so we can call it through any name
//     console.log(val);               // Syntax of Call back function:- "( Function (){} )"
// })           

coding.forEach( (val) => {      // here we use Arrow function. Syntax of Arrow function:-" () => {} "
    // console.log(val);
})


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)     // here we are giving only reference"print" we are not executing it"print()"

coding.forEach((item, index, arr) => {      // here we can print lots of parameter also.
    // console.log(item, index, arr);
})


// ***************  IMPORTANT   ***************

const mycoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },
    {
        languageName: "C ++ ",
        languageFileName: "CPP"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);     // here we got one value inside object inside Arrays.
})