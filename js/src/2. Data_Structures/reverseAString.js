/*Reverse a string ([LeetCode 344](https://leetcode.com/problems/reverse-string/)).

Given a string, like a sentence, it should reverse the individual characters.

Example 1:
Input: s = 'Hi My name is Jacob'
Output: 'bocaJ si eman yM iH' */

let str = "Hi My name is Jacob";

const reverseStringOptimized = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please recheck inputs";
  }

  const reversedString = [];
  totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reversedString.push(str[i])
  }
  return reversedString.join('')
};

console.log("Reversed:", reverseStringBuiltIn(str));
