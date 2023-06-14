//find out the largest sum of subarray from the array

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = array[0];
//brute force approach

for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
        currentSum = currentSum + array[j];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
}
console.log(maxSum);
//Time Complexity - O(n^2)
//Space Complexity - O(1)


//using kadane algorithm

let maxSum1 = array[0];
let current = 0;
//[-2, 1, -3, 4, -1, 2, 1, -5, 4];
for (let i = 0; i < array.length; i++) {
    current = current + array[i];
    if (current > maxSum1) {
        maxSum1 = current;
    }
    if (current < 0) {
        current = 0;
    }
}

console.log(maxSum1);
//Time Complexity - O(n)
//Space Complexity - O(1)