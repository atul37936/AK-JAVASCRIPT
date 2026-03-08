// Perfect number – Check if a number equals sum of its proper divisors.

let userInput = parseInt(process.argv[2])
let num = userInput

let sum = 0

for(let i = 1;i<=num/2; i++){
  if(num % i === 0){
      sum += i;
  }
}


if (sum === num && num !== 0) {
    console.log(num + " is a Perfect Number!");
} else {
    console.log(num + " is NOT a Perfect Number.");
}