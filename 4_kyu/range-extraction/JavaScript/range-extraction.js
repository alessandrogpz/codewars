const solution = (list) => {
  /* This function takes a list of ordered integers as parameter and returns the all the sequential numbers in range in a string 
  E.g. the list [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]  would return as "-6,-3-1,3-5,7-11,14,15,17-20" */

  let listRange = [];
  let currentInitRange;
  let currentEngRange;
  let runningRange = false;

  for (let i = 0; i < list.length; i++) {
    // Checks the current item plus the next 2 and compare to see if they are sequential.
    if (list[i] === list[i + 1] - 1 && list[i + 1] - 1 === list[i + 2] - 2) {
      // Check if it is a running range or an initial range.
      // If its an initial range (runningRange === false) it sets runningRange to 'true' and assign the initRange and endRange
      if (runningRange === false) {
        currentInitRange = list[i];
        currentEngRange = list[i + 2];
        runningRange = true;
        // If its a running range (runningRange === true) it sets only the endRange
      } else {
        currentEngRange = list[i + 2];
      }
      // Checks if the last iteration was a part of a running range (runningRange === true)
      /* If yes, it chages runningRange to 'false', 
         advances the index for the next iteration by one (leaving the other increase for the for loop itself to change) 
        and push the numbers found in a range to listRange */
    } else if (runningRange === true) {
      runningRange = false;
      i += 1;
      listRange.push(`${currentInitRange}-${currentEngRange}`);
      // If not, only pushes the current number to listRange
    } else {
      listRange.push(list[i]);
    }
  }

  // Returns listRange in a string format
  return listRange.join();
};

const list = [
  -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
];
console.log(solution(list));

// ----------------------------------------------------------------------------------------------------------
// BEST PRACTICES
function solution_2(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(",")
    : range[0] + "-" + range[range.length - 1];
}

console.log(solution_2(list));
