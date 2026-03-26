// 1.........
// function greet(){
//     console.log("hello Akash");    
// }
// greet();

// [2] function with parameter...................
// function greet(name){
//     console.log("hello",name);
// }
// greet("Akash");

// [3] default argumnet .............
// function greet(name = "Akash"){
//     console.log("Name :",name);
// }
// greet();
// greet("kabir");

 // [4] adding two number...............
// function add(num1 , num2){
//     console.log(num1+num2);
    
// }
// add(10,20);

//[5] return values from function.............
function add(num1,num2){
    return num1+num2;
}
// console.log(add(10,20));
let res = add(10,20);
console.log(res);

// note .............

function addTow(num1 , num2){
    console.log(num1+num2);
}
addTow(2,"4");   // 24
addTow(3,"a");   // 3a
addTow(3,null);  //  3
let result = addTow(5,10);
console.log("Result : " ,result);  // undefind ,   : nothing returning

function fun(name = "A"){
    return `${name} just loged in`;   // string return 
}
console.log(fun());