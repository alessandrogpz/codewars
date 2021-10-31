const organizeArrayByLength = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

myArray = ["Beg", "I", "Life", "To"];
console.log(organizeArrayByLength(myArray));
