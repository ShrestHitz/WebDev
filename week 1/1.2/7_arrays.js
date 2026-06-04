// 1. Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS

function getEvenNumbers(numbers){
  let evenNumbers = numbers.filter((number) => number % 2 === 0);

  return evenNumbers;
}

/*
    // using without filter method
    // define a new array to store even numbers
    let evenNumbers = [];

    // iterate over the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        // check if the number is even
        if (numbers[i] % 2 === 0) {
            // add the number to the `evenNumbers` array
            evenNumbers.push(numbers[i]);
        }
    }

    // returns a new array with only even values
    return evenNumbers;
}
    */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers));