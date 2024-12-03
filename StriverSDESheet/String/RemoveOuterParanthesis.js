var removeOuterParentheses = function (s) {
  let count = 0;
  let ans = "";
  for (let ch of s) {
    if (ch === "(") {
      if (count) {
        ans = ans + ch;
      }
      count++;
    } else {
      count--;
      if (count) {
        ans = ans + ch;
      }
    }
  }
  return ans;
};

console.log(removeOuterParentheses("(()())(())"));
