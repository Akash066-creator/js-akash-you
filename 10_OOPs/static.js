class User {
    constructor(usename){
        this.usename = usename;
    }
    logMe(){
        console.log(`Usename : ${this.usename}`);
    }
    static createId(){
        return "123";
    }
}

const Akash = new User("Akash");
//console.log(Akash.createId());
Akash.logMe();

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const Aman = new Teacher("Aman","aman@gmail.com");
// console.log()
Aman.logMe();