const promiseOne = new Promise(function(resolve,reject){
    //Do an asycn task
    //DB calls,cryptography
    //network calls
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Aync 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Aditya",email:"adi@gmail.com"},
            {username:"Bharti",email:"bharti@gmail.com"}
        )
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = true
            if(!error){
                resolve({username:"aditya",password:"123"})
            }
            else{
                reject('ERROR: Something went wrong')
            }
        },2000)    
}) 

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
  
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
            let error = true
            if(!error){
                resolve({username:"bharti",password:"123"})
            }
            else{
                reject('ERROR: JS went wrong')
            }
        },2000)
});

async function consumePromiseFive(){
    try{
        const response =await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response=await fetch("https://dummyjson.com/users")
        
        
//     const data =await response.json()
//     console.log(data);  
//     } catch(error){
//         console.log(error);
        
//     }
// }
// getAllUsers()


fetch('https://dummyjson.com/users')
.then((response)=>{
    return response.json() 
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
 //in fetch the 404 error which is shown is a response not a reject - interview question generally