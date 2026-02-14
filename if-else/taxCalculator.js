let userIncome = parseFloat(process.argv[2]);

if(isNaN(userIncome) || userIncome<=0){
  console.log(`invalid input`)
}else{
    let tax= 0;
     if(userIncome<=250000){
        tax = 0;
     }else if(userIncome<=500000){
      tax = (userIncome - 250000)* 0.05;
     }else if(userIncome<=1000000){
      tax = (250000 * 0.05) + (userIncome - 500000) * 0.20;
     }else{
       tax = (250000 * 0.05) + (500000 * 0.20) + (userIncome - 1000000)* 0.30;
     }

     console.log(`Income : ${userIncome}`)
      console.log(`Tax : ${tax .toFixed(2)}`) 
}