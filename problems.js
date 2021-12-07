// write a function that says hello

const hello = (name) => {
  return `Hello ${name}!`;
};

// write a function that adds two numbers together
const sum = (a, b) => {
  return a + b;
};

// write a function that will calculate the area of a circle, given the radius
const areaOfCircle = (radius) => {
  return radius * radius * Math.PI;
};

// write a function that reverses a number
function numberReverse(number) {
  return parseFloat(number.toString().split('').reverse().join(''));
}

module.exports = {
  hello,
  sum,
  areaOfCircle,
  numberReverse,
};
