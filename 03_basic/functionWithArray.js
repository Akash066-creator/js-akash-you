// function return values one by one and hold it into array rest form ...rest.......................................

// function calculateCarPrice(num1){
//     return num1;
// }
// console.log(calculateCarPrice(100));  // 100

// function calculateCarPrice(num1){
//     return num1;
// }
// console.log(calculateCarPrice(100,200,300,10,20)); //  100

// function calculateCarPrice(...num1){
//     return num1;
// }
// console.log(calculateCarPrice(100,200,300,10,20)); //[100,200,300,10,20]

function calculateCarPrice(...num1){
    return num1;
}
let res  = (calculateCarPrice(100,200,300,10,20)); // [100,200,300,10,20]
console.log(res);


// passing object to a fintion..........................

let user = {
    name : "Akash",
    age : 23
}

function handleObject(anyObject){
    console.log(anyObject.name);
    console.log(anyObject.age);
    console.log(anyObject);
}
handleObject(user);
handleObject({
    name : "Kabir",
    age : 23
});

// passing array to a function......................
let arr = [1,2,3,4,5];

function handleArray(anyArray){
    console.log(anyArray[2]);
    console.log(anyArray);

}
handleArray(arr);
handleArray([100,200,300,3400]);
