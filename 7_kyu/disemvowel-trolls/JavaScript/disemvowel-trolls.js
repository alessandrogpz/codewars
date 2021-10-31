function disemvowel(str) {
  /* This function iterate over a string and removes all vowels contained in it.
    There are no empty spaces lefts when the vowel is removed. */

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "This is a test";

console.log(disemvowel(str));
