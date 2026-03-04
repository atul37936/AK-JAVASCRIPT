let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);
fruits[2] = "orange"
console.log(fruits)

// for loop
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i])
}

// for...of loop
for(let fruit of fruits){
  console.log(fruit);
}

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let arrs of arr){
    sum += arrs;
}
console.log("Sum =", sum);