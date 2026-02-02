let num = parseFloat(process.argv[2])

if(isNaN(num) || num<0){
    console.log(" Invalid input ")
}else{
  let root = Math.sqrt(num);

  if(Number.isInteger(root)){
    console.log(`${num} is a Perfect Square of ${root}.`)
  }else{
    console.log(`${num} is not a Perfect Square ${root.toFixed(2)}.`)
  }
}