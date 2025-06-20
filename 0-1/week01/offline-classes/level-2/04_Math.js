function mathMethods(value) {
  console.log("Original Value:", value);

//   Rounds the number to the nearest integer.
  let rounded = Math.round(value);
  console.log("After round():", rounded);

//   Rounds UP to the nearest greater integer.
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

//   Rounds DOWN to the nearest lower integer.
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

//   Returns a random number between 0 and 1 (excluding 1).
  let randomValue = Math.random();
  console.log("After random():", randomValue);

//   Returns the largest value among the arguments.
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

//   Returns the smallest value.
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

//   Raises the value to the power of 2 (i.e., squares it).
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

//   Returns the square root of the value.
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.46);
mathMethods(9);
mathMethods(25);