// In this question we gona use two method slice and splice

  let colors = ["Red", "Green", "Blue", "Yellow"];
  let copy = colors.slice(2,4)
  console.log(copy)
  colors.splice(1,2, "Purple")
  console.log(colors)