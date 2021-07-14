"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * Public: for free accessibility
 * Private: for acessebility only within the class
 * Protected: for accessibility with a class and the class deriveds from it
 */
var Person = /** @class */ (function () {
    function Person(name, country) {
        this.name = name;
        this.country = country;
    }
    Person.prototype.greet = function () {
        console.log("Good Morning " + this.name + ", you are from " + this.country + ".");
    };
    return Person;
}());
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Juju Kata");
console.log(emp1.employeeName);
emp1.greet();
console.log("________________________");
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Floripa");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
console.log("________________________");
// Accessor and Modifiers
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.yourCountry = function () {
        console.log("" + this.country);
    };
    return Student;
}(Person));
var student1 = new Student('Isabel da Costa', "Angola");
student1.greet();
// student1.yourCountry()
