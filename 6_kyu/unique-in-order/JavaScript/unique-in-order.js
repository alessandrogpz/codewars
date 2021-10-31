const uniqueInOrder = (checkOrder) => {
  /* This function tests if there are no repeated letters at its vicinity 
     If there are, those letters are removed.
     It returns a list */

  let newOrder = new Array();
  let lastPushed = "";

  for (let i = 0; i < checkOrder.length; i++) {
    if (lastPushed === checkOrder[i]) {
      continue;
    } else {
      newOrder.push(checkOrder[i]);
      lastPushed = checkOrder[i];
    }
  }
  return newOrder;
};

const testString = "AAAABBBCCDAABBB";
const testList = [1, 2, 2, 3, 3];

console.log(uniqueInOrder(testList));
