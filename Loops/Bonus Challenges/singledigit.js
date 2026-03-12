//Sum of digits until single digit – Repeatedly sum digits until result < 10.

let n = parseInt(process.argv[2]);
if (isNaN(n)) {
    console.log("Please provide a number: node script.js <number>");
    process.exit(1);
}
let num = n;
while (num >= 10) {
    let temp = num;
    let sum = 0;
    while (temp > 0) {
        let lastDigit = temp % 10;
        sum += lastDigit;
        temp = Math.floor(temp / 10);
    }
    num = sum;
}
console.log(`Single digit sum of ${n} is: ${num}`);


//Example: 98
// Outer Loop (98 >= 10? Yes):
// temp = 98.
// Digits: 8 + 9 = 17.
// num update : 17.

// Outer Loop (17 >= 10? Yes):
// temp = 17.
// Digits: 7 + 1 = 8.
// num update : 8.

// Outer Loop (8 >= 10? No):
// Loop khatam. Result = 8.