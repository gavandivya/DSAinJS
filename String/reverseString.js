//Reverse String

/**
Input: "the sky is blue"
Output: "blue is sky the"

Input: "  hello world!  "
Output: "world! hello"
Explanation: Reversed string should not contain leading or trailing spaces.
 */

const string = "Divya is best";
let temp = "";

for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string.charAt(i));
    temp = temp + string.charAt(i);
}

console.log(temp);