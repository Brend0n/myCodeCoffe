var assert = require("assert");
var zigzagWriting = require("../code/zigzag-writing");

describe.only("prime number", function() {
  it("should return the correct string with 3 rows", function() {
    assert.equal(zigzagWriting("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
  });
  it("should return the correct string with 4 rows", function() {
    assert.equal(zigzagWriting("PAYPALISHIRING", 3), "PINALSIGYAHRPI");
  });
});
