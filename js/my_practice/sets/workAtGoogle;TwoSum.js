/* Given a collection of numbers, find a matching pair that is equal to a target sum. 
    Example: [1, 2, 3, 9] targetSum = 8
    Example: [1, 2, 4, 4] targetSum = 8
*/

/*
Solution 1: Brute Force
    - Loop through the array and find a matching sum pair (Nested For Loop.)
*/

const hasPairsWithSum = (arr, sum) => {
  const len = arr.length;

  for (var i = 0; i < len-1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
};

/*
Solution 1: Brute Force
    - 
*/

const hasPairsWithSumBetter = (arr, sum) => {
  const mySet = new Set();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }

  return false;
};
