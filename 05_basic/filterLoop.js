const myNums = [1,2,3,4,5,6,7,8,9];
myNums.filter(function (val){
    //console.log(val);
    
});
myNums.filter( (val) => {
    //console.log(val);
    
});
let ans = myNums.filter( (val) => val > 4);
//console.log(ans);


const record = [
    {name : "Akash" , age : 23, branch : "CSE"},
    {name : "Hemant" , age : 24, branch : "CSE"},
    {name : "Aman" , age : 21, branch : "ECE"},
    {name : "Akash" , age : 20, branch : "ME"},
    {name : "Varun" , age : 25, branch : "BE"}
];
let userRecord = record.filter( (ur) => ur.age >= 24);
console.log(userRecord);

userRecord = record.filter( (ur) => {
         return (ur.name === "Akash" && ur.age === 23);
    }
);

console.log(userRecord);