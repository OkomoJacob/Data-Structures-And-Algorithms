/*
LeetCode 88 (Easy): https://leetcode.com/problems/merge-sorted-array/

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6].

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0, 3, 4, 31], m = 4, nums2 = [4, 6, 30], n = 3
Output: [0, 3, 4, 4, 6, 30, 31]
Explanation: The arrays we are merging are [0, 3, 4, 31] and [4, 6, 30].
The result of the merge is [0, 3, 4, 4, 6, 30, 31].
*/

const nums1 = [0, 3, 4,  31];
const nums2 = [4, 6, 30];

const mergeSortedArraysInbuilt = (nums1, nums2) => {
  if (
    !nums1.every((num) => typeof num === "number") ||
    !nums2.every((num) => typeof num === "number")
  ) {
    console.log("Can only operate on numerical inputs");
    return [];
  } else return nums1.concat(nums2).sort((a, b) => a - b);
};

// console.log(mergeSortedArraysInbuilt(nums1, nums2));

////

const mergeSortedArraysOptimized = (nums1, nums2) => {
  if (!nums1.every(num => typeof num === "number") || !nums2.every(num => typeof num === "number")) {
    console.log("Can only operate on numerical inputs");
    return [];
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    const array1Item = nums1[i];
    const array2Item = nums2[j];

    if (array1Item === undefined) {
      mergedArray.push(array2Item);
      j++;
    } else if (array2Item === undefined) {
      mergedArray.push(array1Item);
      i++;
    } else if (array1Item < array2Item) {
      mergedArray.push(array1Item);
      i++;
    } else {
      mergedArray.push(array2Item);
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeSortedArraysOptimized(nums1, nums2));


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1; // Index for nums1
  let j = n - 1; // Index for nums2
  let k = m + n - 1; // Index for merged result
  
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  
  // If there are remaining elements in nums2, copy them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
