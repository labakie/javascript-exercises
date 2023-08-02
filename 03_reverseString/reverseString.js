const reverseString = function(word) {
  const arrWord = word.split("");
  let reversedWord = "";
  for (let i = 1; i <= arrWord.length; i++) {
    reversedWord += arrWord[arrWord.length - i];
  }
  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
