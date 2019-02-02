var expect = require("chai").expect;
var maxDistanceValidator = require("../code/max-distance-adjacent");

describe.only("Find Max Distance between adjacent number ", function() {
  it("should return 4", function() {
    assert(maxDistanceValidator([0, 3, 3, 7, 5, 3, 11, 1]), 4);
  });
});
