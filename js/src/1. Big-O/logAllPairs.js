const boxes = ["a", "b", "c", "d", "e"];
const numArrays = [1, 2, 3, 4, 5];

const logAllPairs = (array) => { // O(n^): Horrible
  for (let i = 0; i < array.length; i++) { // O(n)
    for (let j = 0; j < array.length; j++) { // O(n)
      console.log(array[i], array[j]); 
    }
  }
};

// ES5
function logAllPairsOfArrays(array) { // O(n^2): Horrible
  array.forEach(function (firstBox) {
    array.forEach(function (secondBox) {
      console.log(firstBox, secondBox);
    });
  });
}

console.log("Old JS");
logAllPairs(boxes);

console.log("ES5 JS");
logAllPairsOfArrays(numArrays);