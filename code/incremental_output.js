module.exports = function(input) {
  var text = "";
  var result = "";
  for (var i = 0; i < input.length; i++) {
    text += input.charAt(i);
    result += text + "\n";
  }
  return result.trim("\n");
  //   console.log("%s", result);
};

// You are given a string S.
// Let the length of S be |S|. Print |S| lines. The k-th line should contain the first k characters in S. For example, the first line should contain the first one character in S, and the second line should contain the first two characters in S, and so forth.
// Constraints
// S consists of uppercase English letters.
// 1≤|S|≤10
// Input
// The input is given from Standard Input in the following format:
// S
// Output
// Follow the problem statement and print the expected output in |S| lines.
// Sample Input 1
// Copy
// ABCA
// Sample Output 1
// Copy
// A
// AB
// ABC
// ABCA
// In the first line, print the first one character in S: A.
// In the second line, print the first two characters in S: AB.
// In the third line, print the first three characters in S: ABC.
// In the fourth line, print the first four characters in S: ABCA.
// Sample Input 2:
// SDFLKJKDS
// Sample Output 2:
// S
// SD
// SDF
// SDFL
// SDFLK
// SDFLKJ
// SDFLKJK
// SDFLKJKD
// SDFLKJKDS
