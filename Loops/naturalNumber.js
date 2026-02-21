// Sum of first N natural numbers – Input N, calculate sum.
// let sum = (n * (n + 1)) / 2; formula


// Method -1 More efficient (without using loop)

let n = parseInt(process.argv[2])

if(isNaN(n) || n < 1){
  console.log(`Invalid input. Please enter a positive integer.`);
  process.exit(1);
}
let s = n * (n + 1) / 2;   // formula: n*(n+1)/2
console.log(`The sum of first ${n} natural numbers is ${s}`);



// Method -2

// for loop

let N = parseInt(process.argv[2])

if(isNaN(N) || N < 1){
  console.log(`Invalid input. Please enter a positive integer.`);
  process.exit(1);
}
let sum = 0
for(let i=1; i<=N; i++){
  sum += i
}
console.log(`The sum of first ${N} natural numbers is ${sum}`);



// while loop

let a = parseInt(process.argv[2]) 
if(isNaN(a) || a < 1){
  console.log(`Invalid input. Please enter a positive integer.`);
  process.exit(1);
}
let c = 0
let b = 1;
while (b<=a) {
  c+=b
  b++
}
console.log(`The sum of first ${a} natural numbers is ${c}`);




// do-while loop

let d = parseInt(process.argv[2])

if(isNaN(d)|| d<1){
  console.log(`Invalid input. Please enter a positive integer.`);
  process.exit(1);
}
let e = 0
let f =1;
do {
  e +=f
  f++
} while (f<=d); 
console.log(`The sum of first ${d} natural numbers is ${e}`);