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
    console.log(a);
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