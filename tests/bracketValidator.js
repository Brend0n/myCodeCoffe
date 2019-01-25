var expect = require("chai").expect;
var bracketValidator = require("../code/bracketValidator2");

describe("Bracket Validator", function() {
  it("should return false when the number of openning and closing bracket are not equal", function() {
    expect(bracketValidator("{{[()}}")).to.be.false;
  });
  it("should return true when the number of opening and closing brackets are equal", function() {
    expect(bracketValidator("{()(){{[]}}}")).to.be.true;
  });
  it("should return false if the brackets are not in the good order", function() {
    expect(bracketValidator("{{()[([]()])}}")).to.be.false;
  });
});
