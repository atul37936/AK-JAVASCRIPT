let num = parseInt(process.argv[2]);

if(isNaN(num)){
    console.log(`Invalid input`);
}else if(num < 1 || num > 10){
  console.log(`invalid number`)
}else{
  if(num === 1){
    console.log(`${num} is one`);
  }else if(num === 2){
    console.log(`${num} is two`);
  }else if(num === 3){
    console.log(`${num} is three`);
  }else if(num === 4){
    console.log(`${num} is four`);
  }else if(num === 5){
    console.log(`${num} is five`);
  }else if(num === 6){
    console.log(`${num} is six`);
  }else if(num === 7){
    console.log(`${num} is seven`);
  }else if(num === 8){
    console.log(`${num} is eight`);
  }else if(num === 9){
    console.log(`${num} is nine`);
  }else if(num === 10){
    console.log(`${num} is ten`);
  }else{
    console.log(`${num} check again`);
  }
}

