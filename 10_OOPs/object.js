const user = {
    name : "Akash",
    age : 23,

    greet : function(){
        console.log("hello Akash");
        console.log(this.age);
        console.log(this);
    }
};

console.log(user.name);
console.log(user.greet());
console.log(this);


function User(username,isLogedIn,loginCount){
    this.username = username;
    this.isLogedIn = isLogedIn;
    this.loginCount = loginCount;
}

const user1 = new User("Akash",true,10);
const user2 = new User("Aman",false,3);

console.log(user1);
console.log(user2);