module.exports = function(input) {
  return "nothing";
};

// Problem Statement
// You are given Q integers one by one. We will denote the i-th integer given as Ci.

// Each time an integer is is given, you are asked to print the integers given so far in a line, in order from newest to oldest, with spaces in between.

// To avoid printing too many integers, however, when the same integer is given more than once, only the latest occurrence of that integer should be printed. If there are still more than five integers that should be printed, print only the newest five integers.

// Write a program to perform this process.

// Constraints
// 1≤Q≤100
// 1≤Ci≤100
// Input
// The input is given from Standard Input in the following format:

// Q
// C1
// C2
// :
// CQ
// Output
// Follow the problem statement and print the expected output in Q lines.

// Sample Input 1
// Copy
// 10
// 3
// 1
// 4
// 1
// 5
// 9
// 2
// 6
// 5
// 3
// Sample Output 1
// Copy
// 3
// 1 3
// 4 1 3
// 1 4 3
// 5 1 4 3
// 9 5 1 4 3
// 2 9 5 1 4
// 6 2 9 5 1
// 5 6 2 9 1
// 3 5 6 2 9
// For the fourth line, 1 is given for the second time, but it should be printed only once. The output in this line should be: 1 4 3.
// For the seventh line, the number of the different integers given so far exceeds 5, and thus 3 should not be printed. The output in this line should be: 2 9 5 1 4.
// Sample Input 2
// Copy
// 10
// 1
// 1
// 1
// 1
// 2
// 1
// 2
// 3
// 1
// 2
// Sample Output 2
// Copy
// 1
// 1
// 1
// 1
// 2 1
// 1 2
// 2 1
// 3 2 1
// 1 3 2
// 2 1 3
