// Maximum of two numbers.

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('enter a number (num1) : ' , (input1)=>{
//   readline.question('enter a number (num2) : ' , (input2)=>{
//   let num1 = parseFloat(input1);
//   let num2 = parseFloat(input2);
//   if (num1 > num2){
//     console.log(`${num1} is greater than ${num2}`)
//   }else{
//     console.log(`${num2} is greater than ${num1}`)
//   }
//   readline.close();
// });
// });

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

if (num1 > num2) {
    console.log( num1 + ' is greater than ' + num2 );  
} else {
    console.log( num2 + ' is greater than ' + num1 );
}