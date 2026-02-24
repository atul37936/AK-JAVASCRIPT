// Reverse a number – Input a number, output its reverse (e.g., 123 → 321).

let n = parseInt(process.argv[2]); 


if (isNaN(n)) {
    console.log("Please provide a number");
    process.exit(1);
}

let reverse = 0; 

while (n !== 0) {
    let lastDigit = n % 10;
    reverse = (reverse * 10) + lastDigit;
    
    
    n = Math.trunc(n / 10); 
}

console.log(reverse);



// let n = parseInt(process.argv[2])
//  let reverse = 0 
// let sum = 0
// if (isNaN(n)) {
//     console.log("Error: Please provide a valid number.");
//     return; 
// }
//    n = Math.abs(n);
// while(n>0){

//    let lastDigit = n % 10
// sum = sum + lastDigit
//     reverse = (reverse * 10)+lastDigit;
  
//     n = Math.trunc(n / 10);
// }

//   console.log(reverse);
//  console.log(sum)