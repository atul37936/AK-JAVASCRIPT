let num = parseInt(process.argv[2])

if(isNaN(num)||num<1 || num>10){
  console.log(`Invalid Input , Please enter a number from 1 to 10`)
  process.exit(1);
}

switch (num) {
  case 1:
     console.log(`Roman number of ${num} is "I"`)
    break;
  case 2:
     console.log(`Roman number of ${num} is "II"`)
    break;
  case 3:
     console.log(`Roman number of ${num} is "III"`)
    break;
  case 4:
     console.log(`Roman number of ${num} is "IV"`)
    break;
  case 5:
     console.log(`Roman number of ${num} is "V"`)
    break;
  case 6:
     console.log(`Roman number of ${num} is "VI"`)
    break;
  case 7:
     console.log(`Roman number of ${num} is "VII"`)
    break;
  case 8:
     console.log(`Roman number of ${num} is "VIII"`)
    break;
  case 9:
     console.log(`Roman number of ${num} is "IX"`)
    break;
  case 10:
     console.log(`Roman number of ${num} is "X"`)
    break;
  default:
   console.log(`unexpected error`)
}