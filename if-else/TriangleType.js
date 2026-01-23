// Triangle type (equilateral, isosceles, scalene).

// Equilateral Triangle (Samabahu)Is triangle ki teeno sides barabar hoti hain. Iska matlab hai ki iske teeno angles bhi hamesha $60^\circ$ hote hain.

// Isosceles Triangle (Samadvibahu)
// Is triangle ki koi bhi do sides barabar hoti hain. Iski wajah se do angles bhi barabar hote hain.

// Scalene Triangle (Vishamabahu)
// Is triangle ki teeno sides alag-alag length ki hoti hain. Iska koi bhi angle dusre angle ke barabar nahi hota.

// let a = process.argv[2]
// let b = process.argv[3]
// let c = process.argv[4]

// if(a === b &&  b === c){
//    console.log(`Triangle is Equilateral Triangle`) 
// }else if(a === b || b === c || a === c){
//     console.log(`Triangle is Isosceles Triangle`)
// }else{
//    console.log(`Triangle is Scalene Triangle`)
// }

const readline = require('readline-sync');

let a = Number(readline.question("Side A: "));
let b = Number(readline.question("Side B: "));
let c = Number(readline.question("Side C: "));

// Pehle validation check karein (Sum of 2 sides > 3rd side)
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Equilateral Triangle");
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
} else {
    console.log("Yeh sides ek valid triangle nahi banati hain.");
}