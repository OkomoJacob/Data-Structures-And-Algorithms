/* Given two arrays, create a function that let's the user know (true/false) 
whether the 2 arrays contain any common items.
Example:
    - const array1 = ['a', 'b', 'c', 'x']
    - const array2 = ['z', 'i', 'y']
    
    - Output: false
    
    - const array1 = ['a', 'b', 'c', 'x']
    - const array2 = ['z', 'x', 'y']
    
    - Output: true
 */

/*
1st Approach: Brute force, which will give O(a*b) || O(n^2) time complexity.
    - Loop through each item in array1 and in any iteration, compare the each value with array2.
    - E.g: is ("a" === "z"?), ("a" === "x"?), ("a" === "m"?)
    - Return
*/
const array1 = ["a", "b", "y", "x"];
const array2 = ["z", "x", "m"];

const containsSimilarItem = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsSimilarItem(array1, array2));

/*
2nd Approach: Using Hash tables (Objects): Which will give O(a*b) || O(n^2) time complexity.
    - Loop through each item in array1 and create object where properties === items in the array.
    
    Example:
        array1 = obj {
          b: true
          y: true
          x: true
        }
    - Loop through each item in array2 and check if item in the second array exist in the created object1.
    
    Example:
        array2[index] === obj.properties
    - Return
*/
const arr1 = ["a", "b", "y", "x"];
const arr2 = ["z", "x", "m"];
