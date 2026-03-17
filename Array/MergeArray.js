// Merge two arrays – Combine two arrays into one.


// Spread operator ... (modern & readable)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1,...arr2]
console.log(merged) // [1,2,3,4,5,6]

// concat() (classic)
let array1 = [7, 8, 9];
let array2 = [10, 11, 12];
let merge = array1.concat(array2)
console.log(merge) // [1,2,3,4,5,6]