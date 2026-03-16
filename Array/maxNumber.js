// The "Max Number" Challenge using .reduce


// Array.prototype.reduce()
let numbers = [10, 55, 2, 89, 43];
let maxNumber = numbers
 .reduce((accumulator , currentValue)=>(currentValue > accumulator ? currentValue : accumulator), -Infinity)

 console.log(maxNumber)


//  Math.max() with the spread operator(...)
 const number = [3, 7, 2, 8, 5];
const max = Math.max(...number);
console.log(max); // Output: 8



// traditional for loop
const numb = [3, 7, 2, 9, 1, 5];
let maxNum = -Infinity; // Initialize with -Infinity or numbers[0]
for (let i = 0; i < numb.length; i++) {
  if (numb[i] > maxNum) {
    maxNum = numb[i];
  }
}
console.log(maxNum); // Output: 9
