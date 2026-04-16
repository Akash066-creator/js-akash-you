const myObject = {
    js : "Javascript",
    rb : "ruby",
    cpp : "c++"
};
for(const key in myObject){
    //console.log(key);
}
for(const key in myObject){
    //console.log(myObject[key]);
}
for(const key in myObject){
    //console.log(`${key} shortcut of : ${myObject[key]}`);
}

const programming = ["js","HTML","CSS"];
for(const key in programming){
    console.log(key);
}
for(const key in programming){
    console.log(programming[key]);
}
