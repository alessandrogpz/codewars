const sameEnd = (a, b) => {
  // slice the end portion of the "a" starting from the differecne in length of "a" and "b"
  aEnd = a.slice(a.length - b.length);

  return aEnd === b;
};

console.log(sameEnd("abcdef", "ef"));

// BEST PRACTICES

function solution(str, ending) {
  return str.endsWith(ending);
}
