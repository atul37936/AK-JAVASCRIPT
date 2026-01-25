// Conversion,Core Steps
// C to F,"Multiply by 1.8, then add 32"
// F to C,"Subtract 32, then multiply by 5/9"
// C to K,Add 273.15

// Celsius Scale: Freezing point 0 hota hai aur Boiling point 100. (Total 100 units ka gap).
// Fahrenheit Scale: Freezing point 32 hota hai aur Boiling point 212. (Total 180 units ka gap).

let temp = parseFloat(process.argv[2]);
let unit = process.argv[3];

if (isNaN(temp)){
  console.log("Value error TemperatureConversion.js");
}else{
  let unitInput = (unit || "").toUpperCase();
if(unitInput === 'F'){
  let C = (temp - 32) * 5/9;
  console.log(`Value in Celsius ${C.toFixed(2)}°C`);
} else if(unitInput === 'C'){
   let F = (temp * 9/5) + 32 ; 
   console.log(`Value in Fahrenheit ${F.toFixed(2)}°F`)
}
else{
  console.log("Error: Please specify unit 'C' or 'F' (Example: node script.js 32 F)");
}
}
