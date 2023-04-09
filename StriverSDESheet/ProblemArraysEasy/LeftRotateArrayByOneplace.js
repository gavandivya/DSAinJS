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
//Time complexity: O(n). Space complexity: O(1).


//for shifting left by n numbers
const rotateByD = (array, d, n) => {
    if (d > n) {
        d = d % n;
    }
    let temp = array.slice(0, d);
    for (let i = 0; i < n - d; i++) {
        array[i] = array[i + d];
    }
    for (let i = n - d; i < n; i++) {
        array[i] = temp[i + d - n];
    }
    return array;
}

console.log(rotateByD(arr, 2, 6));
//Time complexity: O(n) Space complexity: O(n)

//way3
const rotatebyN = (array, d) => {
    array = array.slice(0, d).reverse().concat(array.slice(d).reverse());
    return array.reverse()
}

console.log(rotatebyN(arr, 2))
//Time complexity: O(n). Space complexity: O(1).


//way4
const rotateByNReverse = (array, d) => {
    const reverse = (left, right) => {
        while (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
        console.log(array);
    }
    reverse(0, d - 1);
    reverse(d, array.length - 1);
    reverse(0, array.length - 1);
    return array;
}
console.log(rotateByNReverse(arr, 3));

//Time complexity: O(n). Space complexity: O(1).
