// w = weight (kg) and h = height(meters)
let w = parseFloat(process.argv[2]);
let h = parseFloat(process.argv[3]);

if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0){
  console.log(`invalid input`)
}else{
  let bmi = w / (h*h);
  console.log(`Your BMI is ${bmi.toFixed(2)}`);
  if(bmi<=18.59){
      console.log(`${bmi} is underweight`)
  }else if(bmi >= 18.6 && bmi <= 24.9){
      console.log(`${bmi} is normal`)
  }else if(bmi >= 25 && bmi <= 29.9){
    console.log(`${bmi} is overweight`)
  }else{
    console.log(`${bmi} is obese`)
  }
}