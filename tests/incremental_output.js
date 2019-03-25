var assert = require("assert");
var incrementalOutput = require("../code/incremental_output");

describe.only("incremental output", function() {
  it("should return the correct result", function() {
    assert.equal(incrementalOutput("ABCA"), "A\nABABC\nABCA");
  });
  it("should return the correct string with 4 rows", function() {
    assert.equal(
      zigzagWriting(
        "SDFLKJKDS",
        "S\nSD\nSDF\nSDFL\nSDFLK\nSDFLKJ\nSDFLKJK\nSDFLKJKD\nSDFLKJKDS"
      )
    );
  });
});
