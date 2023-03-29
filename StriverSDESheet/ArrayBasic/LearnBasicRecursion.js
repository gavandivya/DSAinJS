// Print name N times using recursion	

const printName = (num) => {
    if (num == 0 || num == 1) {
        return "Divya";
    }
    console.log("Divya");
    return printName(num - 1)
}

console.log(printName(5));

const printName1 = (i, num) => {
    if (i > num) {
        return;
    }
    console.log("Divya")
    return printName1(i + 1, num)
}

console.log(printName1(1, 5));

/**
 * Time Complexity: O(N) { Since the function is being called n times, and for each function, we have only one printable line that takes O(1) time, so the cumulative time complexity would be O(N) }
Space Complexity: O(N) { In the worst case, the recursion stack space would be full with all the function calls waiting to get completed and that would make it an O(N) recursion stack space }.
 */

// Print 1 to N using recursion

const print1toN = (i, num) => {
    if (i > num) return;
    console.log(i);
    return print1toN(i + 1, num)
}
console.log(print1toN(1, 5));

// Print N to 1 using recursion
function printNto1(num) {
    if (num == 1) return 1;
    console.log(num);
    return printNto1(num - 1);
}
console.log(printNto1(5));

//way2
const printNto11 = (i, num) => {
    if (i < 1) return;
    console.log(i);
    return printNto11(i - 1, num);
}
console.log(printNto11(5, 5));

//way3 backward recursion

const printNto1Backward = (i, num) => {
    if (i > num) return;
    printNto1Backward(i + 1, num);
    console.log(i);
}
console.log(printNto1Backward(1, 5));

// Sum of first N numbers

//way1 functional way
const sumOfN = (n) => {
    if (n == 1) return 1;
    return n + sumOfN(n - 1);
}

console.log(sumOfN(5));


//way2 parameterized way
const sumOfN1 = (i, sum) => {
    if (i < 1) {
        return sum;
    }
    return sumOfN1(i - 1, sum + i);
}

console.log(sumOfN1(5, 0));

//way3 formula way

const sumOfN2 = (N) => {
    return N * (N + 1) / 2;
}

console.log(sumOfN2(5));

// Factorial of N numbers

/**
Example 1:
Input: X = 5
Output: 120
Explanation: 5! = 5*4*3*2*1

Example 2:
Input: X = 3
Output: 6
Explanation: 3!=3*2*1
 */


const factorial = (num) => {
    if (num == 1 || num == 0) {
        return 1;
    }
    return num * factorial(num - 1);

}

console.log(factorial(5));

// Reverse an array

//approach1 -> use different array and traverse the array in backward and sabe it in new array

const reverseArray = (array) => {
    const newArray = [];
    console.log(newArray);
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}
console.log(reverseArray([7, 3, 8, 2, 1]));
/**
 * Time Complexity: O(n), single-pass for reversing array.
Space Complexity: O(n), for the extra array used.
 */

//approach2 -> user same array and take 2 pointers start pointer and end pointer swap and startpointer++ endpointer--
const reverseArray1 = (arr) => {
    let startPointer = 0;
    let endPointer = arr.length - 1;
    while (startPointer < endPointer) {
        let temp = arr[startPointer];
        arr[startPointer] = arr[endPointer];
        arr[endPointer] = temp;
        startPointer++;
        endPointer--;
    }
    return arr;
}

console.log(reverseArray1([6, 5, 4, 3, 2, 1]));

/*
Time Complexity: O(n), single-pass involved.
Space Complexity: O(1)  */

//recursive approach 
const reverseArrayRecursive = (arr, start, end) => {
    if (start >= end) {
        return arr;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    console.log(start, end);
    return reverseArrayRecursive(arr, start + 1, end - 1);
}

console.log(reverseArrayRecursive([1, 2, 3, 4, 5, 6, 7], 0, [1, 2, 3, 4, 5, 6, 7].length - 1));

// Check if a string is palindrome or not using reverse(),split() and join();
const isPalindrome = (str) => {
    if (str == str.split("").reverse().join("")) {
        return true;
    }
    return false;
}

console.log(isPalindrome("abcde"));
console.log(isPalindrome("101101"));

//iterative solution
const isPalindromeIterative = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeIterative("abcde"));
console.log(isPalindromeIterative("110011"));

//recursive solution
const isPalindromeRecursive = (str, left, right) => {
    if (left >= right) {
        return true;
    }
    if (str.charAt(left) != str.charAt(right)) {
        return false;
    }
    return isPalindromeRecursive(str, left + 1, right - 1);
}

console.log(isPalindromeRecursive("abcde", 0, "abcde".length - 1));
console.log(isPalindromeRecursive("110011", 0, "110011".length - 1));
console.log(isPalindromeRecursive("aabbcdcbbaa", 0, "aabbcdcbbaa".length - 1));

const isPalindromeRecursive2 = (index, str) => {
    if (index >= str.length / 2) {
        return true;
    }
    if (str.charAt(index) != str.charAt(str.length - index - 1)) {
        return false;
    }
    return isPalindromeRecursive2(index + 1, str);
}
console.log(isPalindromeRecursive2(0, "110011"));
/**
 * Time Complexity: O(N) { Precisely, O(N/2) as we compare the elements N/2 times and swap them}.
Space Complexity: O(1) { The elements of the given array are swapped in place so no extra space is required}.
 */

//Leetcode

var isPalindromeLeetcode = function (s) {
    let str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    console.log(str);
    // return s.toLowerCase();
    if (str === str.split("").reverse().join("")) {
        return true;
    }
    return false;
};

console.log(isPalindromeLeetcode("A man, a plan, a canal: Panama"));
/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */

// Fibonacci Number
const Fibo = (num) => {
    if (num <= 1) {
        return num;
    }
    return Fibo(num - 1) + Fibo(num - 2);
}

console.log(Fibo(6))

/**
 * Time Complexity: O(2^N) { This problem involves two function calls for each iteration which further expands to 4 function calls and so on which makes worst-case time complexity to be exponential in nature }.
Space Complexity: O(N) { At maximum there could be N function calls waiting in the recursion stack since we need to calculate the Nth Fibonacci number for which we also need to calculate (N-1) Fibonacci numbers before it }.
 */
