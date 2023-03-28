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

// Check if a string is palindrome or not
// Fibonacci Number