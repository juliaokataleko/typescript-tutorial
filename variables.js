"use strict";
exports.__esModule = true;
var isBeginner = true;
var total = 0;
var name = 'Julien';
var sentence = "My name is " + name + "\nIam a beginner in Typescript";
console.log(sentence);
// subtypes
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Any value
var randomValue = 10;
randomValue = true;
randomValue = "JFK";
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable))
    console.log(myVariable.name);
// Liem type casting in otherers langs
// (myVariable as string).toUpperCase();
