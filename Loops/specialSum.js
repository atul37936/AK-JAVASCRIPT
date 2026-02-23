//The "Special" Sum
// Run a loop through all numbers from 1 to 20, but calculate the sum (total) of only those numbers that are divisible by 5 (e.g., 5, 10, 15, 20). - extra

// for loop

let a = 0
for (let b = 1; b <= 20; b++) {
  if(b%5===0){
    a+=b
    console.log(`Adding ${b} to total...`)
  }
}
console.log(`The Special Sum is: ${a}`)

// while loop 

let c = 0
let d = 1
while (d<=20) {
  if(d%5===0){
   c+=d
    console.log(`Adding ${d} to total...`)
  }
  d++
}
console.log(`The Special Sum is: ${c}`)

// do-while
let e = 0
let f = 1
do {
  if(f%5===0){
    e+=f
    console.log(`Adding ${d} to total...`)
  }
  f++
} while (f<=20);
console.log(`The Special Sum is: ${e}`)
