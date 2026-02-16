let character = process.argv[2];

if (!character || character.length === 0) {
    console.log("Please enter a character");
    process.exit(1);
}
if (character.length > 1) {
    console.log("Please enter only one character");
    process.exit(1);
}

character = character.toLowerCase();

if (character < 'a' || character > 'z') {
    console.log("Please enter an alphabet (a-z)");
    process.exit(1);
}

switch (character) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
      console.log(`This is vowel`)
    break;
  default:
    console.log(`this is Consonant`)
}