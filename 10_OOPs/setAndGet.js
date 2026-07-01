class User {
    #private;
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.#private = "123";
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const Akash = new User("akash@User.com","abc");
console.log(Akash.password);

console.log(Akash._password);// _password looks like private but not is 
// koi rolk nahi raha hai ise access karne se bas hame pata nahi hai ki inside me iska name kya hai

//console.log(Akash.private); // but here we can't access.