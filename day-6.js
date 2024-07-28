// Activity 1
const numbers = [1,2,3,4,5]
// console.log(numbers);

// console.log(numbers[0])
// console.log(numbers[numbers.length - 1])

// Activity 2
numbers.push(6)
// console.log(numbers);
numbers.pop()
// console.log(numbers);

numbers.unshift(0)
// console.log(numbers);
numbers.shift()
// console.log(numbers);

// Activity 3
let newArray = numbers.map(function(value){
    // console.log(value);
    return value*2
})

// console.log(newArray);

const anotherArray = [1,2,3,4]
let anotherNewArray = anotherArray.filter(function(value){
    return value % 2 == 0
})
// console.log(anotherNewArray);

let sum = anotherArray.reduce(function(acc,currValue){
    return acc + currValue
},0)
// console.log(sum);

// Activity 4
for (let i = 0; i < anotherArray.length; i++) {
    const element = anotherArray[i];
    // console.log(element);
}

anotherArray.forEach((value) => {
    // console.log(value);
})

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix);
console.log(matrix[1][2]);