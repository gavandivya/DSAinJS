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

// ---------------------------------------------------------------------------
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

/** //leetcode solution
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */
var reverse = function (x) {
    let rev = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (rev > 2 ** 31 - 1) return 0;
    return x > 0 ? rev : -1 * rev;
};

// ---------------------------------------------------------------------------
// Check Palindrome
const isPalindrome = (num) => {
    if (num === reverseNumber(num)) {
        return "Palindrome"
    }
    return "Not a palindrome number"
}
console.log(isPalindrome(101));
console.log(isPalindrome(1234));
/**Time Complexity: O(logN) for reversing N digits of input integer.
Space Complexity: O(1) */

// ---------------------------------------------------------------------------
// GCD Or HCF

//way1
const hcf = (num1, num2) => {
    let hcf = 1;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            hcf = i
        }
    }
    return hcf;
}

console.log("GCD / HCF is ", hcf(4, 8));
/**Time Complexity: O(N).
Space Complexity: O(1). */

//way2
/**Gcd is the greatest number which is divided by both a and b.If a number is divided by both a and b, it is should be divided by (a-b) and b as well. */

const gcd = (num1, num2) => {
    if (num2 == 0) {
        return num1;
    }
    return gcd(num2, num1 % num2)
}

console.log("GCD / HCF is ", gcd(4, 8));
/**Time Complexity: O(logɸmin(a,b)), where ɸ is 1.61.
Space Complexity: O(1). */
//formula -gcd(a,b) =  gcd(b, a % b)

// ---------------------------------------------------------------------------
// Armstrong Numbers

const isArmstrong = (no) => {
    let digits = Math.floor(Math.log10(no)) + 1;
    let sum = 0;
    let rem = 0;
    let num = no;
    while (num != 0) {
        rem = num % 10;
        num = Math.floor(num / 10);
        sum += Math.pow(rem, digits)
    }
    if (sum === no) {
        return "isArmstrong";
    }
    return "Not an armstrong"
}

console.log(isArmstrong(153));

/**Time Complexity: O(n) where n is the number of digits since we need to traverse every digit and add digits raised to power no. of digits to sum.
Space Complexity: O(1) since no extra space is required */


// ---------------------------------------------------------------------------
// Print all Divisors
/**
 * Example 1:
Input: n = 36
Output: 1 2 3 4 6 9 12 18 36
Explanation: All the divisors of 36 are printed.
 */

const divisors = (num) => {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr.join(" ");
}
console.log(divisors(36))


//way2
const divisors1 = (num) => {
    let arr = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            arr.push(i);
            if (i !== num / i) arr.push(num / i);
        }
    }
    return arr.sort((a, b) => a - b).join(" ");
}
console.log(divisors1(36))


// ---------------------------------------------------------------------------
// Check for Prime


/**
Example 1:
Input: N = 3
Output: Prime
Explanation: 3 is a prime number

Example 2:
Input: N = 26
Output: Non-Prime
Explanation: 26 is not prime number
 */

const isPrime = (no) => {
    if (no == 1 || no == 0) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(no); i++) {
        if (no % i == 0) {
            return false;
        }
    }
    return true;

}

const checkForN = (num) => {
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            console.log("Prime - ", i)
        }
        else {
            console.log("Not Prime - ", i)
        }
    }
}

checkForN(11);


const isPrimeDigit = (no) => {
    if (no == 1 || no == 0) {
        return `${no} is not a Prime`;
    }

    for (let i = 2; i <= Math.sqrt(no); i++) {
        if (no % i == 0) {
            return `${no} is not a prime number`;
        }
    }
    return `${no} is a prime number`;;

}

console.log(isPrimeDigit(11));

/**Time Complexity: O(√n)
Space Complexity: O(1) */
