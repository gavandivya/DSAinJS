const arr = [71, -23, 83, 890, 94, 52, 76, 33, 97];
console.log("Original Array - ", arr);
//Finding max in unsorted array and replacing it with last
const findMax = (last) => {
    let max = 0;
    let isSwapped = false;
    for (let i = 0; i <= last; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    console.log("Max element in unsorted array is", arr[max]);
    return max;
}

const swap = (max, last) => {
    console.log("Replacing postion of", arr[max] + " with last position of unsorted array " + arr[last]);
    [arr[max], arr[last]] = [arr[last], arr[max]];
    console.log(arr);
}

function selectionSort() {
    for (let i = 0; i < arr.length; i++) {
        let last = arr.length - i - 1;
        let max = findMax(last)
        swap(max, last)
    }
}

selectionSort();