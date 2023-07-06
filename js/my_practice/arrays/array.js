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
arr.unshift(person);
arr.shift();

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

// console.log(findItem);

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
  console.log(combinedArr12);
};

// combineArrays(newArr, newArr2);

// Array methods: (2) - Concat

const newArr3 = newArr.concat(newArr2, arr);
console.log(newArr3);