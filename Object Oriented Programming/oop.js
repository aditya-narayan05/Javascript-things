const user = {
    username:"aditya",
    logincount: 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details form db");
        // console.log(`Username:${this.username}`);
        // console.log(this);
    }
}
//  console.log(user.username);
//  console.log(user.getUserDetails());
//  console.log(this); //global context, empty paranthesis

//  const promiseOne = new Promise()
//  const date = new Date()  //new keyword is contructor function

function User(username,loginCount,isLoggedIn){
        this.username =username ; //left side value is variable, rigth is what we pass
        this.loginCount=loginCount;
        this.isLoggedIn=isLoggedIn;

        // return this  //implicitly define hota hai 
    }

    const userOne = User("aditya",12,true)
    const userTwo = User("Bharti",11,false) //this will override the previous code
    // console.log(userOne);


    const user1 = new User("aditya",12,true) //just adding new keyword
    const user2 = new User("Bharti",11,false)
    console.log(user1);
    console.log(user2);

    //new keyword ke baad empty object create hota hai
    //jisko instance bolte hai
    //step1: new object create hota hai
    //step2: constructor function call hota hai new keyword ke karan
    //step3: this keyword arguments jo likhe hai uske andar inject ho jate hai
    //step4: mil jaate function ke andar
    