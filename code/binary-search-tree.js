module.exports = function(bst) {
  let result = true;
  let stack = [];

  recurse(bst);

  function recurse(node, min, max) {
    if (stack.includes(node.value)) {
      result = false;
    }
    stack.push(node.value);
    if (node.right && node.value >= node.right.value) {
      result = false;
    }
    if (min && node.value < min) {
      result = false;
    }
    if (max && node.value > max) {
      result = false;
    }
    if (node.left && node.value <= node.left.value) {
      result = false;
    }
    if (node.left) {
      recurse(node.left, min, node.value);
    }
    if (node.right) {
      recurse(node.right, node.value, max);
    }
  }
  return result;
};
