module.exports = function(input) {
  const match = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  const opener = {
    "{": "{",
    "(": "(",
    "[": "["
  };
  const closer = {
    "}": "}",
    ")": ")",
    "]": "]"
  };
  const stack = [];
  for (const char of input) {
    if (opener[char]) {
      stack.push(char);
    } else if (closer[char]) {
      if (char == match[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
