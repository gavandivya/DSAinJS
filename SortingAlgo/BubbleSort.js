let arr = [5, 4, -3, 2, 1];
console.log("Initial Array - ", arr);
for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(j, j + 1);
            isSwapped = true;
            console.log("j = ", j, arr);
        }
    }
    //optimized by using a swapped flag if no swapping takes place means already sorted
    if (!isSwapped) {
        break;
    }
    console.log(`Array After ${i + 1}th iteration`);
    console.log(arr);

}

function swap(arg1, arg2) {
    let temp = arr[arg1];
    arr[arg1] = arr[arg2];
    arr[arg2] = temp;
}