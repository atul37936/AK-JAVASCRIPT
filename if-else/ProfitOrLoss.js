// Basic 
// FormulasProfit (Munafa): Jab aap saste mein kharidein aur mehnge mein bechein.
// Formula: Profit = SP - CP
// Condition: SP > CP

// Loss (Nuksan): Jab aap mehnge mein kharidein aur saste mein bechein.Formula: 
// Loss = CP - SP
// Condition: CP > SP


// Percentage (%): Profit ya Loss hamesha Cost Price (CP) par nikalta hai.
// Profit %: (Profit / CP) * 100 
//  Loss  %:   (Loss / CP) * 100



let SellingPrice = parseFloat(process.argv[2])
let CostPrice = parseFloat(process.argv[3])

if(isNaN(SellingPrice) || isNaN(CostPrice)){
  console.log(`invalid Input`)
}else if(SellingPrice>CostPrice){
      let Profit = SellingPrice - CostPrice;
      let ProfitPercentage = (Profit / CostPrice) * 100;
      console.log(`Profit : ${Profit.toFixed(2)}`)
      console.log(`ProfitPercentage : ${ProfitPercentage.toFixed(2)}%`)
}else if(CostPrice>SellingPrice){
        let Loss = CostPrice - SellingPrice;
      let LossPercentage = (Loss / CostPrice) * 100;
      console.log(`Loss : ${Loss.toFixed(2)}`)
      console.log(`LossPercentage : ${LossPercentage.toFixed(2)}%`)
}else{
  console.log(`No Profit , No Loss`)
}



