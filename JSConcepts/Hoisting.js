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