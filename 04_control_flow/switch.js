//  SYNTAX

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const Month = 4     // this is the comaprison with "Number"

// switch (Month) {
//     case 1:
//         console.log("January");
//         break;      // if we dont apply this "break" statement then it will print everything till next "break" statement except "Default" statement.
//     case 2:
//         console.log("Feb");
//         break;      // "Break" statement breaks the Control flow of the code.  
//     case 3:
//         console.log("March");
//         break;       
//     case 4:
//         console.log("April");
//         break;       
//     case 4:
//         console.log("April");
//         break;             

//     default:
//         console.log("default value");
//         break;
// }


const month = "march"    // this is the comaprison with "String"

switch (month) {
    case "jan":                 
        console.log("January");
        break;   
    case "feb":
        console.log("Feb");
        break;      
    case "march":
        console.log("March");
        break;       
    case "april":
        console.log("April");
        break;                    

    default:
        console.log("default value");
        break;
}