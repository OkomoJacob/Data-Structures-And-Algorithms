# Declarations

person_bio = {
    "name": "John",
    "age": 18,
    "gender": "male",
}

arr = ["Junior", "Senior", "25", person_bio, 32]
length = len(arr)

# Manipulate items in the array.
arr.append("El Classico")
arr.pop()

# Manipulate items in the list
arr.append("orange")  # Equivalent to arr.push("orange") in JavaScript
arr.pop()

# Add person to the beginning of the list and remove it.
person = "John"
arr.insert(0, person)  # Equivalent to arr.unshift(person) in JavaScript
arr.pop(0)  # Equivalent to arr.shift() in JavaScript

# Add items between the list using slice assignment
# arr[2:3] = ['developer']  # Equivalent to arr.splice(2, 1, 'developer') in JavaScript
# print(arr)

'''
## Loops
for i in range(len(arr)):
  print(arr[i])

i = 0
while i < len(arr):
  print(arr[i])
  i += 1
'''

# Inbuilt Loop methods in Python (map, filter, reduce) - These methods are built-in Python functions.
numbers = [1, 2, 3, 4, 5, 6]

# map - Returns a map object, so we convert it to a list to see the output.
mapped_numbers = list(map(lambda item: item, numbers))
print("Mapped: ", mapped_numbers)

# filter - Returns a filter object, so we convert it to a list to see the output.
filtered_numbers = list(filter(lambda item: item > 3, numbers))
print("Filtered: ", filtered_numbers)

# reduce - For reduce, we need to import it from the functools module first.
from functools import reduce
reduced_number = reduce(lambda previously, item: previously + item, numbers)
print(reduced_number)

# some - In Python, we can use any() function for similar functionality.
check_some = any(item < 10 for item in numbers)
print(check_some)

# every - In Python, we can use all() function for similar functionality.
check_every = all(item < 4 for item in numbers)
print(check_every)

# find - In Python, we can use next() function with a generator expression.
find_item = next((item for item in numbers if item > 2), None)
print(find_item)

# findIndex: A callback that returns the index of the element in the array.
find_index = next((index for index, item in enumerate(numbers) if item == 2), None)
print(find_index)

# Spread & Rest Operators - Python does not have exactly the same syntax, but we can achieve similar functionality.

# Combine two arrays using extend()
new_arr = [1, 2, 3, 4, 5, 6]
new_arr2 = [7, 8, 9, 10]
combined_arr = new_arr.copy()
combined_arr.extend(new_arr2)
print(combined_arr)

# Array methods: (2) - Concat - In Python, we can use + operator for concatenation.
new_arr3 = new_arr + new_arr2 + arr
print(new_arr3)

# Splice: In Python, we can use slicing for similar functionality.
new_arr4 = new_arr[2:4]
print(new_arr4)

# .fill(value, start, end) : We can use list comprehension for similar functionality.
fill_arr = [1, 2, 3, 4, 5, 6, 7]
filled_arr = [8 if 3 <= i < len(fill_arr) else item for i, item in enumerate(fill_arr)]
print(filled_arr)

# .flat(level): We can use recursion to flatten nested lists.
flat_example = [1, 2, 3, [[4, 5, 6]]]

def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

flattened_arr = flatten(flat_example)
print("Original:", flattened_arr)

# .reverse(): In Python, we can use slicing to reverse the order of elements in the list.
reversed_arr = flattened_arr[::-1]
print("Reversed:", reversed_arr)

# .sort(): Python has a built-in sort() method for lists.
unsorted_arr = [12, 98, 6, 2, 78, 13, 2]
unsorted_arr.sort()
print(unsorted_arr)