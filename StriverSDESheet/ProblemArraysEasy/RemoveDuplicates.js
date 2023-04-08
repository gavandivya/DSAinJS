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