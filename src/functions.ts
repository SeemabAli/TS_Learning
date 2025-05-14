

//Type Alias
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];
type Guitarist = {
  name?: string;
  active: boolean;
  albums: StringOrNumberArray
}

type userId = StringOrNumber

//Literal Types
let userName: 'John' | 'Jane' | 'Doe';
let userId: 1 | 2 | 3 | 4 | 5;
userName = 'Jane'


//functions
const add = (a: number, b: number): number => {
  return a + b;
}

const logMsg = (message: any): void => {
  console.log(message);
}

logMsg('Hello World');
logMsg(123);
logMsg(add(1, 2));

let subtract = function (c: number, d: number): number {
  return c - d;
}

console.log(subtract(10, 5));

interface mathFunction {
  (a: number, b: number): number;
}
let multiply: mathFunction = function (c: number, d: number){
  return c * d;
}

logMsg(multiply(10, 5));


//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

//default parameters
const addAllDefault = (a: number, b: number, c: number = 10): number => {
  return a + b + c;
}

//Rest parameters
const total = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr);
}

logMsg(total(1, 2, 3, 4, 5));

//never type
const createError = (message: string): never => {
  throw new Error(message);
}
const infiniteLoop = (): never => {
  while (true) {
    console.log('Infinite Loop');
  }
}

const numberOrString = (value: number | string): void => {
  if (typeof value === 'string') {
    console.log('String: ', value);
  } else if (typeof value === 'number') {
    console.log('Number: ', value);
  } else {
    createError('This should never happen');
  }
}