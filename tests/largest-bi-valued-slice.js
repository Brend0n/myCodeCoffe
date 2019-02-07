var assert = require("assert");
var largestBiValueSlice = require("../code/larget-bi-valued-slice");

describe.only("find the largest bi valued slice in an array", function() {
  it("should return 4", function() {
    // the function should return 4 since
    // (0,3) is the indexes of a slice containing only 4 and 5
    assert.equal(largestBiValueSlice([5, 4, 4, 5, 0, 12]), 4);
  });
});
