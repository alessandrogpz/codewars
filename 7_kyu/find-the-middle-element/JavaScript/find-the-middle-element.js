const middleElement = (inputArray) => {
  /* Returns the index of the middle value element in an array
   E.g. [0, 10, 5] returns "2", since its the index of value "5", which is the middle value in between "0" and "10" */

  if (
    (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]) ||
    (inputArray[0] > inputArray[2] && inputArray[0] < inputArray[1])
  ) {
    return inputArray.indexOf(inputArray[0]);
  } else if (
    (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]) ||
    (inputArray[1] > inputArray[2] && inputArray[1] < inputArray[0])
  ) {
    return inputArray.indexOf(inputArray[1]);
  } else {
    return inputArray.indexOf(inputArray[2]);
  }
};

myArray = [2, 3, 1];
console.log(middleElement(myArray));

// BEST PRACTICES

const middleElement = (a) => {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
};
