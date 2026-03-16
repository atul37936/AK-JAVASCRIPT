

// Kya saare numbers even hain? (every)
// Kya kam se kam ek number 50 se bada hai? (some)

let nums = [2, 4, 6, 8];

console.log(nums.every(n => n % 2 === 0)); // true (Sab even hain)
console.log(nums.some(n => n > 5));        // true (Haan, 6 aur 8 bade hain)