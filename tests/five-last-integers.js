var assert = require("assert");
var fiveLastInteger = require("../code/five-last-integers");

describe.only("Five Last Integers", function() {
  it("should return the correct result", function() {
    const myArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    const expected =
      "3\n1 3\n4 1 3\n1 4 3\n5 1 4 3\n9 5 1 4 3\n2 9 5 1 4\n6 2 9 5 1\n5 6 2 9 1\n3 5 6 2 9";
    assert.equal(fiveLastInteger(myArr), expected);
  });
  it("should return the correct result", function() {
    const myArr = [1, 1, 1, 1, 2, 1, 2, 3, 1, 2];
    const expected = "1\n1\n1\n1\n2 1\n1 2\n2 1\n3 2 1\n1 3 2\n2 1 3";
    assert.equal(fiveLastInteger(myArr), expected);
  });
});
