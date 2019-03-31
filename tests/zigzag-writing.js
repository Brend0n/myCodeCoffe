var assert = require("assert");
var zigzagWriting = require("../code/zigzag-writing");

describe("Zigzag writing", function() {
  it("should return the correct string with 3 rows", function() {
    assert.equal(zigzagWriting("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
  });
  it("should return the correct string with 4 rows", function() {
    assert.equal(zigzagWriting("PAYPALISHIRING", 3), "PINALSIGYAHRPI");
  });
});
