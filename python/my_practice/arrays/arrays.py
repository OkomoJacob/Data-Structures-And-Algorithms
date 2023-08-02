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
