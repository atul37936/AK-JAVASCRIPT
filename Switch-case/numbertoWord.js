let numb = parseInt(process.argv[2])

if (isNaN(numb)) {
    console.log("Please enter a valid number");
    process.exit(1);
}

switch (numb) {
  case 1:
    console.log(`one`)
    break;
  case 2:
    console.log(`Two`)
    break;
  case 3:
    console.log(`Three`)
    break;
  case 4:
    console.log(`Four`)
    break;
  case 5:
    console.log(`Five`)
    break; 
  default:
    console.log(`Number out of range (1-5 only)`)
}
