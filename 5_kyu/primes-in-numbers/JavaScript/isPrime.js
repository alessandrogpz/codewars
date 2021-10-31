const isPrime = (num) => {
  /* Check if a number is prime or not.
     Return "true" if it is or "false" if it's not */

  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

console.log(isPrime(7840));
