// Contains Duplicate : Check if a value appears atleast twice

//Problem Statement: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//O(N*N), O(1)
function containsDuplicate1(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(containsDuplicate1(arr));

// O(N*logN), O(1)
function containsDuplicate2(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate2(arr));

// O(N), O(N)
function containsDuplicate3(nums) {
  if (nums.length !== new Set(nums).size) {
    return true;
  }
  return false;
}

console.log(containsDuplicate3(arr));
