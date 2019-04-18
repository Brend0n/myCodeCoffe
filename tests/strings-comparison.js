var assert = require("assert");
var stringComparison = require("../code/strings-comparison");

describe.only("Strings Comparison", function() {
  it("should return 2 for the 'aabb' string", function() {
    assert.equal(stringComparison("aabb"), 2);
  });
  it("should return 6 for the 'abc' string", function() {
    assert.equal(stringComparison("abc"), 6);
  });
  it("should return 0 for the 'aaab' string", function() {
    assert.equal(stringComparison("aaab"), 0);
  });
  it("should return 384 for the 'aaabbccd' string", function() {
    assert.equal(stringComparison("aaabbccd"), 384);
  });
  it("should return 459042011 for the 'abcdefghijklmnopqrstuvwxyz' string", function() {
    assert.equal(stringComparison("abcdefghijklmnopqrstuvwxyz"), 459042011);
  });
});
