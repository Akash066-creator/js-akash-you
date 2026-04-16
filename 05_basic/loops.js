// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

//table
// for (let i = 1; i <=10; i++) {
//     console.log("table for ",i);
    
//     for(let j = 1; j <= 10; j++){
//         const element = i*j;
//         console.log(element);
//     }
// }


// function display(array){
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// }
// const array = [10,20,30,40,50];
// console.log("Array is : ");

// display(array);
// array.push(100);
// array.push(200);
// console.log("After inserting element : " );

// display(array);
// array.pop();
// array.pop();
// console.log("After deleting elements : ");

// display(array);
// array.shift();   // delete element from begining
// console.log("After shifting = ");
// display(array);
// array.unshift(10); // insert a element at begining
// console.log("After unsift : ");
// display(array);

// break and continue

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(i);  
// }
// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         console.log("Detected 5");
//         continue;
//     }
//     console.log(i);  
// }

const users = [];
users.push("Akash");
users.push("Aman");
users.push("Kabir");
let i = 0;
while(i < users.length){
    console.log(users[i]);
    i++;    
}


