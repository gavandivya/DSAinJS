const arr = [1, 2, 4, 7, 7, 5];

//way1
const secondLargestSort = (array) => {
    let largest = array.sort((a, b) => a - b)[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] !== largest) {
            return array[i];
        }
    }
}

console.log(secondLargestSort(arr));
//worst case would be array with same elements-> [7,7,7,7,7,7,7]

//way2
const secondlargest2Loops = (arr) => {
    let largest = arr[0];
    let secondLargest = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondlargest2Loops(arr));
//TC - (2N)

if (arr[i] > secondLargest && arr[i] != largest) {
    secondLargest = arr[i];
}
    }
return secondLargest;
}

console.log(secondlargest2Loops(arr));
//TC - (2N)


//way3
const secondlargest = (arr) => {
    let largest = arr[0];
    let secondLargest = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
        //way3
        const secondlargest = (arr) => {
            let largest = arr[0];
            let secondLargest = -1;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > largest) {
                    secondLargest = largest;
                    largest = arr[i];
                }
                else if (arr[i] < largest && arr[i] > secondLargest) {
                    secondLargest = arr[i];
                }
            }
            return secondLargest;
            return secondLargest;
        }

        console.log(secondlargest(arr));
        //TC - O(N)
        console.log(secondlargest(arr));
//TC - O(N)