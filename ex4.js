const figureName = prompt("rectangle or triangle");
const height = +prompt("enter figure height");
const base = +prompt("enter figure base");

function getSquare() {
  if (height > 0 && base > 0) {
    if (figureName === "triangle") {
      return `Square of the triangle is ${height * base / 2}`;
    } else {
      return `Square of the rectangle is ${height * base}`;
    }
  }

  return "please enter only positives";
} 

const result = getSquare();

console.log(result);