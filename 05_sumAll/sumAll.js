const sumAll = function(firstNumber, secondNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
  if (firstNumber < 0 || secondNumber < 0) return "ERROR";
  if (firstNumber < secondNumber) {
    let total = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        total += i;
    }
    return total;
  } else if (firstNumber > secondNumber) {
    let total = 0;
    for (let i = secondNumber; i <= firstNumber; i++) {
        total += i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
