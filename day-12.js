// Activity 1
function hello(){
    throw new Error('Something went wrong!')
}
try {
    hello()
} catch (error) {
    console.log(error);
    
}

function divide(a,b){
    if(b==0){
        throw new Error('Enter valid input!')
    }else{
        return a/b
    }
}

try {
    console.log(divide(10,0))
} catch (error) {
    console.log(error);
    
}

// Activity 2
try {
    console.log(hitesh);
    
} catch (error) {
    console.log(error);
    
} finally{
    console.log('Code succesfully executed');
    
}

// Activity 3
class customError extends Error{
    constructor(err){
        super(err)
    }
}

function throwError(){
    throw new customError('Something wrong!')
}

try {
    throwError()
} catch (error) {
    if(error instanceof customError){
        console.log(error);
        
    }
}

function account(name) {
    if(name == ''){
        throw new Error('Name is not valid')
    }else{
        this.name = name
    }
}
try {
    account('')
} catch (error) {
    console.log(error);
    
}

// Activity 4
 const myPromise = new Promise(function(resolve,reject){
    let error = Math.random() > 0.5
    if(!error){
        resolve()
    }else{
        reject()
    }
 })

 myPromise.then(function(){
    console.log("Promise is resolved");
    
 })
 .catch(function(){
    console.log("Promise is rejected");
    
 })

 const promiseTwo = new Promise(function(resolve,reject){
    let error = Math.random() > 0.5
    if(!error){
        resolve()
    }else{
        reject("Promise two is rejected")
    }
 })

 async function consumePromiseTwo() {
    try {
        console.log("Promise two is consumed");
        
    } catch (error) {
        console.log(error);
        
    }
 }

 consumePromiseTwo()

//  Activity 5
fetch('https://invalid-url.com/data')
.then(function(response){
    let data = response.json()
    return data
})
.then(function(data){
    console.log(data);
    
}).catch(function(err){
    console.log(err.name);
    console.log(err.message);
    
})

async function invalidFetch() {
    try {
        const response = await fetch('https://invalid-url.com/data')
        const data = await response.json()   
        console.log(data);
          
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        
    }
}
invalidFetch()