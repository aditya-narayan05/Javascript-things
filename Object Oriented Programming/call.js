function SetUserName(username){
    //complex calculation
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUserName.call(this,username)  //reference hold karne ke lie.
    
    this.email = email;
    this.password = password;

}



const apple = new createUser("aditya","adi@gmail.com","12345");
console.log(apple);