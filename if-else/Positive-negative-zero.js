// Easy (7):

// Positive, negative, or zero.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  let num = parseFloat(input);

  if (num > 0) {
    console.log(num + " is a positive number");
  } else if (num === 0) {
    console.log(num + " is zero");
  } else {
    console.log(num + " is negative");
  }

  rl.close(); // Input lene ke baad interface band karna zaroori hai
});










// Medium (7):
// 8. Vowel or consonant.
// 9. Triangle type.
// 10. Temperature conversion.
// 11. Grade of a student.
// 12. Valid triangle.
// 13. Profit or loss.
// 14. Alphabet, digit, or special character.

// Hard (6):
// 15. Point lies on x-axis, y-axis, or origin.
// 16. Number within range (1-100) and even.
// 17. Three-digit number and multiple of 2 and 5.
// 18. Positive even, positive odd, negative even, negative odd.
// 19. Perfect square (without loops, up to 10000, we can check for 0-100 squares).
// 20. Palindrome for 3-digit number.




























// Easy Problems
// Largest of Two: Find the largest of two numbers
// Vowel or Consonant: Check if a character is a vowel or consonant
// Pass/Fail: Check if marks are above passing grade (40%)
// Age Group: Categorize age into child (<13), teen (13-19), adult (20-59), senior (60+)

// Medium Problems

// Largest of Three: Find the largest of three numbers
// Quadratic Roots: Calculate roots of quadratic equation (ax² + bx + c = 0)
// Triangle Type: Check if triangle is equilateral, isosceles, or scalene
// Grade Calculator: Convert percentage to letter grade (A: 90+, B: 80-89, etc.)
// Profit/Loss: Calculate profit or loss given cost price and selling price
// Electricity Bill: Calculate bill with slabs (0-100: ₹5, 101-200: ₹7, etc.)
// Day of Week: Input number 1-7, output day name
// Calculator: Simple calculator (+, -, *, /) with two numbers

// Hard Problems

// Character Type: Classify character as uppercase, lowercase, digit, or special
// Month Days: Input month number, output days in that month (consider leap year for Feb)
// Triangle Valid + Type: First check if triangle is valid (sum of two sides > third), then classify type
// Salary Calculator: Calculate salary with overtime (1.5x for >40 hours) and deductions

// Bonus Challenge Problems

// Number to Word: Convert 1-10 to word (1 → "One")
// BMI Category: Calculate BMI and categorize (Underweight, Normal, Overweight, Obese)
// Tax Calculator: Calculate tax based on income slabs
// Library Fine: Calculate library fine based on days late