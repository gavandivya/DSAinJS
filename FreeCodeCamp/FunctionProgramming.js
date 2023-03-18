// define custom map()
Array.prototype.map = function () {
    console.log(this)  // prints array [1,2,3] 
}
// declare an array
const arr = [1, 2, 3]

arr.map(() => { })
//Output - [1, 2, 3]

//array.map(function(currentValue, index, arr), thisValue)
//https://puneetpalkaur.medium.com/how-to-write-polyfill-for-array-map-in-javascript-5d692a1b960a
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


Array.prototype.myMap = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};


[23, 65, 98, 5, 13].myMap(item => item * 2);

["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase());

[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])


/**
 * Output
 * 
[ 46, 130, 196, 10, 26 ]
[ 'NAOMI', 'QUINCY', 'CAMPERBOT' ]
[ 1, 2, 5, 2, 1 ]
 *
 */


//filter()

// The global variable
const watchList1 = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];


const filteredList = watchList1.filter((ele) => ele.imdbRating > 8.0).map((e) => ({ title: e.Title, rating: e.imdbRating }));
console.log(filteredList);

/**
 * Output
 * 
 * [ { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' } ]   
 */


/**
Implement the filter Method on a Prototype
You might learn a lot about the filter method if you implement your own version of it. 
It is recommended you use a for loop or Array.prototype.forEach().
 */

Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    console.log(newArray)
    return newArray;
};


Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (Boolean(callback(this[i], i, this)) === true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};


[23, 65, 98, 5, 13].myFilter(item => item % 2);

["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi");

[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)


/** Output
[ 23, 65, 5, 13 ]
[ 'naomi' ]
[ 1, 2, 5 ]
 */

/**
 * 
Return Part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). 
If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. 
The slice method does not mutate the original array, but returns a new one.
 */

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


function nonMutatingSplice(cities) {
    return cities.slice(0, 3);

}

//Remove Elements from an Array Using slice Instead of splice
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}

//Functional programming is all about creating and using non-mutating functions.
//Compare concat to the push method. push adds items to the end of the same array it is called on, which mutates that array.
//concat offers a way to merge new items to the end of an array without any mutating side effects.

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

/**
Use the reduce Method to Analyze Data
Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. 
 */

// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

function getRating(watchList) {
    let averageRating = 0;
    let filteredArray = watchList.filter((ele) => ele.Director == "Christopher Nolan");

    averageRating = filteredArray.reduce((sum, curr) => {
        return sum += Number(curr["imdbRating"]);
    }, 0) / filteredArray.length;
    return averageRating;
}

console.log(getRating(watchList)); //Output - 8.675
//The getRating(watchList) should equal 8.675.


//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    console.log(arr.sort());
    return arr.sort();
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);

/**Output
 * 
[ 'a', 'a', 'c', 'd', 'g', 'z' ]
[ 'a', 'a', 'a', 'a', 't', 'x' ]
 */

//The sort method sorts the elements of an array according to the callback function.

function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

ascendingOrder([1, 5, 2, 3, 4]);
//This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

/*
* A side effect of the sort method is that it changes the order of the elements in the original array.
* In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.
*/


/**
 * 
Combine an Array into a String Using the join Method
The join method is used to join the elements of an array together to create a string. 
It takes an argument for the delimiter that is used to separate the array elements in the string.
 */

function sentensify(str) {
    console.log(str.split(/\W/).join(" "))
    return str.split(/\W/).join(" ");
}

sentensify("May-the-force-be-with-you");
sentensify("The.force.is.strong.with.this.one");
sentensify("There,has,been,an,awakening");

/**
 * Output
May the force be with you
The force is strong with this one
There has been an awakening
 */


//Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
    return title.trim().toLowerCase().split(" ").filter((space) => space !== "").join("-");
}

function urlSlug(title) {
    return title.split(" ").filter(substr => substr !== "").join("-").toLowerCase();
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"); //a-mind-needs-books-like-a-sword-needs-a-whetstone
urlSlug(" Winter Is  Coming"); //winter-is-coming
urlSlug("Winter Is Coming"); //winter-is-coming


/**
Use the every Method to Check that Every Element in an Array Meets a Criteria
The every method works with arrays to check if every element passes a particular test.
It returns a Boolean value - true if all values meet the criteria, false if not.
 */


function checkPositive(arr) {
    return arr.every((ele) => ele > 0)
}

checkPositive([1, 2, 3, -4, 5]);

//The every method would return false here.

/**
Use the some Method to Check that Any Elements in an Array Meet a Criteria
The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not.
 */

function checkPositive(arr) {
    return arr.some((ele) => ele > 0)
}

checkPositive([1, 2, 3, -4, 5]);
//The some method would return true.


/**
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.
 */

//using filter and map
const squareList = arr => {
    return arr.filter((e) => Number.isInteger(e) && e > 0).map((e) => e * e)
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


const squareList2 = (arr) => {
    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
};


//using reduce()
const squareList1 = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
    }, []);
};


