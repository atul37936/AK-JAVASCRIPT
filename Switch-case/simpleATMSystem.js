let balance = 1000;
let choice = parseInt(process.argv[2]);
let amount = parseFloat(process.argv[3]);

if(isNaN(choice) || choice < 1 || choice > 4){
    console.log(`Invalid choice. Please enter a number between 1 and 4.`);
    process.exit(1);
}

console.log(`Menu :`)
console.log(`1. Check Balance`)
console.log(`2. Withdraw Money`)
console.log(`3. Deposit Money`)
console.log(`4. Exit`)

switch (choice) {
  case 1:
      console.log(`your Current Balance is ${balance}`)
    break;
  case 2: // Withdraw
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount. Please enter a positive number.");
        } else if (amount > balance) {
            console.log("Insufficient Balance");
        } else {
            balance -= amount;
            console.log(`Successfully withdrawn ₹${amount}. New Balance: ₹${balance}`);
        }
    break;
  case 3: // Deposit
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount. Please enter a positive number.");
        } else {
            balance += amount;
            console.log(`Successfully deposited ₹${amount}. New Balance: ₹${balance}`);
        }
    break;
  case 4: // Exit
      console.log(`Thank you for using our ATM`)
    break
  default:
    console.log(`unexpected error`)
}