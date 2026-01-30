// Number within range (1-100) and even.

let num = parseInt(process.argv[2])

if(isNaN(num)){
  console.log(`Input Invalid`)
}else if(num<=0  || num>=100){
    console.log(`Number ${num} is out of range`)
} else if(num>=1 && num<=100 && num%2==0){
  console.log(`Number ${num} is within range 1-100 and even`)
}else(
   console.log(`Number ${num} is within range 1-100 but not even`)
)