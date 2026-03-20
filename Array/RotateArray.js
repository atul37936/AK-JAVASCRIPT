// Rotate array – Rotate array left by one position (e.g., [1,2,3,4] → [2,3,4,1])

let arr = [1,2,3,4]
let firstElement = arr.shift() // Remove the first element

arr.push(firstElement) // Add the removed element to the end of the array
console.log(arr)

//  Method - 2
let array = [1,2,3,4]
let temp = array[0] // Store the first element

for(let i = 0; i<array.length; i++){
    array[i-1] = array[i];
}
array[array.length - 1] = temp // Place the stored element at the end of the array
console.log(array) // [2, 3, 4, 1]