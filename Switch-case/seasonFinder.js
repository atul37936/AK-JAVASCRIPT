let month = parseInt(process.argv[2]);

if(isNaN(season)|| month < 1 || month > 12){
    console.log("Please enter a valid number.");
     process.exit(1);
}
let season;
switch (month) {
  case 12:
  case 1:
  case 2:
    season= "winter";
    break;
  case 3:
  case 4:
  case 5:
    season= "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season= "Summar";
    break;
  case 9:
  case 10:
  case 11:
    season= "Rain";
    break;
  default:
    break;
}
console.log(`Month ${month} is in ${season}.`);
