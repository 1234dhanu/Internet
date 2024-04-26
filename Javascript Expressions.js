// Basic of JS

console.log("Hello World");
console.log(1 + 2);

const PI = 3.1415;
console.log("PI value is");

var x = 1;
console.log(x);
var y = 1.4;
console.log(y);
var z = "Hello";
console.log(z);
var a = [x, y, z];
console.log(a);
var lst = [1, "0", [1,2], 4.8, true];
console.log(lst);
// var obj = {
//     name : "Mr X",
//     job : "Hacker",
//     age : 32,
//     address : "Bengaluru"
// }
// console.log(obj);

// let phone = {
//     company: {
//         name : "Apple",
//         model : "14pro"
//     },
//     name : 'Galaxy',
//     size : 6.5,
//     weight : 200,
//     color : ['blue', 'red', 'green']
// }

// let str1 = 'Hello';
// let str2 = "Hello";
// let str3 = `Hello World`;
// console.log(str3);

let outcome = [
                [1, 2, 3, 4, 5, 6], 
                [7, 8, 9, 10, 11, 12], 
                [13, 14, 15, 16, 17,18]
            ]
console.log(outcome[1][3]);
console.log(outcome[2][5]);

let d3 = [
    [
        [1,2], [2, 1]
    ],
    [
        [3, 4], [4, 3]
    ],
    [
        [5, 6], [6,5]
    ]
]


// Expressions
// Arithmetic Operations
let sum = 1 + 1.4; 
let dif = 1 - 1.4; 
let mul = 2 * 4; 
let div = 4 / 2; 
let mod = 5 % 2; 
let pow = 5 ** 2; 
let ex1 = 2 * (1 - 6 / 2); 
console.log(sum, dif, mul, div, mod, pow, ex1);

// Boolean Operations
let isMore = 2 >= 4; 
let isLess = 5 < 10; 
let bool1 = isMore || isLess; 
let bool2 = isMore && isLess; 
let isEqual1 = 0 == '0';
let isEqual2 = 0 === '0';
let notEqual1 = 0 != '0'; 
let notEqual2 = 0 !== '0'; 
console.log(isMore, isLess, bool1, isEqual1, isEqual2, notEqual1, notEqual2);

// String Operations
let str1 = 'Hello';
let str2 = 'World';
let str3 = str1 + ' ' + str2;
let num = 42;
let str4 = `The answer to universe is ${num}.`;
console.log(str1, str2, str3, num, str4);

// Array Operations
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1 + arr2; 
let arr4 = [...arr1, ...arr2];
console.log(arr1, arr2, arr3, arr4);

// Object Operations
let obj1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj1)); 
let obj2 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj2));
let isEq1 = obj1 == obj1; 
let isEq2 = obj2 === obj2; 
console.log(isEq1);
console.log(isEq2);