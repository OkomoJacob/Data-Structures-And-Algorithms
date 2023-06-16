const printAllNumbersThenAllPairs = (numbers) => {
  console.log("These are the numbers:");
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log("And these are their sums:");
  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
};

printAllNumbersThenAllPairs([1, 2, 3, 4, 5]);
