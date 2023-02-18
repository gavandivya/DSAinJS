const array = [-87, -67, 0, 23, 34, 45, 56, 64, 72, 78, 81, 99, 102, 145, 189];
const target = 178;
function BinarySearch() {
    let start = 0; let end = array.length - 1; let isPresent = false; let count = 0;

    while (start <= end) {
        count++;
        let mid = Math.floor(start + (end - start) / 2);

        if (array[mid] == target) {
            console.log("Element Found at index", mid);
            console.log("Total comparisions - ", count)
            isPresent = true;
            break;
        }
        else if (array[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    if (!isPresent) {
        console.log("Element Not Found");
        console.log("Total comparisions - ", count)
    }
}


BinarySearch();