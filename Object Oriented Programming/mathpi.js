const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
//  node mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const adi ={
    name:"Aditya",
    score: "250",
    isProud:true,

    orderChai:function(){
        console.log("Chai ni bani");
        
    }
}

// console.log(adi);


// {
//   value: 'Aditya',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(adi, "name" , {
    // writable: false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(adi,"name"));

for (let [key,value] of Object.entries(adi)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
    
    
}