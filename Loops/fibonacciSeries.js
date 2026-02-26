// Fibonacci series – Print first N terms of Fibonacci series.

let n = parseInt(process.argv[2])

if (isNaN(n) || n <= 0) {
    console.log("Error: Please provide valid numbers.");
    process.exit(1);
}
let a = 0, b = 1, nextTerm;

console.log(`Fibonacci series up to ${n} terms`);
for(let i =1; i<=n ; i++){
  process.stdout.write(a + " ");// To print all numbers in a single line
  nextTerm = a + b
  a = b
  b = nextTerm
}

console.log();

// while loop

let c = 0,d=1,nextValue
let e = 1

while (e<=n) {
  process.stdout.write(c + " ");
  nextValue = c + d
  c = d
  d = nextValue
  e++
}
console.log()

// do-while loop

let f= 0,g=1,nextItem
let h=1

do {
  process.stdout.write(f + " ");
  nextItem = f + g
  f = g
  g = nextItem
  h++
  
} while (h<=n);

console.log()
