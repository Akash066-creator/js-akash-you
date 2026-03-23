// dclaration

let arr1 = [1,2,3,4];
let arr2 = []; // empty array
let arr3 = new Array(1,2,3,4,5);
// assignment
arr1[2] = 100;
arr1.push(12);
// accessing
console.log(arr1);  // complete array
console.log(arr3[0]); // single element  arr[i]
// remove 
arr1.pop();
console.log(arr1);

// insert without shifting at begining

arr1.unshift(10);
console.log(arr1);

// searching element of array

console.log(arr1.includes(10));

// indext at element
console.log(arr1.indexOf(10));    // return index of element if present otherwise return -1;

// slice and splice

//slice : return the set of values *range(0,6) include 0 to till (6-1)th index
let newArr = [100,200,300,400,500,600];
console.log(newArr.slice(1,3));// 200,300 

// splice : return range of values (0,2) 2 excluded and orginal array also become change [300,400,500,600]
console.log(newArr.splice(0,2));  // [100,200,300]
console.log(newArr);






