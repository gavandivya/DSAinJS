/**
Input: s = ”abcabcbb”
Output: 3
Explanation: The answer is abc with length of 3.
 * 
 **/

function longestSubtr() {
  let str = "abcdeabcdddd";
  let hash = new Array(256).fill(false);
  let s = "";
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (hash[str.charAt(j)] === true) {
        break;
      } else {
        s = s + str[j];
        max = Math.max(max, j - i + 1);
        hash[str.charAt(j)] = true;
      }
    }
  }
  return max;
}

console.log(longestSubtr());
