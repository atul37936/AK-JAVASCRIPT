// Alphabet, digit, or special character.

//  let  user = process.argv[2];

//  if(user>='a' && user<='z' || user>='A' && user<='Z'){
//     console.log(`it is a character Alphabet`)
//  }else if(user>=0 && user<=9) {
//       console.log(`it is a digit`)
//  }else{
//   console.log(`it is special character or symbol`)
//  }

let user = process.argv[2];


if (!user) {
    console.log("Please enter something!");
} else {
    
    let char = user[0];

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        console.log(`${char} is an Alphabet`);
    } 
    
    else if (char >= '0' && char <= '9') {
        console.log(`${char} is a Digit`);
    } 
    else {
        console.log(`${char} is a Special Character or Symbol`);
    }
}