let day = parseInt(process.argv[2])

if (!day) {
    console.log("Please enter a day number (1-7)");
    process.exit(1);
}

if(isNaN(day) || day < 1 || day > 7){
    console.log(`Invalid Input! Please enter a number from 1 to 7.`)
    process.exit(1);
}

console.log(`Week`)
console.log(`1. Monday`)
console.log(`2. Tuesday`)
console.log(`3. Wednesday`)
console.log(`4. Thursday`)
console.log(`5. Friday`)
console.log(`6. Saturday`)
console.log(`7. Sunday`)


switch (day) {
  case 1:
  case 2:
  case 3:  
  case 4:
  case 5: 
     console.log(`it's a Working Day`)
    break;
  case 6:
  case 7:
    console.log(`it's a Weekend`)
    break;
  default:
    console.log(`Unexpected error`)
}