// Logic Challenge: The "Odd-Even" Transformation
// Filter: Sirf Even numbers (2, 4, 6...) ko nikaaliye.

// Map: Un even numbers ka Square (number * number) kar dijiye.

// Result: Output aana chahiye [4, 16, 36, 64, 100].

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let evenTransformation = numbers
 .filter(num => num % 2 === 0)
 .map(num => num * num)
//  .reduce((sum,num) => sum+num,0)
 console.log(evenTransformation)
// Output: [4, 16, 36, 64, 100]