var rearrangeArray = function (nums) {
  const len = nums.length;
  let even = 0;
  let odd = 1;
  let numArr = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      numArr[even] = nums[i];
      even = even + 2;
    } else {
      numArr[odd] = nums[i];
      odd = odd + 2;
    }
  }

  return numArr;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4, 5, 6, -4]));
