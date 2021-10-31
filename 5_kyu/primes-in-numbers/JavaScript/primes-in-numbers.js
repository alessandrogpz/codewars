const primeFactors = (initNumber) => {
  let allPrimeFactorsList = [];

  // Check is a number is prime or not
  const isPrime = (num) => {
    // Return "true" if it is or "false" if it's not

    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  // Find all possible prime factors of a given number
  const findAllFactors = (initNumber) => {
    /* Stores a sorted ascending array with all possible prime factors in allPrimesFactorList 
       Returns allPrimesFactorList 
    */

    let factor = 1;

    while (factor * factor <= initNumber) {
      if (initNumber % factor === 0 && isPrime(factor)) {
        allPrimeFactorsList.push(factor);
        initNumber /= factor;
        factor = 1; // reset factor value
      }
      factor++;
    }

    allPrimeFactorsList.push(initNumber); // Add the last prime number

    return allPrimeFactorsList.sort(function (a, b) {
      return a - b;
    });
  };

  // Prints the raw prime list of the chossen number.
  // console.log(findAllFactors(initNumber));

  // The following code prepares allPrimeFacctorsList for the correct output format.
  let numberInPrimeDecomp = [];
  let count = 0;

  const uniquePrimes = Array.from(new Set(findAllFactors(initNumber))); // Create a unique list of the prime values in allPrimeFactorsList

  // Loop through unique prime values
  for (let i = 0; i < uniquePrimes.length; i++) {
    // Count the number of occurances the current prime in uniquePrimes exists in allPrimeFactorsList
    allPrimeFactorsList.forEach((v) => v === uniquePrimes[i] && count++);

    /* Push the output with base prime and power value (repeated occurances of the same prime) to listOutput. 
       If power is 1, it only prints the prime */
    if (count > 1) {
      numberInPrimeDecomp.push(`(${uniquePrimes[i]}**${count})`);
    } else {
      numberInPrimeDecomp.push(`(${uniquePrimes[i]})`);
    }

    count = 0;
  }
  return numberInPrimeDecomp.join(""); // Returns a string from the numberInPrimeDecomp values
};

const n = 7775460;
console.log(primeFactors(n));

// Best Practices
// ------------------------------------------------------------------------------------------------------

function primeFactorsSolutionB(n) {
  for (var i = 2, res = "", f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
  }
  return res || "(" + n + ")";
}

const b = 7775460;
console.log(primeFactorsSolutionB(b));
