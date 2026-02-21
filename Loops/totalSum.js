// Print even numbers from 1 to 20 and Total Sum

// for Loop

let sum = 0
for(let i = 1;i<=20;i++){
  console.log(i)
  sum += i;
}
console.log(`Toal Sum is ${sum}`)

// While Loop

let num = 0
let j = 1;
while(j<=20){
  console.log(j)
  j++
  num += j;
}
console.log(`Toal Sum is ${num}`)

//do- While Loop

let s = 0;
let n = 1;
do {
  console.log(n)
  n++
  s += n;
} while (n<=20);
console.log(`Toal Sum is ${s}`)