## Array.Splice() Inbulit function
- The array.splice() method is used to modify an array by adding or removing elements at a specified position. 
- It can be used to add elements at a specific index, remove elements from a given index, or even replace elements within the array. 
- The splice() method can be quite versatile as it allows you to modify the original array in place and provides you with control over the changes you want to make.

### Syntax:
```array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
```

### Parameters:

- `start`: The index at which the modification will begin. It can be positive or negative, with negative values counting from the end of the array.
- `deleteCount`: The number of elements to be removed from the array, starting at the start index. 
- If `deleteCount` is 0, no elements will be removed.
item1, item2, ..., itemN: The elements to be added at the start index. If you don't want to add any elements, you can skip this parameter.
- `Return Value`: The splice() method returns an array containing the elements that were removed from the original array. If no elements were removed, an empty array is returned.
- 