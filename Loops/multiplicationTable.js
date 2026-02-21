// Multiplication table – Input a number, print its table 

// for loop

//method-1

let num = parseInt(process.argv[2])

if(isNaN(num)){
  console.log(`invalid input, Please choose from 1 to 10`)
  process.exit(1);
}
console.log(`Multiplication table of ${num}:`);
for(let i=1; i<=10; i++){
  console.log(`${num} * ${i} = ${num * i}`)
}

//method-2

let n = parseInt(process.argv[2]);
if(isNaN(n)){
  console.log(`invalid input, Please choose from 1 to 10`)
  process.exit(1);
} 
console.log(`Multiplication table of ${n}:`);
for (let i = 1; i <= 10; i++) {
    let result = n * i; 
    console.log(n + " x " + i + " = " + result);
}

// while-loop

//method-1

let j = parseInt(process.argv[2])

if(isNaN(j)){
 console.log(`invalid input, Please choose from 1 to 10`)
 process.exit(1);
}
console.log(`Multiplication table of ${j}:`);
let k=1;
while(k<=10){
  console.log(`${j} * ${k} = ${j * k}`)
  k++;
}


//method-2
let t = parseInt(process.argv[2]);

if(isNaN(t)){
  console.log(`invalid input, Please choose from 1 to 10`)
  process.exit(1);
} 
console.log(`Multiplication table of ${t}:`);
let i = 1;
while(i<=10){
  let result = t * i; 
   console.log(t + " x " + i + " = " + result);
   i++;
}


//  do-while loop

// method-1

let d = parseInt(process.argv[2])
if(isNaN(d)){
  console.log(`invalid input, Please choose from 1 to 10`)
  process.exit(1);
} 
console.log(`Multiplication table of ${d}:`);
let g = 1;
do {
  console.log(`${d} * ${g} = ${d * g}`)
  g++
} while (g<=10);

// method-2

let c = parseInt(process.argv[2])
if(isNaN(c)){
  console.log(`invalid input, Please choose from 1 to 10`)
  process.exit(1);
} 
console.log(`Multiplication table of ${c}:`);
let v = 1;
do {
  let result = c * v; 
   console.log(c + " x " + v + " = " + result);
   v++;
} while (v<=10);