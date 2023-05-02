function f(a, b, c) {
    m = ["1", "2", "3"];
    a = 3;
    b[0] = "X";
    c.first = false;
}

var x = 4;//primitive so non mutable
var y = ["A", "B", "C"]; // mutable
var z = { first: true }; //mutable

f(x, y, z)
console.log(x, y, z);