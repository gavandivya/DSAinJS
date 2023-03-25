/**
 * Intermediate Algorithm Scripting
 * The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
 * We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
 */
function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = max * (max + 1) / 2;
    if (min != 1) {
        let minsum = min * (min - 1) / 2;
        sum = sum - minsum;
    }
    return sum;
}

const sumAll = arr => {
    const startNum = arr[0];
    const endNum = arr[1];

    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};

sumAll([1, 4]);

/**
 *Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.  */

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/**
Passed:diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Passed:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Passed:["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
Passed:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Passed:["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Passed:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Passed:["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Passed:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Passed:[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Passed:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Passed:[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Passed:[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Passed:[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Passed:[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Passed:[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
 */


/**
 * Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
 */

//Array.from() - The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

//way1
function destroyer(arr, ...args) {
    let newArr = [...args];
    return arr.filter((e) => !newArr.includes(e));
}

//way2
function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !valsToRemove.includes(val);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/**
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    console.log(str.toLowerCase().split(" ").join("-"))
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");

/**
Passed:spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Passed:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
Passed:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
Passed:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
Passed:spinalCase("AllThe-small Things") should return the string all-the-small-things.
 */

// Wherefore art thou
// Pig Latin
// Search and Replace

function myReplace(str, before, after) {
    if (before.split('')[0] == before.slice(0, 1).toUpperCase()) {
        after = after.slice(0, 1).toUpperCase() + after.slice(1)
    }
    else {
        after = after.slice(0, 1).toLowerCase() + after.slice(1)
    }

    return str.replace(before, after);
}


function myReplace(str, before, after) {
    var index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    str = str.replace(before, after);

    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// DNA Pairing

// Missing letters

/**Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1)
        }

    }
    return undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
// Sorted Union
// Convert HTML Entities
// Sum All Odd Fibonacci Numbers
// Sum All Primes
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum;
}

const isPrime = (no) => {
    let c = 2;
    while (c * c <= no) {
        if (no % c == 0) {
            return false;
        }
        c++;
    }
    return true;
}

console.log(sumPrimes(10));
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085


// Smallest Common Multiple
// Drop it
// Steamroller
// Binary Agents
// Everything Be True
// Arguments Optional
// Make a Person
// Map the Debris