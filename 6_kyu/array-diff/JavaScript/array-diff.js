const arrayDiff = (a, b) => {
  /* This function removes all occurences of "b" list values in list "a"
    It returns the same list "a", but spliced. */

  for (let i = 0; i < a.length; i++) {
    console.log("List A: ", a[i]);
    if (b.includes(a[i])) {
      a.splice(i, 1);
      i--;
    }
  }

  return a;
};
let a = [1, 2, 2, 3, 558, 5, 6, 7, 7, 9, 10, 65, 4];
let b = [2, 3, 4, 4, 5, 98, 46, 3, 10];

console.log(arrayDiff(a, b));

// BEST SOLUTION
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
