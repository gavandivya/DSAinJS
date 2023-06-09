/**
 * Mutating method	    Non-mutating alternative
 *
    copyWithin()	    No one-method alternative
    fill()	            No one-method alternative
    pop()	            slice(0, -1)
    push(v1, v2)	    concat([v1, v2])
    reverse()	        toReversed()
    shift()	            slice(1)
    sort()	            toSorted()
    splice()	        toSpliced()
    unshift(v1, v2)	    toSpliced(0, 0, v1, v2)
 */

//Implementation Part

//Array Declaration
//way1
let array1 = new Array();
//way2
let array = [];

let person = {
    name: "Raju",
    age: 55
}

/* 1.   push() adding element at end */
array.push('Divya');
array.push('Disha', 'Bruno')
console.log(array);

/* 2.   unshift() adding element at start */
array.unshift('Rashmi', person);
console.log(array);

//accessing first array element 
console.log(array[0]);
console.log(array[1].name);

//no of elements in array
console.log(array.length);

/* 3.   pop() removing elemnts from start */
array.pop();

/* 4.   shift() removing elements from end */
array.shift();

/**
 * Looping an array
 */

//for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}


let arr = [1, 2, 3, 4, 5]
/* 5.   map() use to make changes to whole array */
const newNums = arr.map((item, index, array) => {
    return item + 5;
})

console.log(newNums);

/* 6.   filter() allows us to add condition and return those elements that satisfy the conditions*/

const filterNum = arr.filter((item) => {
    return item > 3
})

console.log(filterNum);

/**
 * 7.   reduce() takes array and reduce down to single value  */
const reduceNum = arr.reduce((sum, item) => {
    return sum + item
}, 0);

console.log(reduceNum);

/**
 * 8.   some() return true if any elememnt from array satisfies the condition
 */
const some = arr.some((item) => {
    return item > 3
})
console.log(some);

/* 9.   every() return true if every single elememnt from array satisfies the condition*/
const every = arr.every((item) => {
    return item > 3
})
console.log(every);

/* 10.   find() return first element that satisfies the condition else return undefined*/

const find = arr.find((item) => {
    return item > 3
})
console.log(find);

/* 11.   Spread and Rest*/

const nums = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

//copy both array in finalnums
const finalNums = [...nums, ...nums2]; //spread converts array of elemnts into list of numbers
console.log(finalNums);

//rest is used inside a function parameter where we have N arguements

const fun = (...num) => {
    return num;
}

console.log(fun(1, 2, 3, 4, 5)) //list of numbers converted to array - [1, 2, 3, 4, 5]
console.log(fun(nums, nums2, "hello")) // [[1, 2, 3, 4], [5,6,7,8], 'hello'];


/* 12. concat() join 2 arrays and returns new array */
const newArr = nums.concat(nums2, array, 'hello', 1, 2, 3); //consist of multiple array + elements
console.log(newArr);

/* 13. slice() access certain part of array returns new array doesn't modify current array 
slice()
slice(start)
slice(start, end)*/
const slice1 = nums.slice(0, 2); //start,end
const slice2 = nums.slice(-2);  //from last 2
const slice3 = nums.slice(2);  //start from 2
console.log(slice1, slice2, slice3);
console.log(nums);

/* 14. splice() access certain part of array and modify current array 
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/
const splice1 = nums.splice(0, 1); //start,no of elements to be deleted - [1, 2] nums = [3,4]
console.log(splice1, nums);
const splice2 = nums.splice(-2, 0, 'divya');  //from last 2 then insert
const splice3 = nums.splice(1);  //start from 1 and delete all elemnts ,deletecount>=arr.length or missing
console.log(splice3, nums); // 
/**
 (1) [1] (3) [2, 3, 4]
(0) [] (4) [2, 'divya', 3, 4]
(3) ['divya', 3, 4] (1) [2]**/

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //deletecount = 0 so inserts at position 1 no delete
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

const months1 = ['Jan', 'Feb', 'March', 'April', 'June'];
months1.splice(5, 2, 'May', 'June'); //deletecount = 1/2/3.. and new element mentioned so replaces at position 3 else insert at the end
console.log(months1);