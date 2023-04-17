// const array = [1, 2, 3, 4, 5, 7, 8, 9];
const array = [9, 6, 4, 2, 3, 5, 7, 0, 1]
//way1 linear search

const missingElement = () => {
    for (let i = 1; i <= array.length; i++) {
        let flag = 0;
        for (let j = 0; j < array.length; j++) {
            if (i == array[j]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            return i;
        }
    }

}

console.log(missingElement());
//TC - O(N*N)
//SC - O(1)

//array should be in sorted array



// console.log(missingElements());
//TC - O(N)
//SC - O(1)

//way2 hash method
// const array = [9, 6, 4, 2, 3, 5, 7, 0, 1]
//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const missingHash = () => {
    let temp = [];
    for (let i = 0; i <= array.length; i++) {
        temp[i] = 0; //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    for (let i = 0; i < array.length; i++) {
        temp[array[i]] = 1;
    }

    let ans = 0;
    for (i = 0; i < array.length; i++) {
        if (temp[i] == 0) {
            ans = i;
        }
    }
    return ans;
}

console.log(missingHash());

//way3 using XOR
const missingUsingXOR = () => {
    let xor1 = 0;
    let xor2 = 0;
    // for (let i = 1; i <= array.length + 1; i++) {
    //     xor1 = xor1 ^ i;
    // }
    for (let i = 0; i < array.length; i++) {
        xor1 = xor1 ^ (i + 1);// we can use same loop
        xor2 = xor2 ^ array[i];
    }
    return xor1 ^ xor2;
}

console.log(missingUsingXOR());
//TC - O(2N) but we can put xor1 in 2nd loop
//SC - O(1)


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

console.log(missingEle());
//This approach takes sligtly more space has int can take (10^5 X 10^5+1)/2 so long will be needed
//Time complexity - O(N)
//Space complexity - O(1)