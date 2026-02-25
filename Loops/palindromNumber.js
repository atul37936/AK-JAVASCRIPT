// Check palindrome – Input a number, check if it reads the same forwards/backwards.


let n = parseInt(process.argv[2])
if(isNaN(n)){
    console.log("Error: Please provide a valid number.");
    process.exit(1);
}
let originalValue = Math.abs(n)
let temp = originalValue
let reverse = 0

while (temp>0) {
  let lastDigit = temp % 10;
   reverse = (reverse * 10)+ lastDigit
  temp = Math.floor(temp / 10);
}
if(originalValue === reverse){
  console.log(`${originalValue} is a Palindrome.`);
}else{
  console.log(`${originalValue} is not a Palindrome.`);
}