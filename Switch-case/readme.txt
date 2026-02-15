Easy Problems (5)
1 : Day of Week
Input a number (1-7) and print the corresponding day name (1 = Monday, 2 = Tuesday, ..., 7 = Sunday). Handle invalid input.

2 : Month Name
Input a number (1-12) and print the month name (1 = January, 2 = February, ...). Show an error for numbers outside range.

3 : Simple Arithmetic Calculator
Accept two numbers and an operator (+, -, *, /) as input. Perform the operation using switch and print the result. Handle division by zero.

4 :Grade Message
Input a grade letter (A, B, C, D, F) and print a corresponding message:

A → "Excellent"
B → "Good"
C → "Average"
D → "Poor"
F → "Fail"
Use switch and handle lowercase/uppercase.

5 : Number to Word (1-5)
Input a number between 1 and 5 and print its English word (1 → "One", 2 → "Two", ...). Show "Invalid" for other numbers.




Medium Problems (5)

6 : Traffic Light Action
Input a color ("red", "yellow", "green") and output the corresponding action:

red → "Stop"
yellow → "Ready"
green → "Go"
Handle invalid colors.

7 :Season Finder
Input a month number (1-12) and output the season in your region (e.g., Winter: Dec-Feb, Spring: Mar-May, etc.). Use switch with fall-through for grouping months.

8 : Simple Menu System
Display a menu:

1. Add Record
2. View Records
3. Delete Record
4. Exit
Accept user choice and print the selected action (e.g., "Adding record...", "Viewing records...", etc.) using switch. For exit, print "Goodbye!".

9 : Vowel or Consonant (Switch Version)
Input a single alphabet character and determine if it's a vowel or consonant using switch (group vowels). Handle non-alphabets.

10 : Weekday or Weekend
Input a day number (1-7, where 1 = Monday, 7 = Sunday) and output whether it's a "Weekday" (Mon-Fri) or "Weekend" (Sat-Sun). Use switch with fall-through.





Hard Problems (5)

11 : Advanced Calculator
Build a calculator that supports:

+ addition

- subtraction

* multiplication

/ division (with zero check)

% modulus

^ power (e.g., 2^3 = 8)
 sqrt square root (single number input)
Use switch on the operator. For power, you may need Math.pow() or **. For sqrt, handle negative numbers.

12 : Roman Numeral Converter (1-10)
Input a number between 1 and 10 and output its Roman numeral equivalent:
1 → "I", 2 → "II", 3 → "III", 4 → "IV", 5 → "V", 6 → "VI", 7 → "VII", 8 → "VIII", 9 → "IX", 10 → "X". Use switch.

13 :Simple ATM System
Simulate an ATM with options:

1. Check Balance
2. Withdraw Money
3. Deposit Money
4. Exit
Use switch for menu choice. For withdraw/deposit, ask for amount and update a balance variable (start with ₹1000). Validate sufficient funds for withdrawal.

14 : Days in Month (with Leap Year)
Input a month number (1-12) and a year. Output the number of days in that month. Use switch for months, and for February, check leap year using if-else inside the case.

15 : Shape Area Calculator
Display a menu of shapes:

1. Circle
2. Rectangle
3. Triangle
4. Square
Based on choice, ask for relevant dimensions (radius, length/breadth, base/height, side) and calculate area using formulas. Use switch to handle each shape. Print the area.