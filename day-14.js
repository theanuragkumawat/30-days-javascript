// Activity 1
class Person {
    
    constructor(name, age,fullName) {
        this.name = name
        this.age = age
        this.fullName = fullName
    }
    greet() {
        return `Hello ${this.name} your age is ${this.age}`

    }
    updateAge(age) {
        this.age = age
    }
    static genericGreet() {
        return "Hello JS User!"
    }
    
    get fullName(){
        return this._fullName.toUpperCase()
    }
    set fullName(value){
        this._fullName = value
    }
}

const user1 = new Person('Anurag', 19)
console.log(user1.greet());
user1.updateAge(20)
console.log(user1.greet());

// Activity 2
class Student extends Person {
    static totalStu = 0
    constructor(name, age, StudentId) {
        super(name, age)
        this.StudentId = StudentId
        Student.totalStu++;
        console.log(Student.totalStu);

    }
    returnStudentId() {
        return this.StudentId
    }
    greet() {
        return `Hello ${this.name} your age is ${this.age} id is ${this.StudentId}`
    }
}
const student1 = new Student("Harry", 25, 785191)
console.log(student1.returnStudentId())
console.log(student1.greet());

// Activity 3
console.log(Person.genericGreet())

// Activity 4
const user2 = new Person("rahul",56,"rahul jangid")
console.log(user2.fullName)