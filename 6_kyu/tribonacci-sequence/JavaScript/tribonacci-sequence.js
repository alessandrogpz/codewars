const tribonacci = (signature, n) => {
  let sequence = [];

  // Adds signature to sequence
  if (n === 0) {
    return [];
  } else if (n === 1) {
    sequence.push(signature[0]);
  } else if (n === 2) {
    sequence.push(signature[0]);
    sequence.push(signature[1]);
  } else {
    sequence.push(signature[0]);
    sequence.push(signature[1]);
    sequence.push(signature[2]);
  }

  // Calculate the next "n" numbers
  for (let i = 0; i < n - signature.length; i++) {
    sequence.push(sequence[i] + sequence[i + 1] + sequence[i + 2]);
  }

  return sequence;
};

const signature = [1, 2, 3];
const n = 1;
console.log(tribonacci(signature, n));

// BEST PRACTICES

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
