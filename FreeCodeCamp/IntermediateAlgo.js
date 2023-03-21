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
 * Passed:diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
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

