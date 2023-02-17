const arr = [71, -23, 83, 890, 94, 52, 76, 33, 97];
console.log("Original Array - ", arr);

function InsertionSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(j, j - 1);
            }
            else {
                break; // because if its not small than previous no need to compare further
            }
        }
        console.log("Array after " + i + "th iteration");
        console.log(arr);
    }
}

const swap = (arg1, arg2) => {
    [arr[arg1], arr[arg2]] = [arr[arg2], arr[arg1]]
}

InsertionSort();