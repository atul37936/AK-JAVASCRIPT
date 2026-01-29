//  Surat (DGVCL - Dakshin Gujarat Vij Vij Company Ltd) ke hisaab se calculation 

// 0 - 50 units: ₹3.05/unit
// 51 - 100 units: ₹3.50/unit
// 101 - 250 units: ₹4.15/unit
// 250+ units: ₹5.20/unit

// 🧠 Logic Strategy:

// Agar 150 units hain
// Pehle 50 units: 50 * 3.05
// Agle 50 units: 50 * 3.50
// Bache hue 50 units (150 - 100$): 50 * 4.15$
 
 
 let unit = parseFloat(process.argv[2])
 let bill = 0;

 if(isNaN(unit) || unit < 0){
    console.log(`Input is Invalid`)
 }else if(unit <= 50){
      bill = unit * 3.05;
 }else if(unit <= 100){
        bill = (50 * 3.05) + ((unit - 50) * 3.50 );
        // bill = (50 * 3.05) + ((units - 50) * 3.50);
 }else if( unit <= 250){
        bill = (50 * 3.05) + (50 * 3.50) + ((unit - 100) * 4.15)
        // bill = (50 * 3.05) + (50 * 3.50) + ((units - 100) * 4.15);
 }else{
    bill = (50 * 3.05) + (50 * 3.50) + (150 * 4.15) + ((unit - 250) * 5.50)
 }

 console.log(`DGVCL Estimated Bill: ₹${bill.toFixed(2)}`)