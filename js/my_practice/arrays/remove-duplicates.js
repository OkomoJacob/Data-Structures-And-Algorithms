/* 
- Leetcode 26: Easy; Remove duplicates from a sorted array.
- https://leetcode.com/problems/remove-duplicates-from-sorted-array/

- Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
- The relative order of the elements should be kept the same. 
- Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
- The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Explanation: 
- Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
- It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Explanation: 
- Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
- It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const nums = [1, 1, 2, 2, 2, 4, 4, 4, 5, 5, 7, 7, 9, 9, 9, 10, 11];

const removeDuplicatesSplice = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums.length;
};

// console.log(removeDuplicatesSplice(nums));

const removeDuplicatesIncludes = (nums) => { // Not perfect, some test cases fail.
  let uniqueArray = [];

  for (let i of nums) {
    if (!uniqueArray.includes(i)) {
      uniqueArray.push(i);
    }
  }

  return uniqueArray;
};
// console.log(removeDuplicatesIncludes(nums));

// Using 2-Pointer Approach.
const removeDuplicatesTwoPointer = (nums) => {
  if (nums.length === 0) return 0;
  let ref = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[ref] !== nums[j]) {
      ref++;
      nums[ref] = nums[j];
    }
  }
  
  return ref + 1;
};

// console.log(removeDuplicatesTwoPointer(nums));

function removeDuplicates(nums) {
  if (nums.length === 0) {
      return 0; // Empty array, no unique elements
  }
  
  let k = 1; // Initialize the count of unique elements
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[k] = nums[i]; // Update nums array in-place
          k++; // Increment the count of unique elements
      }
  }
  
  return k; // Return the count of unique elements
}

console.log(removeDuplicates(nums));