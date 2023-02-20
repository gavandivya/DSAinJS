// const arr = [-87, -67, 0, 23, 34, 45, 56, 64, 72, 78, 81, 99, 102, 145, 189];
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const target = 2;

function binarySearch(start, end) {
    let mid = start + (end - start) / 2;
    if (start > end) {
        console.log("Element Not found");
        return -1;
    }

    if (target == arr[mid]) {
        console.log("Element Found");
        return mid;
    }
    else if (target < arr[mid]) {
        return binarySearch(start, mid - 1)
    }
    else {
        return binarySearch(mid + 1, end)
    }
}

console.log(binarySearch(0, arr.length - 1));

