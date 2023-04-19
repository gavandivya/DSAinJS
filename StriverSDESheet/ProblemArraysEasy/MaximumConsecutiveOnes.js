const array = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1];

const findMaxCon = () => {

    let count = 0;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count++;
            if (count > max) {
                max = count;
            }
        }
        else if (array[i] == 0) {
            count = 0;
        }
    }
    return max;
}

console.log(findMaxCon());

//Time Complexity : O(n)
//Space Complexity : O(1)