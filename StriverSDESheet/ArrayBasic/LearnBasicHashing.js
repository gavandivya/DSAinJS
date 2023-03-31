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
 * Time Complexity: O(N*N)
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
                console.log(key + " " + value);
        }
        for (let a of map.entries()) {
                console.log(a);
        }
        console.log(map)
        console.log(map.entries())
        console.log(map.keys())
        console.log(map.values())
}

countFreqMap([10, 5, 10, 15, 10, 5]);

