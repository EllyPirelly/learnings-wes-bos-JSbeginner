// hoisting - function declaration

sayHi();

function sayHi() {
    console.log('hey'); // hey
    console.log(add(10, 2)); // 12
}

function add(a, b) {
    return a + b;
}


// hoisting - variable declaration

/* console.log(age);
var age = 10; // undefined */

var age;
console.log(age);
age = 10; // undefined
console.log(age); // 10