function generatePermutations(input) {
  const permutations = [];

  function permute(arr, m = []) {
    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }

  permute(input);

  return permutations;
}

// An Improvement of the above code.
function generateBetterPermutations(input) {
  const permutations = [];

  function permuteBetter(arr, start) {
    if (start === arr.length - 1) {
      permutations.push(arr.slice());
    } else {
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap elements
        permute(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Restore original order
      }
    }
  }

  permuteBetter(input, 0);

  return permutations;
}
