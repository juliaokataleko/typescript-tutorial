"use strict";
exports.__esModule = true;
function add(num1, num2) {
    return num1 + num2;
}
var sum = add(10, 17);
console.log(sum);
// Optional parameters and default params
function calc(signal, num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
sum = calc('+', 10);
console.log(sum);
// optional params must be after required params
// Optional parameters and default params
function calculator(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
sum = calculator(20);
console.log(sum);
