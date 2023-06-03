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

/**
 * adding element at end  
 * 1.   push()
 */
array.push('Divya');
array.push('Disha', 'Bruno')
console.log(array);

/**adding element at start 
 * 2.   unshift()
 * */
array.unshift('Rashmi', person);
console.log(array);

//accessing first array element 
console.log(array[0]);
console.log(array[1].name);

//no of elements in array
console.log(array.length);

/**removing elemnts from start
 * 3.   pop()
 * */
array.pop();

/**removing elemnts from end
 * 4.   shift()
 * */
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

/* 5.   filter() allows us to add condition and return those elements that satisfy the conditions*/

const filterNum = arr.filter((item) => {
    return item > 3
})

console.log(filterNum);

