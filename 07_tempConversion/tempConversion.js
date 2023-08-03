const convertToCelsius = function(fahrenheit) {
  const calculateTemp = ((fahrenheit -32) * 5) / 9;
  return Math.round(calculateTemp * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const calculateTemp = ((celsius * 9) / 5) + 32;
  return Math.round(calculateTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
