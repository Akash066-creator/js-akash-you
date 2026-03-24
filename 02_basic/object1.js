// literals
// constructor
let mySym = "A";
let person = {
    name : "Akash Yadav",
    age : 22,
    mySym : "B",
    city : "prayagraj",
    greet(name,age) {
        this.name= name;
        this.age= age;
        console.log(this.name);
    }
};
console.log(person);
person.greet("kabir",23);
console.log(person);
// console.log(person["name"]);
// console.log(person["mySym"]);
//  Object.freeze(person);
//  person.city="Lucknow";
// //  console.log(person["city"]);
// console.log(person);


//let obj = new Object();
                                        //both are empty object
let m1 = {};
m1.name="Samsung";
m1.model="S16";
m1.price=20000;
console.log(m1);

// constructor method

function Mobile(name,price){
    this.name=name;
    this.price=price;
}
let m = new Mobile("Samsung",20000);
let m2 = new Mobile("Apple",60000);

console.log(m);
console.log(m2);



