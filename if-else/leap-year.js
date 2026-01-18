// leap year

  let num = parseInt(process.argv[2]);

  if ((num % 4 == 0 && num % 100 !== 0) || (num % 400 == 0)) {
      console.log(` ${num} is leap year`)
  }else{
      console.log(` ${num} is not leap year`)
  }