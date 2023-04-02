//Selection sort

//find max and start replacing with last element.
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let last = array.length - i - 1;
        let max = findMax(array, last);
        swap(last, max, array);
    }
    return array;
}

const findMax = (array, last) => {
    let maxIndex = 0;
    for (let i = 0; i <= last; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

const swap = (last, max, array) => {
    [array[last], array[max]] = [array[max], array[last]];
}

console.log("Finding Max and replacing from last", selectionSort([2, 3, 4, 5, 10, 1, 6, 8, 9, 12, 23]));

//find min and start replacing from first element.
const selectionSortMin = (array) => {
    for (let i = 0; i < array.length; i++) {
        let start = i;
        let min = findMin(array, start);
        swap(start, min, array);
    }
    return array;
}

const findMin = (array, start) => {
    let min = array.length - 1;
    for (let i = start; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i;
        }
    }
    return min;
}

console.log("Finding Min and replacing from first", selectionSortMin([2, 3, 4, 5, 10, 1, 6, 8, 9, 12, 23]));

//using nested for loop

const nestedSelectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        [array[min], array[i]] = [array[i], array[min]];
    }
    return array;
}

console.log(nestedSelectionSort([22, 3, 16, 5, 10, 1, 6, 8, 9, 12, 23]));


const nestedSelectionSortMax = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        let max = i;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[max]) {
                max = j;
            }
        }
        [array[max], array[i]] = [array[i], array[max]];
    }
    return array;
}

console.log(nestedSelectionSortMax([22, 3, 16, 5, 10, 1, 6, 8, 9, 12, 23]));

//Bubble sort

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) break;

    }
    return array;
}

console.log("Bubble Sort - ", bubbleSort([13, 46, 24, 52, 20, 9]));

//Insertion sort


const InsertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
            else {
                break;
            }
        }
    }
    return arr;
}

console.log("Insertion Sort - ", InsertionSort([4, 1, 3, 9, 7]));
