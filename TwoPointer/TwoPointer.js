// For two sum using two pointer approach array needs to be sorted
const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      console.log(arr[left], arr[right]);
      return;
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  console.log("Not found");
};

twoSum([1, 4, 7, 9, 12, 14], 19);
//Output - 7 12
