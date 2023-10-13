class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    hello() {
        return "Hello, my name is " + this.firstName + " " + this.lastName
    }
}

let firstStudent = new Student("Marty", "McFly")
console.log(firstStudent.hello())