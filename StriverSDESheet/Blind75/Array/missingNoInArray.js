const arr = [1, 2, 4, 5];

//TC - O(N), SC - O(1)
function missingNumber(nums) {
  let summation = nums.length * ((nums.length + 1) / 2);
  let currentArraySum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentArraySum = currentArraySum + nums[i];
  }
  return summation - currentArraySum;
}

console.log(missingNumber(arr));

//-----------------------------------------------------

var missingNumber2 = function (nums) {
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i < nums.length; i++) {
    xor1 = xor1 ^ nums[i];
    console.log(xor1);
  }

  for (let i = 1; i <= nums.length; i++) {
    xor2 = xor2 ^ i;
    console.log(xor2);
  }
  return xor1 ^ xor2;
};

console.log(missingNumber2(arr));
