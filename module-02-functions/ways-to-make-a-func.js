/* WAYS TO DECLARE A FUNCTION */

/* function doctorize(firstName) {
    return `Dr. ${firstName}`;
}
doctorize('bla'); */

// anonymous function
// defining them on their own as a pure statement is not valid JavaScript, will throw an error
/* function (firstName) {
    return `Dr. ${firstName}`; // Uncaught SyntaxError: Function statements require a function name
} */

// function expression
// store a function as a value in a value
/* const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
}
doctorize('dude'); // "Dr. dude"
 */


// won't work
// console.log(doctorize('wes')); // Cannot access 'doctorize' before initialization
// works
/* console.log(doctorize2('woah')); // Dr. woah

const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
}

function doctorize2(firstName) {
    return `Dr. ${firstName}`;
} */

// error function
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

// how to return an object
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

/* IIFE */
/* (function() {
    console.log('run the IIFE'); // run the IIFE
	return 'Something witty here'; // "Something witty here"
})(); */

// passing a parameter
(function(age) {
    console.log('run the IIFE'); // run the IIFE
	return `Something witty here and age ${age}`; // "Something witty here and age 5"
})(5);

// method
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
	sayHi: function() {
		console.log("Hey there");
		return "Hey there";
	},
	// SHORTHAND
	yellHi() {
		console.log("YELLLL-OOOO");
	},
	// writing the above is the same thing as writing
	yellHiho: function() {
		console.log("YELLLL-UUU");
	},
    // arrow function
    wisperHi: () => {
        console.log('hii');
    }
}
console.log(functionmethod.yellHi()); // YELLLL-OOOO
console.log(functionmethod.yellHiho()); // YELLLL-UUU

// callback functions
// click callback
/* const button = document.querySelector('.click-me');
button.addEventListener('click', functionmethod.yellHi); */

// callback functions can be declared outside of handlers
/* const button = document.querySelector('.click-me');
function handleClick() {
    console.log('you clicked!');
}
button.addEventListener('click', handleClick); */

// pass an anonymous function
const button = document.querySelector('.click-me');
button.addEventListener('click', function() {
    console.log('inside anonymous');
});

// timer callback
setTimeout(functionmethod.yellHiho, 1000);

// anonymous function
setTimeout(function() {
	console.log('Done');
}, 1000);

// arrow functions aswell
setTimeout(() => {
	console.log('arrow done');
}, 1000);