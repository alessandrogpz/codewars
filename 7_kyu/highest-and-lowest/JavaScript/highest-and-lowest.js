//highAndLow("1 2 3 4 5");  // return "5 1"
const highAndLow = (allNumbers) => {
  /* This function returns a 2 digits string of the biggest and lowest (respectively) numbers of a string of numbers. */

  allNumbersList = allNumbers.split(" ");
  let maxMIn = [allNumbersList[0], allNumbersList[0]];

  for (let i = 0; i < allNumbersList.length; i++) {
    if (parseInt(allNumbersList[i]) > parseInt(maxMIn[0])) {
      maxMIn[0] = allNumbersList[i];
    }
    if (parseInt(allNumbersList[i]) < parseInt(maxMIn[1])) {
      maxMIn[1] = allNumbersList[i];
    }
  }

  maxMIn = maxMIn.join(" ");
  return maxMIn;
};

const allNumbers =
  "-1115 -2246 -2673 -2628 -2059 -3297 -3214 -2242 -2264 -2785 -1991 -2935 -1925 -3507 -1440 -448 -1410 -3450 -2264 -2125 -3282";

console.log(highAndLow(allNumbers));

// A BETTER WAY OF DOING THIS

function highAndLow(numbers) {
  var arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}
