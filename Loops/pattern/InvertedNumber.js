// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n= 4
for(let i = n; i>=1;i--){
  let rowStr = "";
  for(let j = 1;j<=i;j++){
     rowStr += j + " "
  }
  console.log(rowStr)
}

// breakdown

// let n = 4; → sets the maximum length of the first row.

// Outer loop (i) → counts down from 4 to 1, controlling how many numbers appear in each row.

// Inner loop (j) → builds the string of numbers from 1 up to i.

// rowStr += j; → concatenates each number into the row string.

// console.log(rowStr); → prints each row.