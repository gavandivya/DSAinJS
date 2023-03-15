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
