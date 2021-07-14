export {}

/**
 * Public: for free accessibility
 * Private: for acessebility only within the class
 * Protected: for accessibility with a class and the class deriveds from it
 */

class Person {
    public name: string;
    public country: string;

    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }

    greet() {
        console.log(`Good Morning ${this.name}, you are from ${this.country}.`);
    }
}

class Employee {

    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }

}

let emp1 = new Employee("Juju Kata");
console.log(emp1.employeeName);
emp1.greet();

console.log("________________________");

// Inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log("Manager delegating tasks");        
    }
}

let m1 = new Manager("Floripa");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

console.log("________________________");

// Accessor and Modifiers
class Student extends Person {
    
    yourCountry() {
        console.log(`${this.country}`);
    }
    
}

let student1 = new Student('Isabel da Costa', "Angola");
student1.greet()
// student1.yourCountry()

