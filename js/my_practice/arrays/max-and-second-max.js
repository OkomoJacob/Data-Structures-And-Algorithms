/*
Question: Second largest element in an array.
Explanation: Given an array (Arr) of size N, print second largest distinct element from the array.

Input: [13, 45, 23, 12, 2, 16]
Output: 23

Input: [21, 3]
Output: 3

Naive/Bruteforce Solution: 
Sort the array in descending order, then return arr[1].
Edge case: Duplicating elements at arr[0, 1, 2].
E.g [5, 5, 4, 2]: Output will be 5, which is fals.
*/

const arr = [13, 45, '6', 12, 2, 16];
const dupArr = [13, 12, 13];
const sortNums = (num1, num2) => {
  return num2 - num1;
};

sortArr = dupArr.sort(sortNums);
console.log(sortArr[1]);

/*Optimized solution: 
Use Sets, which returns a non-duplicating array elemts. */