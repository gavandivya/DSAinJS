//https://learnersbucket.com/examples/javascript/convert-a-string-to-uppercase-in-javascript/

// Convert a string to uppercase in javascript
let str = "divya can do it";
const toUpperCase = () => str.toUpperCase();
console.log(toUpperCase());
//Output  - DIVYA CAN DO IT


//Converting the first character of the string to uppercase
const firstLetterUpperCase = () => str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
console.log(firstLetterUpperCase());
//Output  - Divya can do it


//Converting only required characters to uppercase without using .UpperCase();
const arr = ['a', 'e', 'i', 'o', 'u'];
let str2 = "DiVYa CaN Do iT";
const requiredCharacters = () => {
    let temp = "";
    for (let char of str2) {
        if (arr.includes(char)) {
            temp += String.fromCharCode(char.charCodeAt() - 32);
        }
        else {
            temp += char;
        }
    }
    return temp;
}
console.log(requiredCharacters());
//Output  - DIVYA CAN DO IT

//Using array to make string uppercase using charCodeAt()
const usingCharCodeAt = () => {
    let str = 'a(b)cdef{1}g2hi3gk%!78l';
    let temp = "";
    for (let char of str) {
        let value = char.charCodeAt();
        if (value >= 97 && value <= 122) { // if lowercase turn it to uppercase
            temp += String.fromCharCode(char.charCodeAt() - 32);
        }
        else {
            temp += char;
        }
    }
    return temp;
}

console.log(usingCharCodeAt());
//Output  - A(B)CDEF{1}G2HI3GK%!78L
