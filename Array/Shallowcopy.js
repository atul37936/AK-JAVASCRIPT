let fruits = ["apple", "banana"];
let copy = [...fruits];
copy.push("mango");
console.log(fruits); // ["apple", "banana"] – original unchanged
console.log(copy);   // ["apple", "banana", "mango"]