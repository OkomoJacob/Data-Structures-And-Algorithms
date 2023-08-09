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

console.log(string.replace("Now", "string"));

const newStr = string.concat(" and make some coffee!");

// String.trim(): Removes any proceeding & Trainling whitespaces around the string.

const string2 = "       I'm learning strings    "
console.log(string2.trim())

// Searching: 