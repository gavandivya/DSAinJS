function getLongestSubarray(arr, k) {
  // code here
  let n = arr.length;
  let max = 0;
  let sum = 0;
  let hash = new Map();
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];

    if (sum === k) {
      max = Math.max(max, i + 1);
    }

    let rem = sum - k;

    if (hash.has(rem)) {
      let len = i - hash.get(rem);
      max = Math.max(max, len);
    }

    if (!hash.has(sum)) {
      hash.set(sum, i);
    }
  }
  return max;
}

let arr = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(arr, k);
console.log("The length of the longest subarray is:", len);
