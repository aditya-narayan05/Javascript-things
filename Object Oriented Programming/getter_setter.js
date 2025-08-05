class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase() //_email private property
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}aditya`
    }
    set password(value){
         this._password = value
    }
}

const Adi = new User("bloom@blue.com","abc")
console.log(Adi.email);
console.log(Adi.password);