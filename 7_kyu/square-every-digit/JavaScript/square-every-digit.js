const squareAllDigits = (int) => {
  /* This function square all individual digits of an int.
     Returns int */

  let intList = int.toString().split("");
  let sqrList = [];

  for (let i = 0; i < intList.length; i++) {
    sqrList.push(intList[i] ** 2);
  }

  return parseInt(sqrList.join(""));
};

const int = 9119;
console.log(squareAllDigits(int));

// BEST PRACTICE
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
