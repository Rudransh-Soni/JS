// We can not Itreate object in For of loop.

//  for objects we need For In loop.

const obj ={
    JAI: "Jaipur",
    DEL: "Delhi",
    BOM: "Mumbai",
    BLR: "Bangalore"
}

for (const key in obj) {
    // console.log(`${key} shortuct of ${obj[key]}`);
}



// For IN loop on Arrays

const myarr = ["JAI","BLR","BOM","DEL","CAL"]
for (const key in myarr) {
    // console.log(myarr[key]);
}



// For IN loop on Arrays

const map = new Map()       
map.set('JAI' , 'Jaipur')
map.set('BOM' , 'Bombay')
map.set('BLR' , 'Bangalore')

for (const key in map) {
    console.log(key);
}