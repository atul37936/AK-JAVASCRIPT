// Print all prime numbers up to N – Use nested loops. 

let n = parseInt(process.argv[2]);

if (isNaN(n)) {
    console.log("Please provide a number: node script.js <number>");
    process.exit(1);
}

for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        console.log(i); 
    }
}
