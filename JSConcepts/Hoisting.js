function test1() {
    console.log(a);
    var a = 10;
    console.log(a);
}

test1();
/**
 * Output
 * undefined
 * 10
 ------------------------------------------------------*/

let a = 1;
function test2() {
    //console.log(a);
    let a = 2;
}

test2();
/**
 * Output - Error - Uncaught ReferenceError ReferenceError: Cannot access 'a' before initialization
 -----------------------------------------------------*/

//Referring questions from  - https://js.swapnadeep.com/docs/hoisting/
function test3() {

}


test3();


console.log(foo);
var foo = "foo";
//------------------
var foo;
console.log(foo);
foo = "foo";
//Output - undefined


//q1
console.log(foo); // undefined
var foo = "foo";
console.log(foo); // foo


//q2
console.log(foo); // ReferenceError: foo is not defined
console.log(typeof foo); // Output: undefined
foo = "foo";
console.log(foo); // foo


//q3
function foo() {
    console.log(foo); // undefined
    var foo = "foo";
}

foo();


//q4
var foo = "bar";
function greet() {
    console.log(foo); // undefined
    var foo = "foo";
}

greet();

//q5
foo(); // Hello
function foo() {
    console.log("Hello");
}

//q6
foo(); // TypeError: foo is not a function
var foo = function foo() {
    console.log("Hello");
};
//output - acts as a variable

//q7
function foo() {
    a = 100; // variable declared without let n var keyword becomes global
    var b = 200;
}

foo();
console.log(a); // 100
console.log(b);

//q8
function foo() {
    console.log(a); // ReferenceError: a is not defined
    a = 100;
}

foo();

//q9
var ab = 100;
function foo() {
    console.log(ab); // 100
    ab = 200;
}

foo();
