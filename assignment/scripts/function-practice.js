console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello Noah!"', helloName('Noah'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
}

let result = addNumbers(1, 2);

console.log('Result', result);

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
}

let multiplyResult = multiplyThree(1, 2, 3);

console.log('Result', multiplyResult);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } 
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('example', isPositive(7));
console.log('example', isPositive(-7));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length -1];
  }
}

console.log('Get last', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let findNumber of array) {
    if (findNumber === value) {
      return true;
    } 
  }
  return false;
}

console.log('example', find(7, [1, 2, 3, 4, 5]));
console.log('example', find(1, [1, 2, 3, 4, 5]));
console.log('example', find(10, [1, 2, 3, 4, 5]));
console.log('example', find(2, [1, 2, 3, 4, 5]));
console.log('example', find(5, [1, 2, 3, 4, 5]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 for (let firstLetter of string) {
  if (firstLetter === letter){
    return true;
  }
  break;
 }
 return false;
}

console.log(isFirstLetter('c', 'cat'));
console.log(isFirstLetter('d', 'cat'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let number of array) {
    sum += number;
  }

  // TODO: return the sum
  return sum;
}

console.log('example', sumAll([1, 2, 3, 4]));
console.log('example', sumAll([-1, -2, -3, -4]));
console.log('example', sumAll([-5, 7]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  let positiveNumbers = [];
  for (let numbers of inputArray) {
    if (numbers > 0) {
      positiveNumbers.push(numbers);
    }

  }
  return positiveNumbers;
}

console.log('example', allPositive([1, 2, 3, 4]));
console.log('example', allPositive([-1, -2, -3, -4]));
console.log('example', allPositive([-5, 7]));
console.log('example', allPositive([0]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
