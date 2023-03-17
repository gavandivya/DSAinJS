/**
Create a Method on an Object
Objects can have a special type of property, called a method.
 */
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return `This dog has ${this.numLegs} legs.`
    }
};

dog.sayLegs();

/**
 * Define a Constructor Function
Constructors are functions that create new objects. 
They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects.
 */

function Dog() {
    this.name = "Bruno";
    this.color = "white";
    this.numLegs = 4;
}

//Constructor with parameter
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let dog1 = new Dog("Bruno", "White");

//Use Prototype Properties to Reduce Duplicate Code

Dog.prototype.numLegs = 4


/**
 * Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties.
 Own properties are defined directly on the object instance itself. 
And prototype properties are defined on the prototype.
 */

function Bird(name) {
    this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property


let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);

/**
 * Understand the Constructor Property
There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:
 */

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}
/**
 * Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) 
 * it’s generally better to use the instanceof method to check the type of an object.
 */


//Change the Prototype to a New Object
//Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
//This becomes tedious after more than a few properties.

Bird.prototype.eat = function () {
    console.log("nom nom nom");
}

Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
}

//solution
/**
Change the Prototype to a New Object
Up until now you have been adding properties to the prototype individually:
 */
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("eat");
    },
    describe: function () {
        console.log("describe");
    }

};

/**
Understand Where an Object’s Prototype Comes From
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
For example, here the Bird constructor creates the duck object:
 * */
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle)


/**
 * Use Inheritance So You Don't Repeat Yourself
There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:
**/

Bird.prototype = {
    constructor: Bird,
    describe: function () {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function () {
        console.log("My name is " + this.name);
    }
};
//The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is " + this.name);
    }
};
//Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};

//---------------------
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }

};


//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-understand-the-hazards-of-using-imperative-code/301241
/**
 * For an index, we will take 2 - as done in the challenge.

At the beginning, our array videoWindow looks like this:
['Netflix', 'YouTube', 'Vimeo', 'Vine'].
After first line is executed, variable tabsBeforeIndex will take 2 (index) values starting from 0 (splice(0,2)) and create a new array containing them.
Arrays now look like this:
tabsBeforeIndex: ['Netflix', 'YouTube']
videoWindow: ['Vimeo', 'Vine']
You can already see why splice() can be very hazardous, as it always modifies the array it is executed upon and returns that modified array - it is not deterministic.
After second line is executed, tabsAfterIndex should take values starting from index (in this case 2) and remove them from videoWindow array. As we can see that in the current state (['Vimeo', 'Vine']), videoWindow does not have index 2 so empty array is returned. Final state:
tabsBeforeIndex: ['Netflix', 'YouTube']
videoWindow: ['Vimeo', 'Vine']
tabsAfterIndex: []
After the third line and concatenation the returned array is the same as tabsBeforeIndex, which results in both 'Vimeo' and 'Vine' values not being in the array.

Solution 1
In order for the method tabClose to work properly,

const tabsAfterIndex = this.tabs.splice(index + 1); should be replaced with
const tabsAfterIndex = this.tabs.splice(1);

-------------------
Solution 2
const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

 */


/**
 * Mutation
 * 
changing or altering things is called mutation, and the outcome is called a side effect. 
A function, ideally, should be a pure function, meaning that it does not cause any side effects.
 */


/**
 * we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. 
It does this without mutating the original array.
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

const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});

watchList.map((list) => ratings.push({ title: list["Title"], rating: list.imdbRating }))

console.log(JSON.stringify(ratings));


//Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)

let beagle1 = new Dog();
beagle.eat();


/**
Reset an Inherited Constructor Property
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:
 */
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


/**
 * Fix the code so duck.constructor and beagle.constructor return their respective constructors.
 */
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle2 = new Dog();


/** Output
[Function: Animal]
[Function: Bird]
 */


/**
Add Methods After Inheritance
A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
 */

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!")
}

let beagle3 = new Dog();
beagle3.bark();
beagle3.eat();

/**output
nom nom nom
Woof!
 */

/**
 * Explaination
 * 
 * If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:
duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
 */
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."; };

let penguin = new Penguin();
console.log(penguin.fly());


/**Use a Mixin to Add Common Behavior Between Unrelated Objects
 * For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
 * Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane. */


let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("gliding, wooosh!");
    }
}

glideMixin(bird);
glideMixin(boat);


bird.glide();
boat.glide();

/**
 * Understand the Immediately Invoked Function Expression (IIFE)
A common pattern in JavaScript is to execute a function as soon as it is declared:
**/
(function () {
    console.log("Chirp, chirp!");
})();

/**This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. 
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
This pattern is known as an immediately invoked function expression or IIFE.
 */


/**
 * Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
 * This is possible because hatchedEgg is declared in the same context as getHatchedEggCount
 *  In JavaScript, a function always has access to the context in which it was created. This is called closure.
 */

function Bird() {
    let hatchedEgg = 10;

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/**
 * An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
 */

function glideMixin(obj) {
    obj.glide = function () {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
}

//We can group these mixins into a module as follows:
let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();

motionModule.glideMixin(duck);
duck.glide();

//eg2

let isCuteMixin = function (obj) {
    obj.isCute = function () {
        return true;
    };
};
let singMixin = function (obj) {
    obj.sing = function () {
        console.log("Singing to an awesome tune");
    };
};


let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();


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