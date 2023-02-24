//https://learnersbucket.com/examples/javascript/convert-a-string-to-uppercase-in-javascript/

// Convert a string to lowercase in javascript
let str = "DIVYA CAN DO IT";
const toLowerCase = () => str.toLowerCase();
console.log(toLowerCase());
//Output  - DIVYA CAN DO IT

//Converting the first character of the string to lowercase
const firstLetterLowerCase = () => str.slice(0, 1).toLowerCase() + str.slice(1, str.length);
console.log(firstLetterLowerCase());
//Output  - Divya can do it

//Converting only required characters to lowercase without using .toLowerCase();
const arr = ['A', 'E', 'I', 'O', 'U'];
let str2 = "dIvyA cAn dO It";
const requiredCharacters = () => {
    let temp = "";
    for (let char of str2) {
        if (arr.includes(char)) {
            temp += String.fromCharCode(char.charCodeAt() + 32);
        }
        else {
            temp += char;
        }
    }
    return temp;
}
console.log(requiredCharacters());
//Output  - DIVYA CAN DO IT

//Using array to make string lowercase using charCodeAt()
const usingCharCodeAt = () => {
    let str = 'A(B)CDEF{1}G2HI3GK%!78L';
    let temp = "";
    for (let char of str) {
        let value = char.charCodeAt();
        if (value >= 64 && value <= 90) { // if uppercase turn it to lowercase
            temp += String.fromCharCode(char.charCodeAt() + 32);
        }
        else {
            temp += char;
        }
    }
    return temp;
}

console.log(usingCharCodeAt());
//Output  - A(B)CDEF{1}G2HI3GK%!78L
