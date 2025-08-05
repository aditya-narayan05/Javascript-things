//ES6

class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }

    encryptPassword() {
        return `${this.password}abc123`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const pass = new User("Aditya", "adi@gmail.com", "123")

console.log(pass.encryptPassword());
console.log(pass.changeUsername());


//behind the scene

function User(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password

}
User.prototype.encryptPassword = function(){
    return `${this.password}abc123`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const movie = new User("Hitman", "hit@gmail.com", "123")

console.log(movie.encryptPassword());
console.log(movie.changeUsername());