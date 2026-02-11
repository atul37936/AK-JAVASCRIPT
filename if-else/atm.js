let balance = parseInt(process.argv[2]);
let action = process.argv[3];
let amount = parseInt(process.argv[4]);

if (isNaN(balance) || isNaN(amount) || balance < 0 || amount < 0) {
    console.log(`Invalid input`);
} else {
    if (action === "withdraw") {
        if (amount % 500 !== 0) {
            console.log(`Error: Please enter amount in multiples of 500.`);
        } else if (amount > balance) {
            console.log(`Error: Insufficient balance.`);
        } else {
            balance -= amount; // Pehle paise nikale
            console.log(`Withdrawal successful. New balance: ${balance}`);
            if (balance < 1000) {
                console.log(`Warning: Balance is now less than 1000!`);
            }
        }
    } else if (action === "deposit") { 
        if (amount > 50000) {
            console.log("PAN Card Required for deposits above 50,000!");
        } else {
            balance += amount;
            console.log("Deposited successfully! New balance: " + balance);
        }
    } else {
        console.log("Invalid action! Use 'withdraw' or 'deposit'.");
    }
}   
