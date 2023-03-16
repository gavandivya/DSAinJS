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