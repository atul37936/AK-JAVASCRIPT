// I have solved the Simple Menu System question using two different methods

// Method 1

let menu = process.argv.slice(2);

if (!menu || menu.length === 0) {
    console.log("Please enter a proper command");
    process.exit(1);
}

let simplemenu = menu.join(" ").toLowerCase();

switch (simplemenu) {
  case "add record":
     console.log(`Adding record...`)
    break;
  case "view record":
     console.log(`Viewing record...`)
    break;
  case "delete record":
     console.log(`Deleting record...`)
    break;
  case "exit":
     console.log(`Goodbye`)
    break;
  default:
    console.log(`Invalid Input, Check Menu Again ..`)
}

// Method 2

let choice = parseInt(process.argv[2])

if(isNaN(choice)){
  console.log(`please enter a number`)
  process.exit(1);
}

console.log(`Menu`)
console.log(`1. Add Record`)
console.log(`2. View Record`)
console.log(`3. Delete Record`)
console.log("4. Exit");

switch (choice) {
  case 1:
     console.log(`Adding record...`)
    break;
  case 2:
     console.log(`Viewing record...`)
    break;
  case 3:
     console.log(`Deleting record...`)
    break;
  case 4:
     console.log(`Goodbye`)
    break;
  default:
    console.log(`Invalid Input, Please enter 1-4 ..`)
}