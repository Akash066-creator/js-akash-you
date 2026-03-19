"using strict";
const name = "Akash";
let age = 23;
console.log(name+" "+age);

console.log(`Hello my name is ${name} and ny age is ${age} `);

const str1 = new String("jamshedpur");
console.log(str1[0]);
console.log(str1);
                                // both are same
const str2 = "jamshedpur"
console.log(str2[0]);
console.log(str2);

console.log("methods------------------");

const str3 = "  Hello Akash";
let ans;

// str.length
ans = str3.length;
console.log(ans);

// toString()

let num = 10;
let toStr = toString(num);
console.log(typeof(num));
console.log(typeof(toStr));
console.log(toStr);

 

ans = str3.toUpperCase();
console.log(ans);

ans = str3.trim();  // remove space from starting and ending position
console.log(ans);

ans = str3.substring(0,7);  // start from 0 to 7 character
console.log(ans);
console.log(ans.charAt(3));  // indexing from 0

let url = "https://Akash.com/Akash%20yadav";
//url = url.replace('%20','-');
console.log(url.replace('%20','-'));

// Convert string to a array

console.log("-----------string to array-------------");

let sentence = "Hello Akash you are coder";
let words = sentence.split(' ');
console.log(words);