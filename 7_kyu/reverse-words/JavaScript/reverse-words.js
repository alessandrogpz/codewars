const reverseWords = (string) => {
  /* This program reverts the letters in a word. 
       It preserves the word order and extra spaces in between words */

  let myWrodsList = string.split(" ");

  for (let i = 0; i < myWrodsList.length; i++) {
    myWrodsList[i] = myWrodsList[i].split("").reverse().join("");
  }

  return myWrodsList.join(" ");
};

const myWords = "elbuod  secaps";
console.log(reverseWords(myWords));

// BEST PRACTICES

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
