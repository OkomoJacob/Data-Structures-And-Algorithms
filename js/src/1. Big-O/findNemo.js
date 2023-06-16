const nemo = ["memo"];
const largeArray = new Array(100).fill("nemo");

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    } else {
      console.log("NEMO not found");
    }
  }
  let t1 = performance.now();
  console.log("Time == " + (t1 - t0) + " ms");
};

findNemo(largeArray); // O(n) Since the function goes through the input n number of times.

const boxes = [0, 1, 2, 3, 4, 5, 6, 7];

const findFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[2]); // O(1)
};

findFirstTwoBoxes(boxes); 
// O(2): However much the input size increases, the function stops at i[2], Hence O(1). Linear time.
