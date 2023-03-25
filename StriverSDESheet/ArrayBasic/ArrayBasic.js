//Know Basic Maths

// Count Digits		
const countDigits = (num) => {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(19877));
/**Time Complexity: O (n) where n is the number of digits in the given integer
Space Complexity: O(1) */

//way2
const countDigits2 = (num) => {
    return num.toString().length;
}
console.log(countDigits2(19877));
/**Time Complexity: O (1) 
Space Complexity: O(1) */

//way3
const countDigits3 = (num) => {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
console.log(countDigits3(19877));
/**Time Complexity: O (1)
Space Complexity: O(1) */



// Reverse a Number
const reverseNumber = (num) => {
    let reverse = 0;
    while (num != 0) {
        let rem = num % 10;
        reverse = reverse * 10 + rem;
        num = Math.floor(num / 10);
    }
    return reverse;
}

console.log(reverseNumber(1234))
/**Time Complexity: O(n), where n is the length of the given number
Space Complexity: O(1) */


//way2
const reverseNumber2 = (num) => {
    return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber2(1234))

// Check Palindrome

const isPalindrome = (num) => {
    if (num === reverseNumber(num)) {
        return "Palindrome"
    }
    return "Not a palindrome number"
}

console.log(isPalindrome(101));
console.log(isPalindrome(1234));
// GCD Or HCF
// Armstrong Numbers
// Print all Divisors
// Check for Prime