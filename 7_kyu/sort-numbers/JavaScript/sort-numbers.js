const sortNumberts = (nums) => {
  /* Returns a sorted array of numbers
   If the array is of type "null" or an empty array, returns "[]" */

  if (nums === null || (Array.isArray(nums) && nums.length === 0)) {
    return [];
  }
  return nums.sort(function (a, b) {
    return a - b;
  });
};

const nums = [1, 10, 2, 3, 5];

console.log(sortNumberts(nums));
