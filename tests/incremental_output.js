var assert = require("assert");
var incrementalOutput = require("../code/incremental_output");

describe.only("incremental output", function() {
  it("should return the correct result", function() {
    assert.equal(incrementalOutput("ABCA"), "A\nAB\nABC\nABCA");
  });
  it("should return the correct result", function() {
    assert.equal(
      incrementalOutput("SDFLKJKDS"),
      "S\nSD\nSDF\nSDFL\nSDFLK\nSDFLKJ\nSDFLKJK\nSDFLKJKD\nSDFLKJKDS"
    );
  });
});
