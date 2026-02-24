// Count digits – Input a number, count how many digits it has.

let n = parseInt(process.argv[2])
n = Math.abs(n)
let count = 0
if (isNaN(n)) {
    console.log("Please provide a number");
    process.exit(1);
}
 if(n === 0){
   count = 1
}
while(n>0){
  n = Math.floor(n/10)
 count ++
}
console.log(`Total Count of Digits: ${count}`)
