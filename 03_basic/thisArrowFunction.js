let login = {
    username:"Akash",
    price : 999,
    great : function(username,price){
        // this.username = username;
        // this.price = price;
        console.log(`username : ${this.username} and Price = ${this.price}`);
    }
};
// login.great("Kabir",199);

const user = {
    username : "Akash",
    price : 199,
    welcomeMessage : function(){
        console.log(`hello ${this.username}`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// test = () => {
//     console.log("hello Akash");
// }
// // test();

// test = (a,b) => {
//     return a+b;
// }
// console.log(test(1,4));

{
const test = (a,b) => a+b;
console.log(test(10,20));
}
// console.log(test(10,20));  // not accessible

const test = () => {
    console.log("hello");
}
test();

const addTwo = (num1 , num2) => {
    return num1+num2;
}
console.log(addTwo(10,20));
