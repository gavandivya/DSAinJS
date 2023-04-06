const arr = [1, 2, 3, 4, 5, 6];

//way1
const rotate = (array) => {
    let first = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return array;
}

// console.log(rotate(arr));
//TC - O(N)
//SC- O(1)


//for shifting left by n numbers
const rotateByD = (array, d, n) => {
    if (d > n) {
        d = d % n;
    }
    let temp = array.slice(0, d);
    console.log(temp);
    for (let i = 0; i < n - d; i++) {
        console.log(array[i], array[i + d]);
        array[i] = array[i + d];
    }
    console.log(array);
    for (let i = n - d; i < n; i++) {
        array[i] = temp[i + d - n];
    }
    return array;
}

console.log(rotateByD(arr, 2, 6));
