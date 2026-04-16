const coding = [1,2,3,4,5];
coding.forEach(function(val){
   // console.log(val);
});

// arraw function

coding.forEach((item) => {console.log(item);
});
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item,index,arr) => {
        console.log(item,index,arr);    
})

const myObject = [
    {
        language : "java script",
        founder : "Branden Eatch"
    },
    {
        language : "HTML",
        founder : "bill gates"
    },
    {
        language : "cpp",
        founder : "Bjarne Straustrup"
    },
]
myObject.forEach( (key) => {
    console.log(key.language);
    
})
myObject.forEach( (key) => {
    console.log(key);
    
})