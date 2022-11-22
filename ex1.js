const integer = +prompt("enter positive integer");

function getNewNumber() {
  let number = integer;
  const lastDigit = number % 10;
  
  if (lastDigit > 0) {
    number = (number - lastDigit) / 10;
    return `${lastDigit}${number}`;
  }

  return number;
}

const result = getNewNumber();

console.log(result);