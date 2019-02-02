// from a non empty array filled with numbers
// return the max distance between the index of two "adjacent" number
// 2 numbers are adjacent when there is no other value inbetween them in the array

module.exports = function(A) {
  let result = -1;
  let min = Math.min.apply(null, A);
  let max = Math.max.apply(null, A);

  if (A.length === 2) {
    return 1;
  }

  for (let i = 0; i < A.length; i++) {
    let under = max - min;
    let underIndex = null;
    let over = max - min;
    let overIndex = null;
    for (let x = i + 1; x < A.length; x++) {
      if (A[i] !== max && A[x] > A[i] && A[x] - A[i] < over) {
        over = A[x] - A[i];
        overIndex = x;
      } else if (A[i] !== min && A[x] < A[i] && A[i] - A[x] > under) {
        under = A[i] - A[x];
        underIndex = x;
      }
    }
    if (underIndex && underIndex - i > result) {
      result = Math.abs(underIndex - i);
    }
    if (overIndex && overIndex - i > result) {
      result = Math.abs(overIndex - i);
    }
  }
  console.log("result", result);
  return result;
};
