let choice = parseInt(process.argv[2])

if(isNaN(choice) || choice<1 || choice>5){
   console.log(`invalid Choice , Please take input from 1 to 5`)
   process.exit(1);
}

console.log(`Menu :`)
console.log(`1. Circle`)
console.log(`2. Rectangle`)
console.log(`3. Triangle`)
console.log(`4. Square`)
console.log(`5. Exit`)

switch (choice) {
  case 1:
     let r = parseFloat(process.argv[3])
     if(isNaN(r) || r<=0){
        console.log(`invalid input`)
        process.exit(1);
     }else{
       let areaOfCircle = Math.PI * r * r;
       console.log(`The radius is ${r} and area of Circle is ${areaOfCircle.toFixed(2)}`) 
     }
    break;
  case 2:
     let l = parseFloat(process.argv[3])
      let b = parseFloat(process.argv[4])
      if(isNaN(l) || isNaN(b) || l<=0 || b<=0){
        console.log(`invalid input`)
        process.exit(1);
      }else{
        let areaOfRectangle = l * b;
        console.log(`The length is ${l} and breadth is ${b} and area of Rectangle is ${areaOfRectangle}`)
      }
    break;
  case 3:
      let base = parseFloat(process.argv[3])
      let h = parseFloat(process.argv[4])
      if(isNaN(base) || isNaN(h) || base<=0 || h<=0){
        console.log(`invalid input`)
        process.exit(1);
      }else{
        let areaOfTriangle = 0.5 * base * h;
        console.log(`The base is ${base} and height is ${h} and area of Triangle is ${areaOfTriangle}`)
      }
    break;
  case 4:
    let s = parseFloat(process.argv[3])
    if(isNaN(s) || s<=0){
        console.log(`invalid input`)
        process.exit(1);
      }else{
        let areaOfSquare = s * s;
        console.log(`The side is ${s} and area of Square is ${areaOfSquare}`)
      }
    break;
  case 5:
      console.log(`Thank you for using our Shape Area Calculator`)
    break;
  default:
    console.log(`unexpected error`)
}