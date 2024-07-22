// Activity 1
for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

// Activity 2
let number = 0
let i = 1
while (i <= 10) {
    number = number + i
    // console.log(number);
    i++;
}
console.log(`Sum of 1 to 10 is ${number}`);

let j = 10
while (j >= 1) {
    console.log(j);
    j--
}

// Activity 3
let k = 1
do {
    console.log(k);
    k++
} while (k <= 5);

let num = 5
let l = num
let fact = num
do {
    l--
    fact = fact * l
    // console.log(fact);
} while (l > 1);
console.log(`Factorial of ${num} is ${fact}`);

// Activity 4
let pattern = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*"
    }
    pattern += "\n"
}
console.log(pattern);

// Activity 5

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 Detected");
        continue;
    }
    console.log(i);
}

for(let i = 1;i <= 10;i++){
    if(i == 7){
        console.log("7 Detected");
        break
    }
    console.log(i)
}