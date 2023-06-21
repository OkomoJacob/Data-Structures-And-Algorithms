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

const sumReduce = numbers.some((previously, item, index, array) => {
  return item;
});

console.log(sumReduce);
