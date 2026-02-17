let month = parseInt(process.argv[2]);
let year = parseInt(process.argv[3]);

if(isNaN(month) || month<1 || month>12){
    console.log("Please enter a valid month number (1-12).");
    process.exit(1);
}
if (isNaN(year)) {
    console.log("Please enter a valid year.");
    process.exit(1);
}

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`Month ${month} of year ${year} has 31 days.`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`Month ${month} of year ${year} has 30 days.`);
    break;
  case 2:
    if (isNaN(year)) {
            console.log("Please provide a valid year to check February days.");
            process.exit(1);
        }
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`February  ${year} is a Leap Year. February has 29 days.`);
    }else{
        console.log(`February  ${year} is not a Leap Year. February has 28 days.`);
    }
    break;
  default:
    console.log(`Invalid Month`)
}

