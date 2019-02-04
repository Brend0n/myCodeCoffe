var assert = require("assert");
var interestingTimeCount = require("../code/interesting-time");

describe("count the number of 'interesting' time within a time range", function() {
  it("should return 1", function() {
    assert.equal(interestingTimeCount("15:15:00", "15:15:12"), 1); // 15:15:11
  });

  it("should return 3", function() {
    assert.equal(interestingTimeCount("22:22:21", "22:22:23"), 3); // 22:22:21, 22:22:22, 22:22:23
  });
});
