export {}

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Julien';

let sentence: string = `My name is ${name}
Iam a beginner in Typescript`;

console.log(sentence);

// subtypes
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Any value
let randomValue: any = 10;
randomValue = true;
randomValue = "JFK"

let myVariable: unknown = 10;

// console.log(myVariable.name);
// myVariable();

function hasName(obj: any): obj is {name: string} {
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)) 
    console.log(myVariable.name);
    

// Liem type casting in otherers langs
// (myVariable as string).toUpperCase();



