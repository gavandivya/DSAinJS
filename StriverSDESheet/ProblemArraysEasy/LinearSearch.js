const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const linearSearch = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == k) {
            return `Element present at index ${i} `;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 6));
//Time Complexity: O(n), Space Complexity: O(1).