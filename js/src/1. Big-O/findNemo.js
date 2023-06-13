const nemo = ["memo"];
const largeArray = new Array(100).fill('nemo');

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
  console.log('Time == ' + (t1 - t0) + ' ms');
};

findNemo(largeArray); // O(n)
