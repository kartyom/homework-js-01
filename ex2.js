const firstNumber = +prompt("first number");
const secondNumber = +prompt("second number");
const thirdNumber = +prompt("third number");

function getAscendingOrder() {
   
  
  if (firstNumber >= secondNumber && firstNumber <= thirdNumber) {
    return `${secondNumber}, ${firstNumber}, ${thirdNumber}`;
  } else if (firstNumber >= thirdNumber && secondNumber <= thirdNumber) {
    return `${secondNumer}, ${thirdNumber}, ${firstNumber}`;
  } else if (firstNumber >= secondNumber && secondNumber >= thirdNumber) {
    return `${thirdNumber}, ${secondNumber}, ${firstNumber}`;
  } else if (firstNumber <= thirdNumber && secondNumber >= thirdNumber) {
    return `${firstNumber}, ${thirdNumber}, ${secondNumber}`;
  } else if (firstNumber >= secondNumber && firstNumber <= thirdNumber) {
    return `${thirdNumber}, ${firstNumber}, ${secondNumber}`;
  }

  return `${firstNumber}, ${secondNumber}, ${thirdNumber}`;
}

const result = getAscendingOrder();

console.log(result);