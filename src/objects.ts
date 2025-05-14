let stringArray: string[] = ["John", "Doe", "Jane"];
let guitars: (string | number)[] = ["Fender", 123, "Gibson"];
let mixedArray: (string | number | boolean)[] = ["John", 30, true];

let test = [];
let bands: string[] = [];
bands.push("Metallica");

//Tuple
let myTuple: [string, number, boolean] = ["John", 30, true];
let mixedTuple: [string, number | boolean, string] = ["John", 30, "Doe"];
let tupleArray: [string, number][] = [
  ["John", 30],
  ["Jane", 25],
  ["Doe", 40],
];

//Object
let myObject: object = {
  name: "John",
  age: 30,
  isStudent: false,
};

console.log(myObject);

//Object with type
interface Person {
  name?: string;
  age: number;
  isStudent: boolean;
  albums: (string | number)[];
}

let person: Person = {
  name: "John",
  age: 30,
  isStudent: false,
  albums: ["Fender", 123, "Gibson"],
};

let person2: Person = {
  name: "Jane",
  age: 25,
  isStudent: true,
  albums: ["Metallica", 456, "Gibson"],
};

person = person;

const greetPerson = (person: Person): string => {
  return `Hello ${person.name}, you are ${person.age} years old and you are ${
    person.isStudent ? "a student" : "not a student"
  }`;
};

console.log(greetPerson(person));
