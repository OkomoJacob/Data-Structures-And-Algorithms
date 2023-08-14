/*
Question:  Truncate text
A function that checks the length of a given string and if it surpasses the specified maximum length, it replaces the end with ellipses (...) so the length matches the maximum length

Exmaple:  
Input: str = "Truncate all after me, we won't appear"
Output: str = "Truncate all after me ..."
*/

let str = "Truncate all after me, we won't appear";
const truncateSentenceInBuilt = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str
};

console.log(truncateSentenceInBuilt(str, 21));


const truncateSentence = () => {}