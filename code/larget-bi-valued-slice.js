/*
An array consisting of N integers is given
A bi-valued slice of this array is consisting 
of at most 2 different numbers
Return the size of the largest bi-valued slice
ex: [5, 4, 4, 5, 0, 12]  => 4 (since the slice from index 0 to 3 is bi-valued)
*/
module.exports = function solution(array) {
  if (array.length <= 2) {
    //special cases
    return array.length;
  }
  let result = 0;
  let temp1 = array[0];
  let temp2 = array[1];
  let counter = 2; // smallest slice possible
  let tempCount = 0;
  for (let i = 2; i < array.length; i++) {
    if (temp1 === temp2) {
      counter++;
      if (temp2 !== array[i]) {
        temp2 = array[i];
      }
    } else if (array[i] === temp1 || array[i] === temp2) {
      counter++;
      if (temp2 === array[i]) {
        tempCount++;
      }
    } else {
      if (counter > result) {
        result = counter;
      }
      temp1 = temp2;
      temp2 = array[i];
      counter = 2 + tempCount;
      tempCount = 0;
    }
  }
  if (counter > result) {
    result = counter;
  }
  return result;
};
