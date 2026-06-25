function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername(username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("Akash","akash@gmail.com","123");

console.log(chai);