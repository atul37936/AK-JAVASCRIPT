// Three-digit number and multiple of 2 and 5.

let num = parseInt(process.argv[2])

if (isNaN(num)){
  console.log(`Input Invalid`)
}else if(num<100||num>999){
  console.log(`Number ${num} is not a three-digit number`)
}else{
  if(num%2==0 && num%5==0){
    console.log(`Number ${num} is a three-digit number and divisible by both 2 and 5`)
  }else{
    console.log(`Number ${num} is a three-digit number but not divisible by both 2 and 5`)
  }
}