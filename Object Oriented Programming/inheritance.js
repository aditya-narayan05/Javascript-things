class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)  //super keyword automatically use this behind the scene ,username set and direct access use ho jae

        this.email=email,
        this.password=password
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`);
        
        
    }
}
const people = new Teacher("Bharti","bharti@gmail.com","693")

people.addCourse()

const newPeople = new User("Aditya")

newPeople.logMe()

console.log(people instanceof User);

