// E-Commerce Discount Engine

let cart = [1200, 450, 3000, 99, 150, 5000, 80];
let totalPayable = cart
.filter(num => num>100)
.map(num => num * 0.80)
.reduce((sum,num) => sum+num,0)
console.log("Total Payable after Discount:", totalPayable)