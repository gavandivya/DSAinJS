let arr = [4, 5, 6, 7, 0, 1, 2, 3];

function findMin(nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

console.log(findMin(arr));
