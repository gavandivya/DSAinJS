// String methods and leetcode questions
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

//Extracting substring
const str = "Hie how are you"
console.log(str.substring(0,2)); //0-1 -> Hi
console.log(str.substring(1)); //starts from 1-end -> ie how are you
console.log(str.substring(7,-1)); //reverse till 7 -> Hie how

//slice
console.log(str.slice(0,5));

//Converting case
console.log(String(null)); //"null"
console.log(String(true)); //"true"
console.log(String(undefined)); //"undefined"
console.log(String(1)); //"1"
console.log(String({name:"Divya"})); //[object Object]
console.log(String(JSON.stringify({name:"Divya"}))); //{"name":"Divya"}


//Change case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log("A"==="a"); //A = 65 a = 97 diff 32
console.log(str.charCodeAt(0)); //H = 72
console.log(String.fromCharCode(72)); //H 

//String comparision
console.log(string.localeCompare(str)); //-1
console.log('hiee'.localeCompare("hiee")); //0
console.log('hiee'.includes("hiee")); //true

//split n join
const strr = "afvbddecd"
console.log(strr.split(""));
console.log(strr.split("").join("-"));
console.log(str.split(" ").join(" "));
console.log(['a','b','c'].join(" and "));


//DSA questions
//Q1 - Truncate a string and if it reaches the max length then add it with ellipsis character ...

function truncate(str,max){
    return str.length > max ? `${str.slice(0, max)}...`:str;
}

console.log(truncate("How are u,I hope u are great",9))

//Q2 Palindrome Number 121 -> true, 10 -> false

function isPalindrome(num){
    return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}

console.log(isPalindrome(123)); //123 - "123" - ['1','2','3'] - ['3','2','1'] - 321
console.log(isPalindrome(101)); //101 - "101" - ['1','0','1'] - ['1','0','1'] - 101


//Q3 Hamming distance  - Find distance between 2 string

//String should be of same length then only we can find out

function hamingDistance(str1,str2){
    let count = 0;
    if(str1.length !== str2.length){
        return "string must b same length";
    }
    else{
        for (let i = 0; i < str1.length; i++) {
            if(str1[i] !== str2[i]){
                count = count+1;
            }  
        }
    }
    return count;
}

console.log(hamingDistance("abcd","abgh")); //2
console.log(hamingDistance("Hiee","Hiee")); //0

const num1 = 2;
const num2 = 5;

//to convert in decimal use toString(2)
console.log(num1.toString(2),num2.toString(2))

function hamingNum(num1,num2){
    let count = 0;
    num1 = num1.toString(2);
    num2 = num2.toString(2);
    if(num1.length < num2.length){
        while(num1.length !== num2.length){
            num1 = "0"+num1;
        }
    }
    else if(num1.length  > num2.length){
        while(num2.length !== num1.length){
            num2 = "0"+num2;
        }
    }

    for (let i = 0; i < num1.length; i++) {
        if(num1[i] !== num2[i]){
            count = count+1;
        }  
    }
    return count;

}

console.log(hamingNum(2,9))
 

//Q4 Valid Anagram 1st approach
const isAnagram1 = (str1,str2)=>{
    str1 = str1.split("").sort().join(""); 
    str2 = str2.split("").sort().join(""); 
    return str1 === str2;
}

console.log(isAnagram1("rat","tar"));
console.log(isAnagram1("car","tar"));
console.log(isAnagram1("anagram","nagaram"));

//2nd approach
const isAnagram = (str1,str2)=>{
    if(str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]]||0)+1;
        obj2[str2[i]] = (obj2[str2[i]]||0)+1;
    }
    console.log(obj1);
    console.log(obj2);


    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("rat","tar"));
console.log(isAnagram("car","tar"));
console.log(isAnagram("anagram","nagaram"));

