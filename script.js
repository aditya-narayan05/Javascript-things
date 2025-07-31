const user={
    username:"Adi",
    price:999,
   
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  //tells about current context
        
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); //referring to empty object , global ke andar object ni hai 

// function chai(){
//     let username="adi"
//     console.log(username);
    
// }
// chai()


// const chai = function(){
//      let username="adi"
//     console.log(this.username);
// }
// chai()

const chai = ()=>{       //arrow function
     let username="adi"
    console.log(this.username);
}

// chai()


// const addTwo=(num1,num2)=>{    //basic arrow function 
//     return num1 + num2
// }

// implicit return ;
// const addTwo=(num1,num2)=> num1 + num2

//curly braces use kie to return type likhna parega , ni use kie
// to ni likhna parega 

// const addTwo=(num1,num2)=> (num1 + num2)

//if we want to return an object
const addTwo=(num1,num2)=> ({username:"aditya)"})      

console.log(addTwo(1,2))


