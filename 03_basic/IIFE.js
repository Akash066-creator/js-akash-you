// chai();
// function chai(){
//     console.log("Hello Akash");
// }

function chai(){
    console.log("This is chai");
}
function test(){
    chai();
    console.log("this is Test");
}   
test();

// IIFE  1. gloable polution( variables declaration,,...)

//  (function fun_name() {} )();
(function one(){
    console.log("this is immediate function");
    
})();

(function one(name){
    console.log("this is immediate function0", name);
    
})("Akash");

( () => {
    console.log("IIFE in arrow ");
})();
