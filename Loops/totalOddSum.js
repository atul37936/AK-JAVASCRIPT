// Print even numbers from 1 to 20 and total sum of Odd Number

// For loop

// Method - 1 More Efficient

let a = 0;
for(let b = 1; b<=20;b+=2){
    console.log(b)
    a+=b
}
console.log(`Total Even Number of Sum is ${a}`)

// Method -2
let c = 0;
for(let d=1;d<=20;d++){
    if(d%2!==0){
      console.log(d)
      c+=d
    }
}
console.log(`Total Even Number of Sum is ${c}`)

// While loop

// Method - 1 More Efficient

let e = 0
let f = 1
while (f<=20) {
  console.log(f)
  e+=f
  f+=2
}
console.log(`Total Even Number of Sum is ${e}`)

// Method - 2

let g = 0
let h = 1
while (h<=20) {
  if(h%2!==0){
    console.log(h)
    g+=h
  }
  h++
}
console.log(`Total Even Number of Sum is ${g}`)

// do-while

// Method - 1 More Efficient

let i = 0;
let j = 1
do {
  console.log(j)
  i+=j
  j+=2
} while (j<=20);
console.log(`Total Even Number of Sum is ${g}`)

// Method - 2

let k = 0
let l = 1
do {
  if(l%2!==0){
      console.log(l)
      k+=l
  }
  l++
} while (l<=20);
console.log(`Total Even Number of Sum is ${k}`)