let num = parseFloat(process.argv[2])

if(isNaN(num)){
  console.log(`Input Invalid`)
  process.exit(1);
}else if(num>0){
  if(num%2===0){
    console.log(`${num} is a Positive Even Number`)
  }else{
    console.log(`${num} is a Positive odd Number`)
  }
}else if(num<0){
    if(num%2===0){
      console.log(`${num} is a Negative Even Number`)
    }else{
      console.log(`${num} is a Negative odd Number`)
    }
}else{
  console.log(`${num} is a nuteral(zero)`)
}
  
