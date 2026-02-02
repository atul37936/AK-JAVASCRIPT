//Scenario: The Smart Hotel Booking System

// Aapko ek "Smart Hotel" ke liye billing logic banana hai. Input mein teen cheezein aayengi:

// Age of the guest.
// Room Type (Standard, Deluxe, ya Suite).
// Number of Nights.

// 📜 Rules (The Logic):
// Base Prices per night:
// Standard: ₹2000
// Deluxe: ₹3500
// Suite: ₹5000

// The Discount Logic (Yahan maza aayega):
// Senior Citizens (Age > 60): Inhe total bill par 20% discount milega.
// Children (Age < 12): Inhe total bill par 50% discount milega.
// Couples/Adults (Baki sab): Inhe koi discount nahi milega.
// Special Condition (Surat Special Bonus):

// Agar koi Suite room mein 5 nights se zyada rukta hai, toh use age discount ke baad extra ₹1000 ki chhoot (flat discount) milti hai.

// Aapko process.argv se teenon values leni hain.Step 
// 1: Pehle check karein ki input valid hai ya nahi (Age aur Nights negative nahi honi chahiye).
// Step 2: if-else se base price set karein Room Type ke hisaab se.Step 3: Total bill calculate karein (Price * Nights).
// Step 4: Age check karke discount apply karein.Step 
// 5: Suite wali special condition check karein.🚀 

// Aapka Goal:Agar main terminal mein likhu: node hotel.js 65 Suite 6
// Base Price: $5000 * 6 = 30000
// Senior Citizen Discount (20%): 30000 - 6000 = 24000
// Suite Special Bonus: 24000 - 1000 = 23000
// Final Bill: ₹23000

// Range (Age 1-12, 60+)
// Strings (Room Type: "Standard", "Suite")
// Math (Percentage discount aur flat discount)

let age = parseInt(process.argv[2]);
let roomType = process.argv[3].toLowerCase();
let nights = parseInt(process.argv[4]);

if(isNaN(age) || isNaN(nights) || age < 0 || nights < 0){
    console.log("Invalid input");
} else {
  let pricePerNight = 0;
    if (roomType === "standard") {
    pricePerNight = 2000;
} else if (roomType === "deluxe") {
    pricePerNight = 3500;
} else if (roomType === "suite") {
    pricePerNight = 5000;
} else {
    console.log("Invalid Room Type!");
    process.exit(1);
}   
      let totalBill = pricePerNight * nights;

      if(age <12){
         totalBill = totalBill * 0.5;
      }else if(age >60){
         totalBill = totalBill*0.8;
      }else{
          console.log(`No discount`)
      }

      if(roomType === "suite" && nights>5){
        totalBill -= 1000;
      }
      console.log(`--- Final Receipt ---`);
    console.log(`Age: ${age}`)
    console.log(`Room: ${roomType.toUpperCase()}`);
    console.log(`Nights: ${nights}`);
    console.log(`Total Bill: ₹${totalBill}`);
  }