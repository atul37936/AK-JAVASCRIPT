let StudentGrade = parseFloat(process.argv[2])

if (StudentGrade < 0 || StudentGrade > 100) {
    console.log(`StudentGrade Value error`)
}else if(StudentGrade >= 96 && StudentGrade <= 100){
    console.log(`${StudentGrade} is A+`)
}else if(StudentGrade >= 91 && StudentGrade <= 95){
    console.log(`${StudentGrade} is A`)
}if(StudentGrade >= 86 && StudentGrade <= 90){
     console.log(`${StudentGrade} is A-`)
}else if(StudentGrade >= 81 && StudentGrade <= 85){
     console.log(`${StudentGrade} is B+`)
}else if(StudentGrade >= 76 && StudentGrade <= 80){
     console.log(`${StudentGrade} is B`)
}else if(StudentGrade >= 71 && StudentGrade <= 75){
     console.log(`${StudentGrade} is B-`)
}else if(StudentGrade >=66 && StudentGrade <= 70){
     console.log(`${StudentGrade} is C+`)
}else if(StudentGrade >=61 && StudentGrade <= 65){
     console.log(`${StudentGrade} is C`)
}else if(StudentGrade >=56 && StudentGrade <= 60){
     console.log(`${StudentGrade} is C-`)
}else if(StudentGrade >=51 && StudentGrade <= 55){
     console.log(`${StudentGrade} is D+`)
}else if(StudentGrade >=46 && StudentGrade <= 50){
     console.log(`${StudentGrade} is D`)
}else if(StudentGrade >=41 && StudentGrade <= 45){
     console.log(`${StudentGrade} is D-`)
}else if(StudentGrade >=0 && StudentGrade <= 40){
     console.log(`${StudentGrade} is Fail`)
}

