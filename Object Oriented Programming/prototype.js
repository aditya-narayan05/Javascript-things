// let myName = "Aditya     "



// console.log(myName.trueLength);

myHeroes = ["Thor","SpiderMan","IronMan"]

let heroPower = {
    Thor:"Hammer",
    SpdierMan:"Web",
    IronMan:"Suit",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.SpdierMan}`);
        
    }
}
Object.prototype.aditya=function(){
    console.log(`Aditya is present in all objetcts`);
    
}             //factory function is create


Array.prototype.heyAditya = function(){
    console.log(`Aditya says hello`);
    
}

// heroPower.aditya()
// myHeroes.aditya() //power given to object , then all can use it as everything passes through object only
// heroPower.heyAditya()
// myHeroes.heyAditya()

//inheritance 

const User={
    name:"Bharti",
    email:"bharti@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignmet:'JS assignment',
    fullTime: true,

    __proto__: TeachingSupport
}
Teacher.__proto__= User //outdated approach

//modern approach

Object.setPrototypeOf(TeachingSupport,Teacher)  //prototypal inheritance



let anotherUserName = "Chipkali   "

String.prototype.trueLength = function(){
    
    console.log(`${this}`);
   
    console.log(`True length is ${this.trim().length}`);
    
}
anotherUserName.trueLength();
"Aditya".trueLength()
"IceCoffee".trueLength()