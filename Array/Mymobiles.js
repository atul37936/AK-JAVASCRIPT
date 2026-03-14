// Mini Logic Challenge 

// Ek array rakhe: let myMobiles = ["iPhone", "Samsung", "Redmi", "Pixel"];
// Terminal se ek naam input le (e.g., node script.js Redmi).
// Check kare ki kya wo mobile list mein hai?
// Agar hai, toh uska index print kare.
// Agar nahi hai, toh message de: "Mobile not found".



let myMobiles = ["iPhone", "Samsung", "Redmi", "Pixel"];
let inputMobile = process.argv[2];
myMobiles.reverse();
console.log(`Reversed : ${myMobiles}`)

let index = myMobiles.indexOf(inputMobile);
if (index !== -1) {
    console.log("Found at:", index);
} else {
    console.log("Mobile not found");
}
myMobiles.sort();
console.log("Sorted (A-Z):", myMobiles);

// node Mymobiles.js "Redmi"
// Reversed : Pixel,Redmi,Samsung,iPhone
// Found at: 1
// Sorted (A-Z): [ 'Pixel', 'Redmi', 'Samsung', 'iPhone' ]

// The ASCII Secret (Very Important for DSA)
// Computer alphabetical sorting ASCII values (Numbers) ke basis par karta hai.
// Bade Letters (A-Z) ki value 65 se 90 tak hoti hai.
// Chote Letters (a-z) ki value 97 se 122 tak hoti hai.

// "Pixel" (P=80) , "iPhone" (i=105)