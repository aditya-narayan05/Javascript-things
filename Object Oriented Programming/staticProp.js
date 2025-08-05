class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const Aditya = new User("Aditya")
// console.log(Aditya.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const IPhone = new Teacher("iphone","i@gmail.com")
console.log(IPhone.createId());
