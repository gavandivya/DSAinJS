//Two Sum : Check if a pair with given sum exists in Array

//brute force approach TC -  O(N2) SC- O(1)

const arr = [2, 6, 5, 9, 11];
const target = 14;

function twosum1() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i], arr[j], "Found at", i, j);
        return [arr[i], arr[j]];
      }
    }
  }
  return "Not Found";
}

console.log(twosum1());

/**
 * using object and checking if target - number exist in obj
 * TC - O(N)
 * SC - O(N)
 **/
function twosum2() {
  let obj = {};
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      return `Found ${arr[i]} ${target - arr[i]} at ${i} ${
        obj[target - arr[i]]
      }`;
    }
    obj[arr[i]] = i;
  }
  return "Not Found";
}

console.log(twosum2());

/** using 2 pointer approach but need to sort first
 * TC - 0(N * logN)
 * SC - O(1)**/

function twosum3() {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return "Not Found";
}

console.log(twosum3());
