const score = 400;
console.log(score);
const balance = new Number(100);
let str = balance.toString()
console.log(`value is ${str} and type is = ${typeof(str)} and length = ${str.length}`);

let number = 123.8966;
console.log(number.toPrecision(4));

let value = 1000000;
console.log(value.toLocaleString('en-IN'));

// +++++++++   Math  ++++++++++++++++=
console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.1));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));

