module.exports = function(input1, input2) {};

// E - 連続しない文字列 / Non-repeating String
// Time limit : 5sec / Memory limit : 256MB

// Score : 100 points

// Problem Statement
// You are given a string S.

// Among the strings that can be obtained by arbitrarily permuting the characters in S,
// find the number of the different strings such that no two adjacent characters are the same.

// Since the answer will be extremely large, print the answer modulo 1,000,000,007.

// Constraints
// S consists of lowercase English letters.
// 1≤|S|≤26
// Partial Scores
// 30 points will be awarded for passing the test set satisfying 1≤|S|≤8.
// Additional 30 points will be awarded for passing the test set satisfying 1≤|S|≤16.
// Input
// The input is given from Standard Input in the following format:

// S
// Output
// Follow the problem statement and print the expected output.

// Sample Input 1
// Copy
// aabb
// Sample Output 1
// Copy
// 2
// There are two strings that satisfies the condition: abab and baba.
// Sample Input 2
// Copy
// abc
// Sample Output 2
// Copy
// 6
// All permutations of the given string satisfy the condition, and thus the answer is 6.
// Sample Input 3
// Copy
// aaab
// Sample Output 3
// Copy
// 0
// In any permutation of aaab there will be two adjacent a, and thus the answer is 0.
// Sample Input 4
// Copy
// aaabbccd
// Sample Output 4
// Copy
// 384
// Sample Input 5
// Copy
// abcdefghijklmnopqrstuvwxyz
// Sample Output 5
// Copy
// 459042011
// This input is not included in the test sets for the partial scores.
// The answer, 403291461126605635584000000, should be printed modulo 1,000,000,007.
