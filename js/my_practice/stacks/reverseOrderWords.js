/* Question
Given an input string s, reverse the order of the words:
Input: "the sky is blue" -->> "blue is sky the"
Input: "   good morning  " -->> "morning good"
Input: "hello      is world" -->> "world is hello"

NB: 
Trim any trailing or in-between whitespace and keep only whitespace.

Approach:
- If the input string is empty, return the empty string
- Split the sentence with white spaces
- Create a new stack & copy the previously splited string into it.
- Iterate through the new stack & pop the last element
- Add it to a new string & add a white space infront of it
*/

const reverseWords = (s) => {
  let splitString = s.split(" ");
  const stack = [];

  for (let i of splitString) {
    stack.push(i);
  }

  let finalString = " ";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finalString += " " + current;
    }
  }

  return finalString.trim();
};

console.log(reverseWords("the  sky is blue"));
