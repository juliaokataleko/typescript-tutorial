export {}

function add(num1: number, num2: number): number {
    return num1 + num2;
}

let sum = add(10, 17);
console.log(sum);

// Optional parameters and default params
function calc(signal: string, num1: number, num2?: number): number {
    if(num2) 
        return num1 + num2;
    else return num1;
}

sum = calc('+', 10);
console.log(sum);

// optional params must be after required params

// Optional parameters and default params
function calculator(num1: number, num2: number = 10): number {
    if(num2) 
        return num1 + num2;
    else return num1;
}

sum = calculator(20);
console.log(sum);


