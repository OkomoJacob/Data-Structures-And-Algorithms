// Sample Bubble Sort
function bubbleSort(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      let swapped = false; // Flag to track if any swaps were made in the current pass
  
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true; // Set the flag to true if a swap occurred
        }
      }
  
      if (!swapped) {
        // If no swaps were made in the current pass, the array is already sorted
        break;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [1, 2, 3, 4, 5, 8];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
  