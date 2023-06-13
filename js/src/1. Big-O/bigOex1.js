// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1) since time is constant
  a = 50 + 3; // 0(1)

  for (let i = 0; i < input.length; i++) {
    // O(n): The larger the input array, the complex the operation.
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChallenge();
// Based on the above analysis, the overall time complexity of the function is Big 0 (3 + 4n), i.e O(n) where n represents the size of the input array.