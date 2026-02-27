let n = parseInt(process.argv[2])

if (isNaN(n) || n < 2) {
    console.log("Error: Please provide a valid number greater than 1.");
    process.exit(1);
}
let isPrime = true
for(let i = 2; i<n; i++){
  if(n%i === 0){
      isPrime = false; // Divider mil gaya!
        break;
  }
  
}

if (isPrime) {
    console.log(`${n} is a Prime Number.`);
} else {
    console.log(`${n} is not a Prime Number.`);
}