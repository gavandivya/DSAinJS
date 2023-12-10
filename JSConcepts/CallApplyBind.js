
var emp1 = { fname: "Divya", lname: "Gavandi" };
var emp2 = { fname: "Disha", lname: "Gavandi" };

function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.fname + " " + this.lname + ", " + greeting2);
}

//Call
invite.call(emp1, "Hello from Call", "How are u?");
invite.call(emp2, "Hi from Call", "How are u?");

//Apply
invite.apply(emp1, ["Hello from Apply", "How are u?"]);
invite.apply(emp2, ["Heyyy from Apply", "How are u?"]);


//Bind
var invite1 = invite.bind(emp1);
var invite2 = invite.bind(emp2);

invite1("Hello from Bind", "How are u?");
invite2("Hello from Bind", "How are u?");


-------------------------------------------------------------

const person1 = {
  firstName: 'Divya',
  lastName: 'Gavandi',
  fullName: function() {
      return `${this.firstName} ${this.lastName}`}
}
const person2 = {
  firstName: 'Disha',
  lastName: 'Parab'
}

//Bind - .bind(): Creates a new function with a specified "this" value and allows you to use it later with that context.
const person2Name = person1.fullName.bind(person2);
console.log(sayPerson2Name()) // Disha Parab


//Call - .call(): Invokes a function with a specified "this" value and individual arguments.

console.log(person1.fullname.call(person2));

//Apply - .apply(): Similar to .call(), but it takes an array of arguments.

fullName: function(city, country) {
      return `${this. firstName} ${this.lastName}, ${city}, ${country}`}
}

console.log(person1.fullName.apply(person2, ["Mumbai", "India"]));

//Currying

/**
 * In other words, instead of a function taking all arguments at one time, 
 * it takes the first one and returns a new function, which takes the second one and returns a new function, 
 * which takes the third one, and so on, until all arguments have been fulfilled.
 */

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)); // returns a function: b => c =>  1 + b + c
console.log(curryUnaryFunction(1)(2)); // returns a function: c => 3 + c
console.log(curryUnaryFunction(1)(2)(3)); // returns the number 6


function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3))


//callback
function callbackFunction(name) {
    console.log("Hello " + name);
}

function outerFunction(callback) {
    //let name = prompt("Please enter your name.");
    //callback(name);
}

outerFunction(callbackFunction);
