"use strict";
let stringArray = ["John", "Doe", "Jane"];
let guitars = ["Fender", 123, "Gibson"];
let mixedArray = ["John", 30, true];
let test = [];
let bands = [];
bands.push("Metallica");
//Tuple
let myTuple = ["John", 30, true];
let mixedTuple = ["John", 30, "Doe"];
let tupleArray = [
    ["John", 30],
    ["Jane", 25],
    ["Doe", 40],
];
//Object
let myObject = {
    name: "John",
    age: 30,
    isStudent: false,
};
console.log(myObject);
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    albums: ["Fender", 123, "Gibson"],
};
let person2 = {
    name: "Jane",
    age: 25,
    isStudent: true,
    albums: ["Metallica", 456, "Gibson"],
};
person = person;
const greetPerson = (person) => {
    return `Hello ${person.name}, you are ${person.age} years old and you are ${person.isStudent ? "a student" : "not a student"}`;
};
console.log(greetPerson(person));
//ENUMS
var Grade;
(function (Grade) {
    Grade["A"] = "1";
    Grade["B"] = "2";
    Grade["C"] = "3";
    Grade["D"] = "4";
    Grade["F"] = "5";
})(Grade || (Grade = {}));
let student = {
    name: "John",
    age: 30,
    grade: Grade.A,
};
console.log(student);
