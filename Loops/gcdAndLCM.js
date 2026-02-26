// GCD of two numbers – Find greatest common divisor using Euclidean algorithm (loop).

let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])

if(isNaN(num1) || isNaN(num2)){
      console.log(`Error: Please provide TWO numbers.`)
      process.exit(1);
}
let a = Math.abs(num1)
let b = Math.abs(num2);
while (b!==0) {
  let remainder = a % b;
    a = b;         // Purana 'b' ab 'a' ban gaya
    b = remainder; // Naya remainder ab 'b' ban gaya
}
// console.log(`The GCD of ${num1} and ${num2} is: ${a} and ${b}`);
let gcd = a;

let lcm = Math.abs(num1 * num2) / gcd;

console.log(`Numbers: ${num1}, ${num2}`);
console.log(`GCD: ${gcd}`);
console.log(`LCM: ${lcm}`);
