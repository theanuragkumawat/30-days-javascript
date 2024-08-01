// Activity 1
const name = "Rohit Sain"
const age = 19
console.log(`His name is ${name} and age is ${age}.`);
console.log(`Hello
JS User!`);

// Activity 2
const arr = [1,2,3,4,5,6]
const [first,second] = arr

console.log(first,second);

const myBook = {
    title: "GOT",
    author: "George RR Martin",
    published: 2001
}
const {title: bookName, author,published: saal} = myBook
console.log(bookName,author,saal);

// Activity 3
const arr2 = ["A","B","C","D"]
let newArr = [...arr2,...["E","F","G","H"]]
console.log(newArr);

function sum(...n) {
    let realSum = 0;
    n.forEach(function(value){
        realSum += value
    })
    return realSum;
}
console.log(sum(4,6,7,8))

// Activity 4
function price(x,y=1){
    return x*y
}

console.log(price(23))

// Activity 5
const friendName = "hitesh"
const work = "Reteired"
const greet = function(){
    console.log("Hello JS User!");
}

const person = {friendName,work,greet}
console.log(person);

const anotherPerson = {[friendName]: 'hi',[work]: 'hard'}
console.log(anotherPerson);