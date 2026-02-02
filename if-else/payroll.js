// 🏢 Challenge: The Smart Payroll System
// Aapko ek file banani hai payroll.js jo terminal se 3 arguments legi:

// basicSalary (Poore saal ki salary)

// experience (Kitne saal se kaam kar rahe hain)

// rating (Performance rating: 1 se 5 tak)

// 🛠️ Logic Tree (Aapka Roadmap):
// Step 1: Rating ke hisaab se Bonus % nikaalein Pehle bonusPercentage set karein:

// Rating 5: 20% bonus

// Rating 4: 10% bonus

// Rating 3: 5% bonus

// Rating 1 ya 2: 0% bonus

// Step 2: Total Income calculate karein Total Income = basicSalary + (basicSalary * bonusPercentage)

// Step 3: Tax Deduction (The Hard Part) Ab Total Income par tax lagaiye:

// Agar Income < 5,00,000: 0% Tax.

// Agar Income 5,00,000 se 10,00,000 ke beech hai: 10% Tax.

// Agar Income 10,00,000 se zyada hai: 20% Tax.

// Step 4: Experience Loyalty (The Twist) Agar employee ka experience 10 saal se zyada hai, toh Tax katne ke baad use ₹50,000 ka extra "Loyalty Gift" milega.

// Step 5: Final Take-Home Salary print karein.


// 🧪 Test Case for You:
// node payroll.js 1200000 12 5
// Salary: 12,00,000
// Bonus (Rating 5 - 20%): + 2,40,000  Total: 14,40,000
// Tax (Income > 10L - 20%): - 2,88,000  Remaining: 11,52,000
// Loyalty (Exp > 10): + 50,000
// Final Output: ₹12,02,000

// Pro-Tip:
// Bonus percentage ko 0.20, 0.10 aise likhna calculation aasaan kar dega.

// Yaad rakhiye, Tax hamesha (Salary + Bonus) par lagega, lekin Loyalty Gift Tax katne ke baad add hoga.

let basicSalary = parseInt(process.argv[2]);
let experience = parseInt(process.argv[3]);
let rating = parseInt(process.argv[4]);

if(isNaN(basicSalary)|| isNaN(experience)|| isNaN(rating)){
    console.log("Invalid input");
    process.exit(1)
}else{
  let bonusPercentage = 0;
  if(rating === 1 || rating === 2 ){
      bonusPercentage = 0;
  }else if(rating===3){
      bonusPercentage = 0.05;
  }else if(rating === 4){
      bonusPercentage = 0.10;
  }else if(rating === 5){
      bonusPercentage = 0.20;
  }else{
      console.log("Invalid Rating");
      process.exit(1);
  }
  let totalIncome = basicSalary + (basicSalary * bonusPercentage);

      let tax = 0;
      if(totalIncome < 500000){
          tax = 0;
      }else if(totalIncome>=500000 && totalIncome<=1000000){
          tax = totalIncome * 0.10;
      }else if(totalIncome>1000000){
          tax = totalIncome * 0.20;
      }else{
          console.log("Error in tax calculation");
      }

      totalIncome = totalIncome - tax;

      if(experience>10){
        totalIncome = totalIncome + 50000;
      }

      console.log(`********Final Payroll Result*******`)
      console.log(`BasicSalary     : ${basicSalary}`)
      console.log(`Experience      : ${experience} Years`);
      console.log(`Rating          : ${rating}`)
      console.log(`Tax Deducted    : ₹${tax}`)
      console.log(`TotalIncome     : ${totalIncome}`)
}
