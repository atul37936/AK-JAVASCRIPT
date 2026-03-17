// Reverse an array – Print the array in reverse order without using .reverse() and with using .reverse()

// Using .reverse()
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()) // [5, 4, 3, 2, 1]

// Without using .reverse()
let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for(let i = array.length - 1; i >= 0; i--){
    reversedArray.push(array[i])
}
console.log(reversedArray) // [5, 4, 3, 2, 1]

// for each loop

let arrs = [1, 2, 3, 4, 5];
let revArr = [];
arrs.forEach(item =>{
    revArr.unshift(item) // unshift adds element to the beginning of the array
})
console.log(revArr) // [5, 4, 3, 2, 1]