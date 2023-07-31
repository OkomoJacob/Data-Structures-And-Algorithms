// Declarations
let person = {
  name: "John",
  age: 34,
  gender: "male",
};

const arr = ["Junior", "Senior", "25", person, 30];
const length = arr.length;

// Manipulate items in the array
arr.push("orange");
arr.pop();

// Add person to the begining of the array and remove it.
arr.unshift(person); // O(n) Since the operation loops throughout the array and re-assigns new index to each.
arr.shift();

// Add items between the array using .splice()
arr.splice(2, 1, 'developer') // O(n/2) Since we are looping through half of the elements of the array.
// console.log(arr);

// Loops
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);
  i++;
}

// Inbuilt Loop methods in JS (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5, 6];
numbers.map((item, index, array) => {
  return item;
});

numbers.filter((item, index, array) => {
  return item > 3;
});

numbers.reduce((previously, item, index, array) => {
  return previously + item;
});

numbers.some((previously, item, index, array) => {
  return item < 10;
});

checkEvery = numbers.every((item, index, array) => {
  return item < 4;
});

const findItem = numbers.find((item, index, array) => {
  return item > 2;
});

// findIndex: A callback that returns the index of the of the element in the array.
let findIndex = numbers.findIndex((item) => item === 2)
// console.log(findIndex); // 

// Spread & Rest Operators
let newArr = [1, 2, 3, 4, 5, 6];
let newArr2 = [7, 8, 9, 10];

const combinedArr12 = [];
const combineArrays = (newArr, newArr2) => {
  for (let i = 0; i < newArr.length; i++) {
    combinedArr12.push(newArr[i]);
  }
  for (let j = 0; j < newArr2.length; j++) {
    combinedArr12.push(newArr2[j]);
  }
  // console.log(combinedArr12);
};

// Array methods: (2) - Concat

const newArr3 = newArr.concat(newArr2, arr);
// console.log(newArr3);

// Splice: Return a copy of the specified section of the array.
const newArr4 = newArr.slice(2, 4)
// console.log(newArr4);

// .fill(value, start, end) : Changes all array elements from start to end index to a static value and returns the modified array.
const fillArr = [1,2,3,4,5,6,7]
// console.log(fillArr.fill(8,3)); // Output: 1,2,3,4,8,8,8

// .flat(level): Removes all nested arrays and returns a new flat array

const flatExample = [1, 2, 3, [[4,5, 6]]]
let flattenedArr = flatExample.flat(3)
console.log("Original: " + flattenedArr); // [1, 2, 3, 4,5, 6]

// .reverse(): Reverses the order of the elements in the array.
console.log("Reversed: " + flattenedArr.reverse());

// .sort(): Sort the elements based on the value of the difference off the two adjucent elements.
const unsortedArr = [12, 98, 6, 2, 78, 13, 2,]
console.log(unsortedArr.sort((a, b) => a-b));