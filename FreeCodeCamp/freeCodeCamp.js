/***
 * 
You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.
*
*/

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    console.log(prop);
    console.log(records[id]?.tracks);
    if (prop != 'tracks' && value != "") {
        records[id][prop] = value;
    }
    else if (prop == 'tracks' && records[id]?.tracks == undefined) {
        let emptyArray = [];
        emptyArray.push(value);
        records[id].tracks = emptyArray;
    }
    else if (prop == 'tracks' && value != "") {
        records[id].tracks.push(value);
    }
    else {
        delete records[id][prop];
    }
    return records;

}

updateRecords(recordCollection, 5439, 'tracks', 'ABBA');
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

//loops

const myArray = [];

// Only change code below this line
//1nd way
let n = 5;

while (n >= 0) {
    myArray.push(n);
    n--;
}

//2nd way
let num = 0

while (num <= 5) {
    myArray.unshift(num);
    num++;
}

//Output - myArray should equal [5, 4, 3, 2, 1, 0].


//
// Setup


/**
 * 
 * We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

lookUpProfile("Kristian", "lastName") should return the string Vos
Passed:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Passed:lookUpProfile("Harry", "likes") should return an array
Passed:lookUpProfile("Bob", "number") should return the string No such contact
Passed:lookUpProfile("Bob", "potato") should return the string No such contact
Passed:lookUpProfile("Akira", "address") should return the string No such property
 */
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop) || contacts[x][prop] !== undefined || prop in contacts[i]) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

lookUpProfile("Akira", "likes");


//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

//Math.floor(Math.random() * (max - min + 1)) + min

function randomRange(myMin, myMax) {
    let diff = myMax - myMin + 1;
    let rand = Math.random();
    let multiply = diff * rand;
    let floor = Math.floor(multiply)
    return floor + myMin;
}


//doubt

// Only change code below this line
/**
countdown(-1) should return an empty array.
Failed:countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Failed:countdown(5) should return [5, 4, 3, 2, 1]
 */
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const newArray = countdown(n - 1)
        newArray.unshift(n);
        return newArray;
    }
}

/**
 * 
rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
Passed:rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
Passed:rangeOfNumbers(4, 4) should return [4].
 */
function rangeOfNumbers(startNum, endNum) {

    if (startNum > endNum) {
        return [];
    }
    else {
        const array = rangeOfNumbers(startNum + 1, endNum)
        array.unshift(startNum);
        return array;
    }

}

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

//regex


/**
'string'.match(/regex/);
/regex/.test('string');
 
You can apply the regex /t[a-z]*i/ to the string "titanic". 
This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. 
It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. 
"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

/^Divya/ starts with divya
/Divya$/ end with divya


let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].


Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.


//Code
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

Testcases
Passed:Your regex should match the string JACK
Passed:Your regex should not match the string J
Passed:Your regex should match the string Jo
Passed:Your regex should match the string Oceans11
Passed:Your regex should match the string RegexGuru
Passed:Your regex should not match the string 007
Passed:Your regex should not match the string 9
Passed:Your regex should not match the string A1
Passed:Your regex should not match the string BadUs3rnam3
Passed:Your regex should match the string Z97
Passed:Your regex should not match the string c57bT3
Passed:Your regex should match the string AB1
Passed:Your regex should not match the string J%4



----------------
You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). 
*/
