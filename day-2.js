// Activity 1
console.log(2 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(9 / 3);
console.log(10 % 3);

// Activity 2
let num1 = 4
num1 += 4;
console.log(num1);

let num2 = 4
num2 -= 1;
console.log(num2); 

// Activity 3
const a = 5
const b = 6
if (b > a) {
    console.log(`The value of b is greater than a`);
}

let c = 11
let d = 12
console.log(d >= c);

if("2" == 2){
    console.log("Hello JS user!");
}

if(2 === 2){
    console.log("Welcome again!");
}

// Activity 4
const name = "Anurag"
const email = "anurag@chatgpt.com"
const LoggedWithGoogle = true;
const isLoggedIn  = true

if(name && isLoggedIn == true){
    console.log("You can buy courses");
}

if(LoggedWithGoogle || email){
    console.log("You can buy courses again");
}

if(name != null){
    console.log("Continue JS user!");
}

// Activity 5
const aNumber = -5

aNumber >= 0 ? console.log("Number is positive") : console.log("Number is negative");