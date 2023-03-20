/**
 * Intermediate Algorithm Scripting
 */
function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;
    }
    return sumBetween;
}

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = max * (max + 1) / 2;
    if (min != 1) {
        let minsum = min * (min - 1) / 2;
        sum = sum - minsum;
    }
    return sum;
}
sumAll([1, 4]);