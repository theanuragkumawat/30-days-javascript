// Activity 1
import { addTwoNum } from "./module_1.js";
console.log(addTwoNum(5, 6))

import { person } from "./module_1.js";
console.log(person.youtube);
console.log(person.instagram);
person.printHello()


// Activity 2
import { add, sub, multi, divide } from './maths.js'
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multi(2, 3));
console.log(divide(2, 3));

import sayHello from "./maths.js";
sayHello()


// Activity 3
import * as object from './entire.js'
console.log(object);

console.log(object.name);
console.log(object.isLoggedIn);
console.log(object.generateRandomNumber())
object.sayMyName('Anurag')


// Activity 4
import pkg from "lodash";
const { chunk } = pkg
const arr = [1, 2, 3, 4, 5, 6, 7]
const chunkArr = chunk(arr, 2)
console.log(chunkArr);

import axios from "axios";
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    const data = response.data
    console.log(data);
    
})

.catch(err => {
    console.log(err);
    
})