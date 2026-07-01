const Description = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(Description);

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("code fat gaya");
    }
}



// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

chai.name = "ginger tea";

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// change some property

Object.defineProperty(chai,'name', {
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name = "coffee"; // not work

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (const [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
        
}