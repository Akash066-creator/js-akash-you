"using strict";

// Array in js
let arr = [10,20,30,40,50];  // with same data type
for(let i = 0; i<5; i++){
    console.log(arr[i]);
}
console.log("=-------------------Array value---------------------------");
let arr1 = [1001,"Akash",23];  // with different data types
for(let i = 0; i<3; i++){
    console.log(arr1[i]);
}

// Object in js
console.log("------------------Object values ---------------------------");
let obj1 = {
    name : "Akash",
    age : 23,
    roll : 66
};

console.log("Name = " , obj1.name);   // print  seperate values
console.log("Age = " + obj1.age);    //  concatenate both string 
console.log("Roll no. = " + obj1.roll);

let obj2  = obj1;
obj2.name = "Akash Yadav";
console.log(obj1.name);
console.log(obj2.name);


// function 
console.log("-------------------Function------------------")

function greet(){
    console.log("Hi Akash");
}
greet();

function add(a  , b){
    console.log("Sum = " , a+b);
}
add(10,20);