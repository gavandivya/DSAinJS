const arr = [1, 2, 4, 5, 7, 7];
//way1

const SortedArray2Loops = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (arr[j] < arr[i]) {
                return true;
            }
        }
        return false;
    }
}

console.log(SortedArray2Loops(arr));
/*
*Time Complexity: O(N^2)
Space Complexity: O(1)
 */

//way2
const SortedArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;


}

console.log(SortedArray(arr));

/**
Time Complexity: O(N)
Space Complexity: O(1)
 */