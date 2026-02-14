let bookReturnDay = parseInt(process.argv[2]);

if(isNaN(bookReturnDay) || bookReturnDay<=0){
   console.log(`invalid input`)
}else{
  let fine = 0;

  if(bookReturnDay>= 1 && bookReturnDay<=5){
    fine = bookReturnDay * 2;
  }else if(bookReturnDay>=6 && bookReturnDay<=10){
      fine = bookReturnDay * 5;
  }else{
    fine = bookReturnDay * 10;
  }

  console.log(`Book Returing Day is : ${bookReturnDay}`)
  console.log(`Your fine is : ${fine}`)
}