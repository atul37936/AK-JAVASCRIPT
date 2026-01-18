// Eligible to vote.

let age = parseInt(process.argv[2]);

if (age >= 18){
    console.log(`${age} is eligible to vote`);
}else{
    console.log(`${age} is not eligible to vote`);
}

