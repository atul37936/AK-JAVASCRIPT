let person = { name: "Raj", age: 25 };
let copy = { ...person };
copy.city = "Delhi";
console.log(person); // { name: "Raj", age: 25 } – original unchanged
console.log(copy);   // { name: "Raj", age: 25, city: "Delhi" }