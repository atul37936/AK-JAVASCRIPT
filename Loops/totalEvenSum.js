// Print even numbers from 1 to 20 and total sum of Even number

// S = n(n+1)

// For loop

// Method - 1 More Efficient
let n = 0;
for(let s=2;s<=20;s+=2){
  console.log(s)
  n+=s
}
console.log(`Total Even Number of Sum is ${n}`)

// Method - 2
let s = 0;
for(let n=1;n<=20;n++){
  if(n % 2 === 0){
      console.log(n)
       s+=n
  }
}
console.log(`Total Even Number of Sum is ${s}`)

// While loop

// Method - 1 More Efficient

let t = 0;
let i = 2
while (i<=20) {
  console.log(i)
  t+=i
  i+=2
}
console.log(`Total Even Number of Sum is ${t}`)

// Method - 2

let j = 0;
let k = 1
while (k<=20) {
 if(k % 2 === 0){
    console.log(k)
     j+=k
 }
  k++
 
}
console.log(`Total Even Number of Sum is ${j}`)

// do-while

// Method More Efficient

let l = 0;
let m = 2
do {
  console.log(m)
  l+=m
  m+=2
} while (m<=20);
console.log(`Total Even Number of Sum is ${l}`)

// Method - 2

let p = 0;
let q = 1
do {
  if(q % 2 === 0){
    console.log(q)
      p+=q
  }
  q++
} while (q<=20);
console.log(`Total Even Number of Sum is ${p}`)