/* WAYS TO DECLARE A FUNCTION */

/* function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
doctorize('bla'); */

// ANONYMOUS FUNCTION ------------------------------
// defining them on their own like here as a pure statement is not valid JavaScript, will throw an error
/* function (firstName) {
  return `Dr. ${firstName}`; // Uncaught SyntaxError: Function statements require a function name
} */

// FUNCTION EXPRESSION ------------------------------
// store a function as a value in a variable
/* const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}
doctorize('dude'); // "Dr. dude" */


// HOISTING of regular function ------------------------------
// console.log(doctorize('wes')); // Cannot access 'doctorize' before initialization
// console.log(doctorize2('woah')); // Dr. woah
/* // Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}
// Regular Function - hoisted
function doctorize2(firstName) {
  return `Dr. ${firstName}`;
} */

// ARROW FUNCTION ------------------------------
// start with regular function
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}
console.log(inchToCM(3)); // 7.62

// shrink it down like this
function inchToCM(inches) {
  return inches * 2.54;
}
console.log(inchToCM(3)); // 7.62

// assign to a var, function is now anonymous
const inchToCM1 = function(inches) {
  return inches * 2.54;
}
console.log(inchToCM1(3)); // 7.62

// arrow function (explicit return)
const inchToCM2 = (inches) => {
  return inches * 2.54;
}
console.log(inchToCM2(3)); // 7.62

// arrow function (implicit return)
/* const inchToCM3 = (inches) => inches * 2.54; */
// as there's only one argument passed, parenthesis can be deleted
const inchToCM3 = inches => inches * 2.54;
console.log(inchToCM3(3)); // 7.62

// another example - regular function
function add(a, b = 3) {
	const total = a + b;
	return total;
}
console.log(add(1, 2)); // 3

// another example - arrow function
const add1 = (a, b = 3) => a + b;
console.log(add1(1, 2)); // 3

// HOW TO RETURN AN OBJECT
/* function makeADonut(first, last) {
	const donut = {
		name: `${first} ${last}`,
		age: 0
	}
	return donut;
}
console.log(makeADonut('chocolate', 'vanilla')); // {name: "chocolate vanilla", age: 0} */

// arrow function
/* const makeADonut = (first, last) => {
  const donut = {
    name: `${first} ${last}`,
	  age: 0
	}
	return donut;
}
console.log(makeADonut('chocolate', 'vanilla')); // {name: "chocolate vanilla", age: 0} */

// even less
/* const makeADonut = (first, last) => {
    return {
      name: `${first} ${last}`,
		  age: 0
	}
}
console.log(makeADonut('chocolate', 'vanilla')); // {name: "chocolate vanilla", age: 0} */

// implicit return - won't work
/* const makeADonut = (first, last) => { name: `${first} ${last}`, age: 0 };
console.log(makeADonut('chocolate', 'vanilla')); // Unexpected token */

// implicit return - works
const makeADonut = (first, last) => ({ name: `${first} ${last}`, age: 0 });
console.log(makeADonut('chocolate', 'vanilla')); // {name: "chocolate vanilla", age: 0}


// IIFE ------------------------------
/* (function() {
  console.log('run the IIFE'); // run the IIFE
	return 'Something witty here'; // "Something witty here"
})(); */

// passing a parameter
(function(age) {
  console.log('run the IIFE'); // run the IIFE
	return `Something witty here and age ${age}`; // "Something witty here and age 5"
})(5);

// METHOD ------------------------------
const wes = {
  name: 'Wes Bos',
  sayHi: function() {
    console.log('Hey Wes');
    return 'Hey Wesser';
  }
}
console.log(wes); // Hey Wes
console.log(wes.sayHi()); // Hey Wesser

// another example method
const functionmethod = {
	name: 'Whatever Ever',

	// METHOD
  // create a property on your object and assign it a function
	sayHi: function() {
		console.log("Hey there");
		return "Hey there";
	},

	// SHORTHAND METHOD
	yellHi() {
		console.log("YELLLL without function keyword");
	},
	// same as above but with function keyword
	/* yellHi: function() {
		console.log("YELLLL with function keyword");
	}, */

  // ARROW FUNCTION
  wisperHi: () => {
    console.log('hii');
  }
}


// CALLBACK FUNCTIONS
// click callback, not invoked at this point in time
/* const button = document.querySelector('.click-me');
button.addEventListener('click', functionmethod.yellHi); */

// callback functions can be declared outside of handlers
/* const button = document.querySelector('.click-me');
function handleClick() {
  console.log('you clicked!');
}
button.addEventListener('click', handleClick); */

// pass an anonymous function
// is NOT a callback function right here
const button = document.querySelector('.click-me');
button.addEventListener('click', function() {
  console.log('inside anonymous');
});

// timer callback
setTimeout(functionmethod.yellHi, 1000);

// anonymous function
setTimeout(function() {
	console.log('Done');
}, 1000);

// arrow function
setTimeout(() => {
	console.log('arrow done');
}, 1000);