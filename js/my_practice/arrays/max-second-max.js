/*
Question: Second largest element in an array.
Explanation: Given an array (Arr) of size N, print second largest distinct element from the array.

Input: [13, 45,45, 23, 12, 2, 16]
Output: 23

Input: [21, 3]
Output: 3

Naive/Bruteforce Solution: 
Sort the array in descending order, then return arr[1].
Edge case: Duplicating elements at arr[0, 1, 2].
E.g [5, 5, 4, 2]: Output will be 5, which is fals.
*/

const arr1 = [13, 45, "6", 12, 2, 16];
const dupArr = [13, 12, 13];
const sortNums = (num1, num2) => {
  return num2 - num1;
};

sortArr = dupArr.sort(sortNums);
// console.log(sortArr[1]);

/*Better solution: Big O: O(nlogn)
Use Sets, which returns a non-duplicating array elemts. */
const arrWithDuplicates = [13, 45, 45, 34, 8, "35", 12, 12, 2, 16];

const secondLargest = (arr) => {
  const uniquelySorted = Array.from(new Set(arr)).sort((a, b) => b - a); // O(nlogn)

  if (uniquelySorted.length >= 2) {
    return uniquelySorted[1];
  } else {
    return "Provided array is too short";
  }
};

// console.log("Second largest element:", secondLargest(arrWithDuplicates));

/*
Optimized Approach:
Using our custm JS functions
*/

const arr = [13, 45, 45, 34, 8, "35", 12, 12, 2, 16];
const secondLargestOptimized = (arr) => {
  let largest = arr[0];
  let secondLargest = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== largest) {
      if (secondLargest === null || arr[i] > secondLargest) {
        if (arr[i] > largest) {
          secondLargest = largest;
          largest = arr[i];
        } else {
          secondLargest = arr[i];
        }
      }
    }
  }
  return secondLargest;
};

console.log("Second largest element:", secondLargestOptimized(arr));
