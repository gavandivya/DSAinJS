
// Reverse a String
function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

reverseString("hello");
console.log(reverseString("hello"));


//way2

//split() function will turn our string into an array of characters,
//reverse() function, which takes our array of characters and reverses them.
//join('') to put our characters back together into a string.


function reverseString(str) {
    return str
        .split("") //return array
        .reverse() // work on array
        .join(""); //join again
}



//Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

//head recursion

function factorialize(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorialize(num - 1);
}

//tail recursion to optimize the the memory use.

function factorialize(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

//way4 using reduce
function factorialize(num) {
    return num < 0 ? 1 :
        new Array(num)
            .fill(undefined)
            .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);


console.log(factorialize(5)); // Output - 120


// Find the Longest Word in a String
//way1
function findLongestWordLength(str) {
    let newArr = str.split(" ");
    let longest = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > longest) {
            longest = newArr[i].length;
        }
    }
    return longest;
}

//way2
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map((ele) => ele.length));
}


//way3
function findLongestWordLength(str) {
    return str.split(" ").reduce((longest, word) => Math.max(longest, word.length), 0);
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let largest = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        largest = Math.max(...arr[i]);
        newArr.push(largest);
    }
    console.log(newArr);
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
    return str.substring(str.length - target.length) == target ? true : false
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let tempstr = "";
    if (num <= 0) {
        return "";
    }
    else {
        for (let i = 0; i < num; i++) {
            tempstr += str;
        }
    }
    return tempstr;
}

repeatStringNumTimes("abc", 3);
// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.substring(0, num) + "..."
    }
    return str.substring(0, num);
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 2)) //Output A-tisket...

// Finders Keepers
//way1
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

//way2
function findElement(arr, func) {
    return arr.find(func)
}

//way3
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
// Boo who
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}

function booWho(bool) {
    return bool === true || bool === false
}

function booWho(bool) {
    return typeof bool === "boolean";
}


booWho(null);
// Title Case a Sentence
function titleCase(str) {
    return str.split(" ").map((ele) => ele.slice(0, 1).toUpperCase() + ele.slice(1).toLowerCase()).join(" ");
}

titleCase("I'm a little tea pot");

// Slice and Splice


function frankenSplice(arr1, arr2, n) {
    let combinedArray = arr2.slice();
    combinedArray.splice(n, 0, ...arr1);
    return combinedArray;
}

//without spread operator
function frankenSplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
        combinedArrays.splice(n, 0, arr1[i])
        n++
    }
    return combinedArrays
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer
function bouncer(arr) {
    let arr1 = [];
    arr.map((ele) => {
        if (ele) {
            arr1.push(ele)
        }
    });
    return arr1;
}

function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// Where do I Belong
//way1
function getIndexToIns(arr, num) {

    let sortedArray = arr.sort(function (a, b) { return a - b });
    // if (sortedArray.length == 0) {
    //     return 0;
    // }
    // else if (sortedArray[sortedArray.length - 1] <= num) {
    //     return sortedArray.length;
    // }

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

//way2
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

getIndexToIns([2, 20, 10], 19);

/**
 * Passed:getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Passed:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Passed:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Passed:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Passed:getIndexToIns([40, 60], 50) should return 1.
Passed:getIndexToIns([40, 60], 50) should return a number.
Passed:getIndexToIns([3, 10, 5], 3) should return 0.
Passed:getIndexToIns([3, 10, 5], 3) should return a number.
Passed:getIndexToIns([5, 3, 20, 3], 5) should return 2.
Passed:getIndexToIns([5, 3, 20, 3], 5) should return a number.
Passed:getIndexToIns([2, 20, 10], 19) should return 2.
Passed:getIndexToIns([2, 20, 10], 19) should return a number.
Passed:getIndexToIns([2, 5, 10], 15) should return 3.
Passed:getIndexToIns([2, 5, 10], 15) should return a number.
Passed:getIndexToIns([], 1) should return 0.
Passed:getIndexToIns([], 1) should return a number.
 */

// Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    let target = arr[1].toLowerCase();
    let initial = arr[0].toLowerCase();
    for (let i = 0; i < initial.length; i++) {
        if (target.indexOf(initial[i]) < 0) {
            return false;
        }
    }
    return true;
}

function mutation(arr) {
    return arr[1].toLowerCase().split("").every((char) => arr[0].toLowerCase().indexOf(char) !== -1)
}


mutation(["hello", "hey"]);

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/**
Passed:chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Passed:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
 */