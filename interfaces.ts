export {}

// Interfaces

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
};

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Julien",
    lastName: "Kataleko"
};

fullName(p);