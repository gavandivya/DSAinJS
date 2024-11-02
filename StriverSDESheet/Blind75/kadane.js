//TC - O(N2), where N = size of the array.
//SC - O(1) as we are not using any extra space.

function maxSubarraySum(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      maxi = Math.max(maxi, sum); // getting the maximum
    }
  }

  return maxi;
}

//TC - O(N), where N = size of the array.
//SC - O(1) as we are not using any extra space.

function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 9];
let n = arr.length;
let maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);
console.log("The maximum subarray sum is: " + maxSubArray(arr));
