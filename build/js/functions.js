"use strict";
//Literal Types
let userName;
let userId;
userName = 'Jane';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(123);
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(10, 5));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(10, 5));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const addAllDefault = (a, b, c = 10) => {
    return a + b + c;
};
//Rest parameters
const total = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
};
logMsg(total(1, 2, 3, 4, 5));
//never type
const createError = (message) => {
    throw new Error(message);
};
const infiniteLoop = () => {
    while (true) {
        console.log('Infinite Loop');
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string') {
        console.log('String: ', value);
    }
    else if (typeof value === 'number') {
        console.log('Number: ', value);
    }
    else {
        createError('This should never happen');
    }
};
