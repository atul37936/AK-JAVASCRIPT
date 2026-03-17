// Count even numbers – Count how many even numbers are in [1,2,3,4,5,6].


// Method 1: Filter
let num = [1,2,3,4,5,6]
let evenCount = num
.filter(n => n%2===0)
 console.log(evenCount) // 2,4,6
console.log(evenCount.length)// 3


// Method 2: for loop

let numb = [1,2,3,4,5,6];
let count = 0;
for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) count++;
}
console.log(count);

// Method 3: forEach loop

let arrNum = [1,2,3,4,5,6];
let evenNumCount = 0; 
arrNum.forEach(n =>{
    if(n % 2===0 ) evenNumCount++
});
console.log(evenNumCount)

// loop is better for large arrays because of memory efficient