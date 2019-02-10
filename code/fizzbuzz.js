// write a function that print numbers 1 to 50
// but when the number is a multiple of 3 it print "fizz"
//  or when it's a multiple of 5 it prints "buzz"
//  or when it's a multiple of bith 3 & 5 it prints "fizzbuzz"
module.exports = function() {
  for (let i = 1; i <= 50; i++) {
    let myStr = "";
    if (i % 3 === 0) {
      myStr += "fizz";
    }
    if (i % 5 === 0) {
      myStr += "buzz";
    }
    if (myStr) {
      console.log(myStr);
    } else {
      console.log(i);
    }
  }
};
