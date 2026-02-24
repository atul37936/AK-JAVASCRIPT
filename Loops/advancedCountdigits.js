// Count digits – Input a number, count how many digits it has. , Reverse a number : output its reverse (e.g., 123 → 321).The sum of total digit(e.g., 123 → 3+2+1 = 6)

let count = 0;
let sum = 0;
let reverse = 0;

let n = parseInt(process.argv[2])
    n = Math.abs(n)
    if (n === 0) {
    count = 1; 
}

while (n>0){
  let result = n % 10;
  sum = sum + result;
   reverse = (reverse * 10) + result
   n = Math.floor(n/10)
   count++;
}
console.log(`Total Count of Digits: ${count}`)
console.log(`Total Sum of Digits: ${sum}`)
console.log(`reverse Count of Digits ${reverse}`)


