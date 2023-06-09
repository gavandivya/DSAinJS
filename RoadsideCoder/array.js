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

/**
 * 9.   every() return true if every single elememnt from array satisfies the condition
 */
const every = arr.every((item) => {
    return item > 3
})
console.log(every);

