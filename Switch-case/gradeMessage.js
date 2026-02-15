let grade = process.argv[2];
if(!grade || grade.length !== 1){
  console.log("Please enter a single grade letter (A, B, C, D, or F)");
    process.exit(1);
}
 let upGrade = grade.toUpperCase();
switch (upGrade) {
  case "A":
      console.log(`Excellent`)
    break;
  case "B":
      console.log(`Good`)
    break;
  case "C":
      console.log(`Average`)
    break;
  case "D":
      console.log(`Poor`)
    break;
  case "F":
      console.log(`Fail`)
    break;
  default:
    console.log(`Invalid grade. Please enter A, B, C, D, or F.`)
}