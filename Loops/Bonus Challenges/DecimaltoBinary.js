// Convert decimal to binary – Use loop to repeatedly divide by 2.

let n = parseInt(process.argv[2]);
if (isNaN(n)) {
    console.log("Please provide a number: node script.js <number>");
    process.exit(1);
}
let binary = "";
let temp = decimal;
while (temp > 0) {
    binary = (temp % 2) + binary;
    temp = Math.floor(temp / 2);
}

if (n === 0) {
    binary = "0";
}

console.log(`Binary representation of ${n} is: ${binary}`);

// Example (Number 6):

// Step 1: 6 % 2 = 0, binary = "0"

// Step 2: 3 % 2 = 1, binary = "1" + "0" = "10"

// Step 3: 1 % 2 = 1, binary = "1" + "10" = "110"

// Result: 110
