const string = "Stop Spinning my Words";

const spinWords = (string) => {
  const myStringArray = string.split(" "); // Splits the string into a list of its words and store in myStringArray
  let finalList = new Array();

  // Iterate through words in myStringArray
  for (i = 0; i < myStringArray.length; i++) {
    // Chech if current word > 4 letters
    if (myStringArray[i].length <= 4) {
      // Push current word to finalList
      finalList.push(myStringArray[i]);
    } else {
      // Split current word into a list of chars, reverse the order of this list and then join it back again into one word
      const reversedWord = myStringArray[i].split("").reverse().join("");
      // Push current reversed word to finalList
      finalList.push(reversedWord);
    }
  }

  // Joins all itens in finalList into a string
  finalList = finalList.join(" ");
  return finalList;
};

console.log(spinWords(string));
