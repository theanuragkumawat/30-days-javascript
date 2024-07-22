// Activity 1
function evenOrOdd(number){
    if (number % 2 == 0) {
        console.log(`${number} is an even number`);
    }else{
        console.log(`${number} is an odd number`);
    }
}
evenOrOdd(0)

function squareNumber(number){
    console.log(number * number);
}

squareNumber(6)

// Activity 2

function maxNumber(a,b){
    console.log(`max number is ${Math.max(a,b)} `);
}
maxNumber(4,9)

function concatString(a,b){
    let c = a + b
    return c
}

console.log(concatString("Anurag", " kumawat"))

// Activity 3
const sumOfTwo = (a,b) => a + b
console.log(sumOfTwo(4,5));

const checkChar = (string) => {
    let result = string.includes('h')
    return result
    
}
console.log(checkChar("Hitesh"))

// Activity 4

function multiNumber(a, b = 1){ // Here b has default value 
    return a * b
}

console.log(multiNumber(4,5));

function greetings(name, age = 17){ //Default age
    console.log(`Hello ${name} we are glad to know that you are ${age} year old`);
}

greetings("Anurag")

// Activity 5

function hello(){
    console.log("Hello World!");
}

function nTimes(func, n){
    for(let i = 1;i <= n; i++){
        func()
    }
}
nTimes(hello, 7)