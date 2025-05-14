let myName:string;
myName = "John Doe";
let myAge:number;
myAge = 30;
let myIsStudent:boolean;
myIsStudent = false;

let album:string | number;
album = "The Dark Side of the Moon";

console.log(myName);
console.log(myAge);
console.log(myIsStudent);
console.log(album);

const sum = (a: number, b: number): number => {
    return a + b;
}
let result = sum(5, 10);
console.log(result);


let postId: string | number;
postId = 123; 

let isActive: boolean | number | string;
isActive = "yes";
isActive = true;
isActive = 1;

let re:RegExp = /\w+/g;

