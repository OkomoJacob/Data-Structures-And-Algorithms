/*
- Leetcode 189. Medium: Rotate array by k 
- https://leetcode.com/problems/rotate-array/
- Given an array nums, rotate the array to the right by k steps.
- Where K is a non-negative integer.

Example 1:
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

Explanations:
Rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
Rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
Rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]

Example 2:
Input: nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]

Explanations:
Rotate 1 steps to the right: [99, -1, -100, 3]
Rotate 2 steps to the right: [3, 99, -1, -100]
*/

const rotateArray = (nums, k) => {
  let arrSize = nums.length;

  if (k > arrSize) {
    k = k % arrSize;
  }

  const rotatedArray = nums.splice(arrSize - k, size);
};
