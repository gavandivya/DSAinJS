const arr = [2, 2, 2, 2, 2]

//way1 using set (Bruteforce)
const RemoveDuplicates = (array) => {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
        set.add(array[i]); //NlogN
    }
    let k = set.size;
    let j = 0;
    for (let x of set) {
        arr[j] = x; //N
        j++;
    }
    return arr.slice(0, k)
}
//TC - NlogN 
//SC - O(N)
// console.log(RemoveDuplicates(arr));

//way2
//const arr = [2, 2, 3, 4, 5] will only work for sorted array
const removeDup = (array) => {

    let j = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[j] != array[i]) {
            j++;
            array[j] = array[i];
        }
    }
    return array.slice(0, j + 1);
}

console.log(removeDup(arr));


//sol3 using filter method
const array = [1, 22, 3, 4, 22, 6, 3];

function removeDuplicate() {
    return array.filter((item, index) => {
        return array.indexOf(item) === index
    })
}

console.log(removeDuplicate());


//sol5

let arr2 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr2)];
}

console.log(removeDuplicates(arr));


//sol4 using for and include method
const arr1 = [1, 22, 3, 4, 22, 6, 3, 6, 6];
const newArr = [];
function removeDuplicate() {
    for (let i = 0; i < arr1.length; i++) {
        if (!newArr.includes(arr1[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicate());