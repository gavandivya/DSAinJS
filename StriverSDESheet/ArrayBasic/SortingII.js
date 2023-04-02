// //Merge Sort
const arr = [35, 24, 83, 51, 11, 3, 35, 24, 1, 6, 7, 22, 89, 54];
const n = arr.length;
const mergePseudo = (array, low, mid, high) => {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }
        else {
            temp.push(arr[right]);
            right++;
        }
    }

    //If there are elements in the left sub arrray then add it to the result
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    //If there are elements in the right sub array then add it to the result
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        array[i] = temp[i - low];
    }
    return array;
}

//pseudo code
const mergeSortPseudo = (array, low, high) => {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSortPseudo(array, low, mid);
    mergeSortPseudo(array, mid + 1, high);
    return mergePseudo(array, low, mid, high);
}
// console.log(mergeSortPseudo(arr, 0, arr.length - 1));

//-----------------------------------------------------------------------------------
const merge = (arr1, arr2) => {
    let temp = [];
    let left = 0;
    let right = 0;
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            temp.push(arr1[left]);
            left++;
        }
        else {
            temp.push(arr2[right]);
            right++;
        }
    }

    //If there are elements in the left sub arrray then add it to the result
    while (left < arr1.length) {
        temp.push(arr1[left]);
        left++;
    }

    //If there are elements in the right sub array then add it to the result
    while (right < arr2.length) {
        temp.push(arr2[right]);
        right++;
    }
    return temp;
}

const mergeSort = (array) => {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

// console.log(mergeSort(arr));
/**
 * Time complexity: O(nlogn)
Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get a sorted array, so overall time complexity will be nlogn
Space complexity: O(n)
Reason: We are using a temporary array to store elements in sorted order.
Auxiliary Space Complexity: O(n)
 */

//Recursive Bubble Sort

const recursiveBubble = (array, n) => {
    if (n == 1) return array;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return recursiveBubble(array, n - 1);
}

// console.log("Recursive Bubble sort - ", recursiveBubble(arr, n));

//Recursive Insertion Sort
const recursiveInsertion = (array, index, n) => {
    if (index == n) return array;
    for (let i = index + 1; i > 0; i--) {
        if (array[i] < array[i - 1]) {
            [array[i], array[i - 1]] = [array[i - 1], array[i]];
        }
        else {
            break;
        }
    }
    return recursiveInsertion(arr, index + 1, n)
}
console.log("Recursive Insertion sort - ", recursiveInsertion(arr, 0, arr.length
));