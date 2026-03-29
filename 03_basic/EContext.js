function one(){
    console.log("one");
    two();
}
function two(){
    console.log("tow");
    three();
}
function three(){
    console.log("three");
}
one();

// one
// two
// three 

// call sstack
//  |  three  |   1. -> removed
//  |  two    |   2. -> removed
//  |  one    |   3. -> removed
