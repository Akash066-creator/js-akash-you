class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        // return `${this.password}abc`;
        console.log(`${this.password}abc`);
        
    }
};
const chai = new User("Akash" , "akash@gmail.com", "123");
//console.log(chai.encryptPassword());
chai.encryptPassword();


// under the hood


function user(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password;
}

// add some functionality
user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

user.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`;
}

const Tea = new user("tea", "tea@gmail.com","321");

console.log(Tea.encryptPassword());
console.log(Tea.changeName());