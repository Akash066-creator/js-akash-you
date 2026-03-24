//let myObj = new Object();

let myObj = {}
console.log(myObj);

let user = {
    email : "akash@gmail.com",
    nomeny : {
        name : "Aman"
    }
}
console.log(user["email"]);
console.log(user);
console.log(user.nomeny["name"]);

let obj1 = {
    nameA : "Stuti",
    age  : 22,
    email : "stuti@gmail.com",
    friend : {
        name : "Anjli" ,
        city : "Agra"
    }
};
let obj2 = {
    nameB : "Mehak",
    city : "Jamshedpur"
};

// 1 method
   let obj3 = {obj1,obj2};

// 2 method 
  let obj4 = Object.assign({},obj1,obj2);

// 3 method spread method
    let obj5 = {...obj1,...obj2};
console.log(obj5);

let users = {
    name : "AKash",
    id : 66,
    email : "akash@gmail.com"
}
// console.log(Object.keys(users));
// console.log(Object.values(users));
let arr1 = Object.keys(users);
let arr2 = Object.values(users);

console.log(arr1);
console.log(arr2);


