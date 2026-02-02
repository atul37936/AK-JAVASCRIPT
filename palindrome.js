//  Palindrome for 3-digit number.
let num = parseInt(process.argv[2])

if(isNaN(num)){
   console.log("Input Invalid")
   exit.process(1);
}else if(num>100 && num<999){
   let lastDigit = num % 10;
   let firstDigit = Math.floor(num/100);
    if(firstDigit === lastDigit){
        console.log(`${num} is a Palindrome Number.`)
    }else{
        console.log(`${num} is not a Palindrome Number.`)
    }
}
   




