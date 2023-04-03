//way1 brute force approach
const largestUsingSort = (arr) => {
    return arr.sort((a, b) => a - b)[arr.length - 1];
}
console.log(largestUsingSort([4, 78, 32, 56, 99, 1, 101]));
//TC  - O(n)*logN

//way2 optimal
const largest = (arr, n) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(largest([4, 78, 32, 56, 99, 1, 101], 7));
// TC - O(N)