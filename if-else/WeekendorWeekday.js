//  Weekend ya Weekday


// let dayName = parseInt(process.argv[2])

// if(isNaN(dayName)){
//   console.log(`invalid input`)
// }else if(dayName<=0 || dayName>7){
//   console.log(`invalid Chosse from 1 to 7`)
// }else {
//     if(dayName >= 1 && dayName <= 5){
//       console.log(`It's a working day (Weekday) 💼`);
//     }else{
//        console.log(`It's a weekend (Holiday) 🏖️`);
//     }
// }

let day = parseInt(process.argv[2]);

// Guard Clause: Galat inputs ko turant bahar nikal dena
if (isNaN(day) || day < 1 || day > 7) {
    console.log("Error: Please enter a valid day number (1 to 7).");
} 
// Main Logic
else {
    // 6 (Saturday) and 7 (Sunday) are weekends
    if (day === 6 || day === 7) {
        console.log("Status: It's a Weekend! 🏖️");
    } else {
        console.log("Status: It's a Weekday. 💼");
    }
}