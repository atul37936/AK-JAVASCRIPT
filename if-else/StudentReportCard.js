let Physics = parseFloat(process.argv[2])
let Chemistry = parseFloat(process.argv[3])
let math = parseFloat(process.argv[4])
let Computer = parseFloat(process.argv[5])
let English = parseFloat(process.argv[6])

if(isNaN(Physics) || isNaN(Chemistry) || isNaN(math) || isNaN(Computer) || isNaN(English)){
  console.log("Error: Please enter marks for all 5.");
}else if(Physics > 100 || Chemistry > 100 || math > 100 || Computer > 100 || English > 100 || Physics < 0 || Chemistry < 0 || English < 0 || math < 0 || Computer < 0){
  console.log("Error: Marks should be between 0 and 100.");
}else{

  let TotalMarks = Physics + Chemistry + math + Computer + English;
  let Percentage = (TotalMarks / 500) * 100;
  let StudentGrade;


if (Percentage >= 96 && Percentage <= 100) {
    StudentGrade = "A+";
  } else if (Percentage >= 95) {
    StudentGrade = "A";
  } else if (Percentage >= 90) {
    StudentGrade = "A-";
  } else if (Percentage >= 85) {
    StudentGrade = "B+"; 
  } else if (Percentage >= 80) {
    StudentGrade = "B";
  } else if (Percentage >= 75) {
    StudentGrade = "B-";
  } else if (Percentage >= 70) {
    StudentGrade = "C+";
  } else if (Percentage >= 65) {
    StudentGrade = "C";
  } else if (Percentage >= 60) {
    StudentGrade = "C-";
  } else if (Percentage >= 55) {
    StudentGrade = "D+";
  } else if (Percentage >= 50) {
    StudentGrade = "D";
  } else if (Percentage >= 45) {
    StudentGrade = "D-";
  } else {
    StudentGrade = "Fail";
  }
 
    console.log(`Physics: ${Physics} | Chemistry: ${Chemistry} | Maths: ${math} | Computer: ${Computer} | English: ${English}`);
    console.log(`Total Marks : ${TotalMarks}/500`)
    console.log(`Percentage : ${Percentage.toFixed(2)}%`)
    console.log(`Grade : ${StudentGrade}`);
}

