
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
    if (num <= 1) {
        return 1;
    }
    return num * factorialize(num - 1);
}

//head recursion
function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
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
// Boo who
// Title Case a Sentence
// Slice and Splice
// Falsy Bouncer
// Where do I Belong
// Mutations
// Chunky Monkey
