const array = [1, 2, 3, 4, 5, 7, 8, 9];
//way1 linear search



//way2 hash method


//way3 using XOR
const missingUsingXOR = () => {
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 1; i <= array.length + 1; i++) {
        xor1 = xor1 ^ i;
    }

    for (let i = 0; i < array.length; i++) {
        xor2 = xor2 ^ array[i];
    }

    return xor1 ^ xor2;
}

console.log(missingUsingXOR());


//way4 using sum 
const missingEle = () => {
    let n = array.length + 1;
    let s2 = 0;
    let sum = n * (n + 1) / 2;
    for (let i = 0; i < array.length; i++) {
        s2 = s2 + array[i];
    }
    return sum - s2;
}

// console.log(missingEle());
//Time complexity - O(N)
//Space complexity - O(1)