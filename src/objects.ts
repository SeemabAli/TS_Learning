let stringArray: string[] = ["John", "Doe", "Jane"];
let guitars: (string | number)[] = ["Fender", 123, "Gibson"];
let mixedArray: (string | number | boolean)[] = ["John", 30, true];

let test = []
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