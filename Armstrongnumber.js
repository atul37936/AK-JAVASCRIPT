let num = parseInt(process.argv[2])
let temp = num
let sum =  0

while (temp>0) {
  let digit = temp % 10
  sum += digit ** 3
  temp = Math.floor(temp / 10)
}
if (sum === num) {
    console.log(num + " It is Armstrong number.");
} else {
    console.log(num + " It is not Armstrong number.");
}

// a number that is the sum of its own digits, each raised to the power of the number of digits in the number itself.
