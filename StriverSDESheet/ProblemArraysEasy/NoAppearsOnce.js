//Find the number that appears once, and the other numbers twice
//brute force method

//do linear search and get the count if its just the one then the no is occured just once
//way 1
const array = [1, 1, 2, 2, 3, 4, 4, 5, 5]
const findmaxConsecutive = () => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] == array[i]) {
                counter++;
            }
        }
        if (counter == 1) {
            return array[i];
        }
    }
}

console.log(findmaxConsecutive());
//time complexity - O(n*n) - O(N^2)
//space complexity - O(1)


//better solutin using hashing
//way 2
const findConse = () => {
    let temp = array.fill(0);
    console.log(temp);
    let length = Math.ceil(array.length / 2);
    for (let i = 0; i < length; i++) {
        temp[array[i]]++;
        count++;
    }
    if (count == 1) {
        return array[i]
    }
    return length;

}

console.log(findConse());

//way 3
//optimzed solution
//optimal solution using XOR approach
const findCon = () => {
    let xor = array[0];
    for (let i = 1; i < array.length; i++) {
        xor = xor ^ array[i];
    }
    return xor;
}

console.log(findCon());
/**
Time Complexity: O(N), where N = size of the array.
Reason: We are iterating the array only once.

Space Complexity: O(1) as we are not using any extra space.
 */



