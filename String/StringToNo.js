//6 ways to convert string to a number in javascript

//Using Number() function.
const number = "25"
console.log(typeof (number));
console.log(typeof (Number(number)));//Using Number() function.
console.log(typeof (parseInt(number)));//Using parseInt()
console.log(typeof (parseFloat(number)));//Using parseFloat()
console.log(typeof (Math.floor(number))); //Using Math.floor() 
console.log(typeof (+number)); //Using unary operator
console.log(typeof (number * 1)); //Multiplying the string by 1 using * 1



