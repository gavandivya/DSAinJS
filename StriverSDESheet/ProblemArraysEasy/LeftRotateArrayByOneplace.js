const arr = [1, 2, 3, 4, 5];

//way1
const rotate = (array) => {
    let first = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return array;
}

console.log(rotate(arr));
//TC - O(N)
//SC- O(1)