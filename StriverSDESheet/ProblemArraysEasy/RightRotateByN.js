const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//way1
const rotatebyNEle = (array, d) => {
    d = d % array.length;
    let temp = array.slice(array.length - d, array.length);
    for (let i = array.length - 1; i >= d; i--) {
        array[i] = array[i - d];
    }
    for (let i = 0; i < d; i++) {
        array[i] = temp[i]
    }
    return array;
}

console.log(rotatebyNEle(arr, 3));

//way2
const rotateByNReverse = (array, d) => {
    const reverse = (left, right) => {
        while (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
        console.log(array);
    }
    reverse(array.length - d, array.length - 1);
    reverse(0, array.length - 1 - d);
    reverse(0, array.length - 1);
    return array;
}
console.log(rotateByNReverse(arr, 3));

//way3
const rotatebyN = (array, d) => {
    array = array.slice(0, array.length - d).reverse().concat(array.slice(array.length - d).reverse());
    return array.reverse();
}
console.log(rotatebyN(arr, 3))