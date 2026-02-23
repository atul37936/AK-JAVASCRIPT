//  find the sum of numbers from 1 to 50 that are divisible by both 3 and 5

// for loop

let a = 0
for(let b = 1 ; b<=50 ; b++){
  if(b%3===0 && b%5===0){
    a+=b
    console.log(`Adding ${b} to total...`)
  }
}
console.log(`The Special Sum is: ${a}`)

// while loop

let c = 0
let d = 1
while (d<=50) {
  if(d%3===0 && d%5===0){
    c+=d
    console.log(`Adding ${d} to total...`)
  }
  d++
}
console.log(`The Special Sum is: ${c}`)

// do-while loop

let e = 0
let f = 1
do {
  if(f%3===0 && f%5===0){
      e+=f
       console.log(`Adding ${f} to total...`)
  }
  f++
} while (f<=50);
console.log(`The Special Sum is: ${e}`)