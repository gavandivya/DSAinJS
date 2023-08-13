//Find max in sliding window

const array = [1,-2,3,4,-5,6,-7,8,9]; //3,4,4,6,8,9
const newArray = [];

const findMaxinWindow = (k)=>{
    for (let i = 0; i <= array.length-k; i++) { //n
        let max = array[i];
        for (let j = 1; j < k; j++) { //K
            if(array[i+j] > max){
                max = array[j+i];
            }
        }
        newArray.push(max);
    }
    return newArray;
}

console.log(findMaxinWindow(3));
//Time Complexity - O(n*k)
//Space Complexity  - O(n)

