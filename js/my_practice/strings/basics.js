// Creating new strings
const string = "Now string 1"

// Accessing Characters: Use string[i]
let str = "This string 2"
string.charAt(3)

for (const item of str) {
    // console.log(item[0]);
}

// Modifying strings: JS Strings are immutable.
string[3] = "v"; // Cannot do this!
string.replace("Now", "string");

const newStr = string.concat(" and make some coffee!");

// String.trim(): Removes any proceeding & Trainling whitespaces around the string.

const string2 = "       I'm lexarning strings    "
string2.trim()

// Searching: 
string2.indexOf("x");

const string3 = "I'm good at Data Structures & Algorithms in JavaScript"

// Extracting substring
string3.substring(20, 25);
string3.slice(20, 27);

// Convert case
const strToBeConverted = "This is the string TO BE ConVertEd"
strToBeConverted.toUpperCase(); // Also: .toUpperCase()

const objToTeConverted = {name: "Jane Doe"}
console.log(JSON.stringify(objToTeConverted));

// JS ASCII Codes
console.log(string3);
console.log(string3.charCodeAt(0));
console.log(String.fromCharCode(72));


// Strings Comparisons
const stringComp1 = "This is the very first string we'll compare"
const stringComp2 = "This is the very second string we'll compare"

console.log(stringComp1.localeCompare(stringComp2));
console.log(stringComp1.includes("is the"))

// Splitting & Joining Strings
arr1ToJoin = ["Join", "these", "words"]
console.log(stringComp1.split("s"));
console.log(arr1ToJoin.join(' and '));
