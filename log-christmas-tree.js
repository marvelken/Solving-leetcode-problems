function christmasTree(width, height) {
  let star = "★";
  for (i = 0; i < width; i++) {
    console.log(" ".repeat(width - i) + star.repeat(2 * i + 1));
  }
  //for the base
  for (i = 0; i < 3; i++) {
    console.log(" ".repeat(Number(height))+ star.repeat(height))
  }
  
}

christmasTree(11,7);
