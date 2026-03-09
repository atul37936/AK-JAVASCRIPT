// Menu-driven calculator with loop – Keep showing menu until user chooses exit (use do...while).

const prompt = require('prompt-sync')();
let choice;

do {
    console.log(`\n--- Menu driven Calculator ---`);
    console.log(`1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit`);
    
    choice = parseInt(prompt(`Choose an operator (1-5): `));

    // Logic: Agar choice 1 to 4 hai, tabhi numbers mangna hai
    if (choice >= 1 && choice <= 4) {
        let num1 = Number(prompt("Enter first number: "));
        let num2 = Number(prompt("Enter second number: ")); 
        let result;

        switch (choice) {
            case 1:
                result = num1 + num2;
                console.log(`Result: ${num1} + ${num2} = ${result}`);
                break;
            case 2:
                result = num1 - num2;
                console.log(`Result: ${num1} - ${num2} = ${result}`);
                break;
            case 3:
                result = num1 * num2;
                console.log(`Result: ${num1} * ${num2} = ${result}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Error: Division by zero is not allowed!");
                } else {
                    result = num1 / num2;
                    console.log(`Result: ${num1} / ${num2} = ${result}`);
                }
                break;
        }
    } 
    else if (choice === 5) {
        console.log("Exiting... Thank you!");
    } 
    else {
        console.log("Invalid choice! Please try again.");
    }

} while (choice !== 5);
 