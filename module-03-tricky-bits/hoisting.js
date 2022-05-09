// HOISTING - FUNCTION DECLARATION

// this works
sayHi(); // hey
function sayHi() {
  console.log('hey'); // hey
}

// because internally JavaScript hoists the function to the top
function sayHi() {
  console.log('hey'); // hey
}
sayHi(); // hey


// another example
anotherTest(); // 12
function anotherTest() {
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}


// HOISTING - VARIABLE DECLARATION

// JS will hoist declarations but NOT the actual value
console.log(age);
var age = 10; // undefined

// internally, JavaScript does this
var age;
console.log(age);
age = 10; // undefined // comes "too late to be logged"
