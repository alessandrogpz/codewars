function findAllFactors(initNumber) {
  /* Find all possible factors of a given number
   Returns an array with all possible factors */

  let factor = 2;
  let allFactorsList = [];

  while (factor * factor <= initNumber) {
    if (initNumber % factor === 0) {
      allFactorsList.push(factor);
      if (Math.floor(initNumber / factor) != factor) {
        allFactorsList.push(Math.floor(initNumber / factor));
      }
    }
    factor++;
  }
  return allFactorsList.sort(function (a, b) {
    return a - b;
  });
}

console.log(findAllFactors(4024563456));
