//Chop string into chunks of given length
//Write a function to chop string into chunks of given length and return it as array.

/**
Input:
'javascript'
3

Output:
['jav','asc','rip','t']
 */

const string = "javascript";
let strLen = 3;
let array = [];
let i = 0;

while (i < string.length) {
    array.push(string.slice(i, i + strLen));
    i = i + strLen;
}

console.log(array);
