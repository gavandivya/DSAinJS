arr1 = [1, 1, 2, 3, 4, 5, 7];
arr2 = [2, 3, 4, 4, 5, 6, 8, 9];
union = [];
const unionInsorted = (array1, array2) => {
    const set = new Set();
    for (let i = 0; i < array1.length; i++) {
        set.add(array1[i]);// O(n1logN)
    }
    for (let i = 0; i < array2.length; i++) {
        set.add(array2[i]);//O(n2logN)
    }
    let i = 0;
    for (let x of set) {
        union[i] = x;//O(n1+n2)
        i++;
    }
    return union;
}


console.log(unionInsorted(arr1, arr2));
//TC - O(n1logN +n2logN) + O(n1+n2)
//SC -  O(n1+n2) + O(n1+n2)


//way2 using Two pointer technique
const findUnion = (array1, array2) => {
    let unionArray = [];
    let i = 0; let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            if (unionArray.length == 0 || unionArray[unionArray.length - 1] != array1[i]) {
                unionArray.push(array1[i]);
            }
            i++;
        }
        else {
            if (unionArray.length == 0 || unionArray[unionArray.length - 1] != array2[j]) {
                unionArray.push(array2[j]);
            }
            j++;
        }
    }

    while (i < array1.length) {
        if (unionArray.length == 0 || unionArray[unionArray.length - 1] != array1[i]) {
            unionArray.push(array1[i]);
        }
        i++;
    }

    while (j < array2.length) {
        if (unionArray.length == 0 || unionArray[unionArray.length - 1] !== array2[j]) {
            unionArray.push(array2[j]);
        }
        j++;
    }
    return unionArray;

}

console.log(findUnion(arr1, arr2))
//TC -  O(n1+n2)
//SC -  O(n1+n2) used for returning the answer