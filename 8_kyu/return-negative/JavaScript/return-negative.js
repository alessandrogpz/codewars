const returnNegative = (number) => {
  /* This function returns a negative value if inputted with a positive number, 
        otherwise it returns the number unchanged */

  if (number < 0) {
    return number;
  } else if (number > 0) {
    return -number;
  } else {
    return 0;
  }
};

console.log(returnNegative(0));

// BETTER WAY

function makeNegative(num) {
  return num < 0 ? num : -num;
}
