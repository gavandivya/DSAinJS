//way1
const arr = [1, 2, 0, 0, 3, 0, 4, 0, 5, 6];

const move0toEnd = (array) => {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
            temp.push(array[i]); //O(N)
        }
    }

    for (let i = 0; i < temp.length; i++) {
        array[i] = temp[i];//O(x)
    }

    for (let i = temp.length; i < array.length; i++) {
        array[i] = 0;//O(n-x)

    }
    return array;
}

// console.log(move0toEnd(arr));
//Time complexity: O(N)+O(X)+O(N-X)= O(2N). Space complexity: O(N).


//way2

const move0sToEnd = (array) => {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) { //O(x)
            j = i;
            break;
        }
    }

    for (let i = j + 1; i < array.length; i++) {
        if (array[i] != 0) {
            [array[i], array[j]] = [array[j], array[i]]; //O(n-x)
            j++;
        }

    }
    return array;
}

console.log(move0sToEnd(arr));
//Time complexity: O(X)+O(N-X)= O(N). Space complexity: O(1).
