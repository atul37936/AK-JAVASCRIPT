let a = parseFloat(process.argv[2]);
let op = process.argv[3];
let b = parseFloat(process.argv[4]);


if(isNaN(a) || isNaN(b) || !op){
  console.log(`invalid input`);
}else{
  let result;
switch (op) {
  case "+":
     result = a + b;
    break;
  case "-":
     result = a - b;
    break;
  case "*":
     result = a * b;
    break;
  case "/":
    if(b === 0){
      console.log(`Division by zero is not allowed`);
       process.exit(1);
    }
     result = a / b;
    break;

  default:
    console.log(`invalid Operation`)
}
       console.log(`${a} ${op} ${b} = ${result}`)
}