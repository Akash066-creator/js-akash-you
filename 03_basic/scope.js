// function one(){
//     name = "Akash";
//     function two(){
//         email = "akash@gmail.com";
//         console.log(name);
//     }
//     //two();
//     // console.log(email);  // error : "-email-" out of scope
// }
// one();
//two(); // error : "-tow-" out of scope

function one(){
    name = "Akash";
    two();
    console.log(`hello ${name} how are you`);
    function two(){
        email = "akash@gmail.com";
        console.log(name);
    }
    //two();
    // console.log(email);  // error : "-email-" out of scope
    console.log(`yaa i am fit`);
}
one();


// ++++++++++++++++++ Interesting ++++++++++++++++++++++++

//addOne();    it will work function calling before function definition
function addOne(num1){
    return num1 + 1; 
}
//addOne();
console.log(addOne(10));

// const res = function addTwo(num1){
//     return num1 + 2; 
// }
// //addTwo();
// addTwo(5);

