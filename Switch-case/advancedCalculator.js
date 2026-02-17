let a = parseFloat(process.argv[2]);
let op = process.argv[3];
let b = parseFloat(process.argv[4]);

if(isNaN(a) || !op){
  console.log(`invalid input`);
  process.exit(1);
}

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
  case "%":
      result = a % b;
    break;
  case "**":
  case "^":
      //  result = a**b;
       result = Math.pow(a , b);
    break;
  case "sqrt":
      if(a < 0){
      console.log(`Error: Negative number!`);
       process.exit(1);
    }
       result = Math.sqrt(a);
    break;
  default:
    console.log(`invalid Operation`)
    process.exit(1);
 }

    if (op === "sqrt") {
    console.log(`sqrt(${a}) = ${result}`);
} else {
    console.log(`${a} ${op} ${b} = ${result}`);
}

// node advancedCalculator.js 24 sqrt
// sqrt(24) = 4.898979485566356

//  node advancedCalculator.js 34 ** 2
// 34 ** 2 = 1156

// node advancedCalculator.js 34 ^ 2
// 34 ^ 2 = 1156