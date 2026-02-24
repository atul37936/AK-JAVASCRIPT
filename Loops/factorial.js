// Factorial – Input a number, compute its factorial (using loop).

// for loop- forward 

let n = parseInt(process.argv[2])

if(isNaN(n) || n < 0){
  console.log(`Invalid input. Please enter a non-negative integer.`);
  process.exit(1);
}
console.log(`For loop :-Factorial using forward direction`)
let a =1
for(let b =1 ; b<=n; b++){
   a*=b
   console.log(`Sum of Element ${b}`)
}
console.log(`The factorial of ${n} is ${a}`)

// for loop- Backward 

// let num = parseInt(process.argv[2])
// if(isNaN(num) || num < 0){
//   console.log(`Invalid input. Please enter a non-negative integer.`);
//   process.exit(1);
// }

console.log(`For loop :-Factorial using Backward direction`)
let c =1
for(let b = n; b>=1; b--){
   c*=b
   console.log(`Sum of Element ${b}`)
}
console.log(`The factorial of ${n} is ${c}`)

// while loop forward 

// let numb = parseInt(process.argv[2])
// if(isNaN(numb) || numb < 0){
//   console.log(`Invalid input. Please enter a non-negative integer.`);
//   process.exit(1);
// }

console.log(`while loop :-Factorial using forward direction`)
let d = 1
let e = 1
while (e<=n) {
   d*=e
    console.log(`Sum of Element ${e}`)
    e++
}
console.log(`The factorial of ${n} is ${d}`)

// while loop Backward

// let numbe = parseInt(process.argv[2])
// if(isNaN(numbe) || numbe < 0){
//   console.log(`Invalid input. Please enter a non-negative integer.`);
//   process.exit(1);
// }

console.log(`while loop :-Factorial using Backward direction`)
let f = 1
let g = n
while (g>=1) {
  f*=g
    console.log(`Sum of Element ${g}`)
    g--
}
console.log(`The factorial of ${n} is ${f}`)

// do-while loop forward

// let number = parseInt(process.argv[2])
// if(isNaN(number) || number < 0){
//   console.log(`Invalid input. Please enter a non-negative integer.`);
//   process.exit(1);
// }
 
console.log(`do-while loop :-Factorial using forward direction`)
let h = 1
let i = 1
do {
  h*=i
    console.log(`Sum of Element ${i}`)
  i++
} while (i<=n);
console.log(`The factorial of ${n} is ${h}`)

// do-while loop Backward


// let userInput = parseInt(process.argv[2])
// if(isNaN(userInput) || userInput < 0){
//   console.log(`Invalid input. Please enter a non-negative integer.`);
//   process.exit(1);
// }


console.log(`do-while loop :-Factorial using Backward direction`)
let j = 1
let k = n
do {
  j*=k
    console.log(`Sum of Element ${k}`)
  k--
} while (k>=1);

console.log(`The factorial of ${n} is ${j}`)
