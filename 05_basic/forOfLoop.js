// for of  loop
const arr = [1,2,3,4,5];
for (const num of arr){
    //console.log(`For each num = ${num}`);  
}
const greetings = "Hello Akash";
for (const greet of greetings){
    //console.log(`For each num = ${greet}`);  
}

// Map

const map = new Map();
map.set("IN","India");
map.set("USA","United State Of India");
map.set("FR","France");
//console.log(map);

for(const [key, value] of map){
    console.log(key , ' :- ',value);
}
// we can not iterate object like for of loop
