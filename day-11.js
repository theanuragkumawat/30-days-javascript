const myPromise = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Hello JS user");
        resolve()
    },2000)
})

myPromise.then(function(){
    console.log("Task completed");
    
})

const promiseTwo = new Promise(function (resolve,reject){
    setTimeout(function(){
        reject()
    },2000)
})

promiseTwo.catch(function(){
    console.log('Error');
    
})

// Activity 2 Chaining
const promiseThree = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve()
    }
    else{
        reject()
    }
})

promiseThree
.then(function(){
    console.log('task completed');
    
})
.catch(function(){
    console.log('error');
    
})
.finally(function(){
    console.log('Hello world');
    
})

// Activity 3
const promiseFour = new Promise(function (resolve){
    setTimeout(function(){
        resolve('Promise four resolved')
    },2000)
})

async function consumePromiseFour(){
    const response = await promiseFour
    console.log(response);
}
consumePromiseFour()

const promiseFive = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve('Succesfully Resolved')
    }
    else{
        reject('Something went wrong')
    }   
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Activity 4

fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json()
    
})
.then(function (data){
    console.log(data);
    
})

async function test(){
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data);
    
    
}

test()

// Activity 5
Promise.all([myPromise,promiseTwo,promiseThree,promiseFour,promiseFive]).then(function(values){
    console.log(values);
    
}).catch(function(err){
    console.log(err);
    
})

Promise.race([myPromise,promiseTwo,promiseThree,promiseFour,promiseFive]).then(function(values){
    console.log(values);
    
})
.catch(function(err) {
    console.log(err);
    
})