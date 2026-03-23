let arr1 = [1,2,3,4];
let arr2 = ['a','b'];
//arr1.push(arr2);     // treated as arr2 as a data element

// console.log(arr1[4][1]);   // b
// console.log(arr1);       // // [1,2,3,4,['a','b']]

// mearge two array

// let res = arr1.concat(arr2);
// console.log(res);   // [1,2,3,4,'a','b']

// console.log(res[4]);  // a

// let res = [...arr1,...arr2];
// console.log(res);

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

// spread
let newArr = [1,2,3,[4,5],6,[7,8,[9,0]]];
console.log(Array.isArray(newArr));
console.log(Array.from("Akash"));