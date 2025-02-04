// Activity 1

// this is a repo for javascript

var num = 15
console.log(num);

let name = "Anurag"
console.log(name);

// Activity 2
const isLoggedIn = true
console.log(isLoggedIn);

// Activity 3
let score = 45;
let email = "anurag@gmail.com"
const havePass = false
let seconds = 2354752745384583452678n
let sym = Symbol('12')
const temp = null
const coursePrice = undefined

const user = {
    username: "theanuragkumawat",
    followers: 280,
    isAddicted: false
}

let rollNo = [1,2,3,4,5,6]

const addOne = function(number){
    return number + 1
}

console.log(`Value is: ${score} and type is ${typeof score}`);
console.log(`Value is: ${email} and type is ${typeof email}`);
console.log(`Value is: ${havePass} and type is ${typeof havePass}`);
console.log(`Value is: ${seconds} and type is ${typeof seconds}`);
console.log(sym, typeof sym);
console.log(`Value is: ${temp} and type is ${typeof temp}`);
console.log(`Value is: ${coursePrice} and type is ${typeof coursePrice}`);
console.log(`Value is: ${user} and type is ${typeof user}`);
console.log(`Value is: ${rollNo} and type is ${typeof rollNo}`);
console.log(`type is ${typeof addOne}`);

// Activity 4
let mySem = 2
console.log(mySem);
mySem = 3
console.log(mySem);

// Activity 5
const isReady = true
// isReady = false // We cannot reassign a variable with const 