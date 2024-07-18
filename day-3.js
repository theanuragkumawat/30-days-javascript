// Activity 1

let number = -5
if (number > 0) {
    console.log("Number is positive");
}
else if (number < 0) {
    console.log("Number is negative");
}
else {
    console.log("Number is zero");
}

let personAge = 19
if (personAge >= 18) {
    console.log(`Your age is ${personAge}, so you can vote`);
}
else {
    console.log("Your age is below 18, so you cannot vote");
}

// Activity 2
let num1 = 3
let num2 = 2
let num3 = 4
if (num1 > num2) {
    if (num1 > num3) {
        console.log("First number is greater than second and third");
    }
    else {
        console.log("Number three is greater than first and second");
    }
}
else {
    if (num2 > num1) {
        console.log("Number two is greater than number one and three");
    }
    else {
        console.log("Number three is greater than first and second");
    }
}

// Activity 3

let weekDay = 5
switch (weekDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesady");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("hello");
        break;
}

const studentPercentage = 70

switch (true) {
    case studentPercentage >= 90:
        console.log("Your grade is A");
        break;
    case studentPercentage >= 80:
        console.log("Your grade is B");
        break;
    case studentPercentage >= 70:
        console.log("Your grade is C");
        break;
    case studentPercentage >= 60:
        console.log("Your grade is D");
        break;
    case studentPercentage < 60:
        console.log("Your grade is F");
        break;

}

// Activity 4
let mathNumber = 55

mathNumber % 2 == 0 ? console.log("Number is even") : console.log("Number is odd");

// Activity 5
let year = 2024
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log("Year is leap");
}
else {
    console.log("Not a leap year");
}