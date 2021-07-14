export {}

// Type inference
let a;
a = 10;
a = true;

let b = 20;
// b = true; // Error beacuse is initialized how number

// Multitype
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = 20;
