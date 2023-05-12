/**Count frequency of each element in the array
 * Problem statement: Given an array, we have found the number of occurrences of each element in the array.
 * Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
        5  2
        15  1
Explanation:10 occurs 3 times in the array
            5 occurs 2 times in the array
            15 occurs 1 time in the array

Example2:
Input: arr[] = {2,2,3,4,4,2};
Output: 2  3
        3  1
        4  2
Explanation: 2 occurs 3 times in the array
             3 occurs 1 time in the array
             4 occurs 2 time in the array
 */

//solution 1 using 2 for loops

const countFreq = (array) => {
        let visited = new Array(array.length).fill(false);
        for (let i = 0; i < array.length; i++) {
                if (visited[i] == true) continue;

                let count = 1;
                for (let j = i + 1; j < array.length; j++) {
                        if (array[i] == array[j]) {
                                visited[j] = true;
                                count++;
                        }
                }
                console.log(array[i], count);
        }
        console.log(visited);
}

countFreq([10, 5, 10, 15, 10, 5]);
/**
Time Complexity: O(N*N)
Space Complexity:  O(N)
*/


//solution2 using map
const countFreqMap = (array) => {
        let map = new Map();
        console.log(map);
        for (let i = 0; i < array.length; i++) {
                if (map.has(array[i])) {
                        map.set(array[i], map.get(array[i]) + 1)
                }
                else {
                        map.set(array[i], 1);
                }
        }
        for (let [key, value] of map.entries()) {
                console.log(key + " - " + value);
        }
        /**
        10 3
        5 2
        15 1
         */
        for (let a of map.entries()) {
                console.log(a);
        }
        /**
        (2) [10, 3]
        (2) [5, 2]
        (2) [15, 1]
         */
        console.log(map);//Map(3) {10 => 3, 5 => 2, 15 => 1}
        console.log(map.entries()); //MapIterator { 10 => 3, 5 => 2, 15 => 1}
        console.log(map.keys()); //MapIterator { 10, 5, 15 }
        console.log(map.values());//MapIterator { 3, 2, 1 }
}


/**
 * Find the highest/lowest frequency element
 */

countFreqMap([10, 5, 10, 15, 10, 5, 5, 5]);

const highestLowestFreq = (arr) => {
        let k = 2;
        let freqMap = new Map();
        for (let i = 0; i < arr.length; i++) {
                if (freqMap.has(arr[i])) {
                        freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
                }
                else {
                        freqMap.set(arr[i], 1);
                }
        }

        for (let [key, value] of freqMap.entries()) {
                if (value >= k) {
                        console.log(key + " - ", value);
                }
        }

}
console.log(highestLowestFreq([10, 5, 10, 15, 10, 5, 5, 5]))

