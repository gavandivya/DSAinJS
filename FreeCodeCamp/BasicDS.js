/**
 *
Basic Data Structures
Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

you'll learn more about the differences between arrays and objects, and which to use in different situations.
You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.
 */

// Use an Array to Store a Collection of Data
let yourArray = [1, "divya", true, { key: "abc" }, null];

//------------------------------------------------------------------------

// Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
console.log(myArray);//Output - [ 'a', 'e', 'c', 'd' ]

//------------------------------------------------------------------------

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
//Output - [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

//------------------------------------------------------------------------

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Output - [ 'challenge', 'complete' ]

//------------------------------------------------------------------------

// Remove Items Using splice()
//splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
//splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4)
console.log(arr);
//Output - [ 2, 5, 2, 1 ]

//------------------------------------------------------------------------

// Add Items Using splice()
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//output - [ 'DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick' ]
//------------------------------------------------------------------------

// Copy Array Items Using slice()
//Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched.

/**
 * slice() takes only 2 parameters — the first is the index at which to begin extraction,
 * and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
 */

function forecast(arr) {
    let tempArray = arr.slice(2, 4)
    return tempArray;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Output - [ 'warm', 'sunny' ]

// Copy an Array with the Spread Operator


// Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]
    return sentence;
}

console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
// Iterate Through All an Array's Items Using For Loops
// Create complex multi-dimensional arrays
// Add Key-Value Pairs to JavaScript Objects
// Modify an Object Nested Within an Object
// Access Property Names with Bracket Notation
// Use the delete Keyword to Remove Object Properties
// Check if an Object has a Property
// Iterate Through the Keys of an Object with a for...in Statement
// Generate an Array of All Object Keys with Object.keys()
// Modify an Array Stored in an Object
