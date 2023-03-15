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