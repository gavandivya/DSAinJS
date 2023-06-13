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


//using kadane 

