/**
 *
Basic Data Structures
Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

you'll learn more about the differences between arrays and objects, and which to use in different situations.
You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.
 */

// Use an Array to Store a Collection of Data
let yourArray = [1, "divya", true, { key: "abc" }, null];

//------------------------------------------------------------------------

// Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
console.log(myArray);//Output - [ 'a', 'e', 'c', 'd' ]

//------------------------------------------------------------------------

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
//Output - [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

//------------------------------------------------------------------------

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Output - [ 'challenge', 'complete' ]

//------------------------------------------------------------------------

// Remove Items Using splice()
//splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
//splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4)
console.log(arr);
//Output - [ 2, 5, 2, 1 ]

//------------------------------------------------------------------------

// Add Items Using splice()
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//output - [ 'DarkSalmon','BlanchedAlmond','LavenderBlush','PaleTurquoise','FireBrick' ]
//------------------------------------------------------------------------

// Copy Array Items Using slice()
//Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched.

/**
 * slice() takes only 2 parameters — the first is the index at which to begin extraction,
 * and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
 */

function forecast(arr) {
    let tempArray = arr.slice(2, 4)
    return tempArray;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Output - [ 'warm', 'sunny' ]

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));


// Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]
    return sentence;
}

console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
//indexOf(), that allows us to quickly and easily check for the presence of an element on an array.
//indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0

}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'))

/**
The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
Passed:quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
Passed:quickCheck(["onions", "squash", "shallots"], "onions") should return true
Passed:quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
Passed:quickCheck([true, false, false], undefined) should return false
Passed:The quickCheck function should utilize the indexOf() method
 */

// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
            console.log(newArr);
        }
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/**
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
Passed:filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
Passed:filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
Passed:filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
Passed:The filteredArray function should utilize a for loop
 */

// Create complex multi-dimensional arrays
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', ['deep', ['deeper', ['deepest']]], 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

/**
myNestedArray should contain only numbers, booleans, and strings as data elements
Passed:myNestedArray should have exactly 5 levels of depth
Passed:myNestedArray should contain exactly one occurrence of the string deep on an array nested 3 levels deep
Passed:myNestedArray should contain exactly one occurrence of the string deeper on an array nested 4 levels deep
Passed:myNestedArray should contain exactly one occurrence of the string deepest on an array nested 5 levels deep
 */

// Add Key-Value Pairs to JavaScript Objects
//Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13; //way 1
foods['grapes'] = 35; //way2
const fruit = 'strawberries'; //way3
foods[fruit] = 27;
console.log(foods);

// Modify an Object Nested Within an Object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;
console.log(userActivity);

// Access Property Names with Bracket Notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory("apples"));
// Use the delete Keyword to Remove Object Properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
// Check if an Object has a Property
//users.hasOwnProperty('Alan'); / 'Alan' in users;


let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

//way1
function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')
}

//way2
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        userObj.hasOwnProperty(name)
    );
}

//way3
function isEveryoneHere(userObj) {
    return 'Alan' in userObj && 'Jeff' in userObj && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')
}

console.log(isEveryoneHere(users));


// Iterate Through the Keys of an Object with a for...in Statement
const users1 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user].online) {
            count += 1;
        }
    }
    return count;
}

console.log(countOnline(users1));
// Generate an Array of All Object Keys with Object.keys()

/**
Object.keys() method. This method takes an object as the argument and returns an array of strings representing each property in the object. Again, there will be no specific order to the entries in the array.
 */
let users2 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users2));
//Output - [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

// Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
