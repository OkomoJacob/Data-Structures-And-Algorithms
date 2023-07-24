### Loop Methods

- JavaScript provides several built-in loop methods that can be used to iterate over arrays and other iterable objects. Some of the commonly used loop callBack methods are:

1. `array.forEach()`: Executes a provided function once for each element in an array.
2. `map()`: Creates a new array with the results of calling a provided function on every element in an array.
3. `filter()`: Creates a new array with all elements that pass a certain condition defined by a provided function.
4. `reduce()`: Applies a provided function to reduce an array to a single value by iterating over each element.
5. `for...of`: A loop statement introduced in ES6 that iterates over iterable objects such as arrays, strings, maps, sets, etc.
6. `for...in`: A loop statement used to iterate over the properties of an object. It enumerates the enumerable properties of an object, including inherited ones.
7. `.find()`: Returns the first element in an array that satisfies a provided testing function. It stops the loop once the condition is met and returns the value. If no element satisfies the condition, it returns undefined.
8. `.some()`: Checks if at least one element in an array satisfies a provided testing function. It stops the loop once a satisfying element is found and returns true. If no element satisfies the condition, it returns false.
9. `.every()`: Checks if all elements in an array satisfy a provided testing function. It iterates through the entire array and returns true if all elements satisfy the condition. If any element fails the condition, it returns false.
    
- These loop methods offer different ways to iterate over arrays and objects, providing flexibility and convenience in handling data. 
- Each method has its specific purpose, and you can choose the one that suits your needs based on what you want to accomplish in your code.
1.  `array.conact(array2)`: Concatenates (joins together in a series/chain). Combines two or more arrays. This method returns a new array without modifying any existing arrays. e.g

```
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [7, 8, 9, 10, 12]
    arr1ConcatArr2 = arr1.concat(arr2)
    
    Result: [1, 2, 3, 4, 5, 7, 8, 9, 10,12]
```