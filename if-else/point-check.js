// Point lies on x-axis, y-axis, or origin.

// Quadrant 1: x$bhi positive (+), y bhi positive (+)   
// Quadrant 2: x negative (-), y positive (+)
// Quadrant 3: x negative (-), y negative (-)
// Quadrant 4: x positive (+), y negative (-)

let y = parseFloat(process.argv[2])
let x = parseFloat(process.argv[3])

if(isNaN(x) || isNaN(y)){
  console.log(`input Invalid`)
  process.exit(1);
}else if(x === 0 && y === 0){
  console.log(`(${x},${y}) is in origin`)
}else if(y === 0){
  console.log(`(${x},${y}) so it is x-axis`)
}else if(x===0){
  console.log(`(${x},${y}) so it is y-axis`)
}else{
   if(x>0 && y>0){
    console.log(`Point (${x},${y}) is in Quadrant 1 (+,+)`);
   }else if(x<0 && y>0){
        console.log(`Point (${x},${y}) is in Quadrant 2 (-,+)`);
   }else if(x < 0 && y < 0){
        console.log(`Point (${x},${y}) is in Quadrant 3 (-,-)`);
   }else{
    console.log(`Point (${x},${y}) is in Quadrant 4 (+,-)`);
   }
}