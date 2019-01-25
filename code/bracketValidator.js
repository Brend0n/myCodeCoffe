module.exports = function(input) {
  console.log("start", input);
  const dict = {
    "{": 0,
    "}": 0,
    "(": 0,
    ")": 0,
    "[": 0,
    "]": 0
  };
  const pair = {
    "{}": "{}",
    "[]": "[]",
    "()": "()"
  };

  // Remove all characters that are not brackets
  let text = "";
  for (let char of input) {
    if (dict[char] !== undefined) {
      dict[char] = dict[char] + 1;
      text += char;
    }
  }

  let result;
  removePair(text);
  console.log("End", result);
  return result;

  function removePair(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (pair[text[i].concat(text[i + 1])]) {
        i++;
      } else {
        newText += text[i];
      }
    }
    // there is no more bracket to parse
    if (newText.length == 0) {
      result = true;
    } else {
      // there is more text to parse
      if (text.length > newText.length) {
        console.log("text", text, "newText", newText);
        console.log("recursion");
        removePair(newText);
      } else {
        result = false;
      }
    }
  }
};
