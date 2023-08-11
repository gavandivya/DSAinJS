// String methods and leetcode questions
//Methods
/*
replace()
replaceAll()
trim()
indexOf()
charAt()
length()
concat()
lastIndexOf()
startsWith()
endsWith()
slice()
toUpperCase()
toLowerCase()
includes()
join()
split()
localeCompare()
*/ 

// Implementation Starts

//Initializing string
const string = new String("Hie");
const string1 = "Hiee";
const user = "divya"
const string2 = `Hiee ${user}
How are you`;
console.log`hieee! How are you ${user} I hope u are good`; // ['hieee! How are you','I hope u are good'],'divya'

//string length
console.log(string.length); //3

//accessing char
console.log(string[4]); //return undefined if not present
console.log(string.charAt(4)); // return empty string if not present
console.log(string.charAt(2)); // e

//loop

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);    
}

//Modifying string
string[3] = "b"; //can't modify becaz imutable
console.log(string.replace('i','a')); //Hie-> Hae  only first instance is replaced
console.log(string.replaceAll('i','a')); //Hie-> Hae  all instance is replaced

//Concat
const newStr = string.concat(" I hope u dng great!")
console.log(newStr); //Hie I hope u dng great!

//trim
const stringWithspace = ("    Great   ")
console.log(stringWithspace.trim().concat(" Bye")); //Great Bye


//searching
console.log(string.indexOf("i")); //i
console.log(string.indexOf("ie")); //i

console.log(string.lastIndexOf("i")); //i
console.log(string.lastIndexOf("iee")); //return -1 if not present

console.log(string.startsWith("H")); //true
console.log(string.endsWith("e")); //true

