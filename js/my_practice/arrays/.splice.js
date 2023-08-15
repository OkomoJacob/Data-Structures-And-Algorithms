let fruits = ["apple", "banana", "orange", "mango"];

// Adding elements using splice
let addedSplice = fruits.splice(1, 0, "kiwi", "pear"); // Add two items at index 1, remove 0 from the initial array.
// console.log("Added by splice", fruits);

// Removing elements using splice
let removedElements = fruits.splice(3, 2);
// console.log("Removed by splice", removedElements);
// console.log("Resulting after remove by splice", fruits);

//Replacing elements using splice
console.log("Initial fruits", fruits);
let replacedFruits = fruits.splice(2, 1, 'grape', 'cherry'); // Add two items at index 2, remove 0 from the initial

console.log("Fruits after replacing", fruits);