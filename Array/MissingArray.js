// Find missing number – Given an array of consecutive numbers missing one, find the missing number.

let arr = [1, 2, 4, 5, 6]
let n = arr.length + 1 // Total numbers including the missing one
 let xorAll = 0;
 // XOR all numbers from 1 to n
for (let i = 1; i <= n; i++) {
        xorAll ^= i;
    }
// XOR all elements in the array
for (let i = 0; i < arr.length; i++) {
        xorAll ^= arr[i];
    }
console.log("Missing number is:", xorAll)

