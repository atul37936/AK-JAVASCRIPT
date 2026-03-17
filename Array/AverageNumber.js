// Average of numbers – Calculate average of array elements.


//  for..of loop
let arr = [7,45,67,55,34,63]
let sum = 0;

for(let arrs of arr){
    sum += arrs;
}
let average = sum / arr.length;
console.log("The sum is: " + sum);
console.log("Average =", average)



// for...each loop

let numbers = [10, 20, 30, 40];
let s = 0
numbers.forEach(number =>{
  sum += number
})
const avg = sum / numbers.length
console.log("Sum =", sum);
console.log("Average =", avg)



// traditional for loop
let num = [5, 15, 25, 35];
let sumFinder = 0

for(let i = 0;i<num.length;i++){
    sumFinder += num[i]
}
const averageNum = sumFinder / num.length
console.log("Sum =", sumFinder);
console.log("Average =", averageNum)



// reduce Method

let nums = [2, 4, 6, 8];
let total = nums
.reduce((acc , val)=>acc + val, 0);
const avgNum = total / nums.length
console.log("Sum =", total);
console.log("Average =", avgNum)