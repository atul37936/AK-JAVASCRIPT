let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);


if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log(`invalid input`)
}else{
  // discriminant = d
    let d = b * b - 4 * a * c;
    let root = Math.sqrt(d);

    if(d>0){
        let r1 = (-b + root) / (2 * a);
        let r2 = (-b - root) / (2 * a);
        console.log(`Roots are real and distinct: ${r1} and ${r2}`);
    }else if(d === 0){
        let r = -b / (2 * a);
        console.log(`Roots Real and Equal ${r}.`)
    }
    else{
        console.log(`Roots are imaginary.`)
    }
}