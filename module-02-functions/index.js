/* BUILT IN */
const mathMax = Math.max(10, 12);
console.log('Math.max(10, 12) returns: ', mathMax); // 12

const mathFloor = Math.floor(2.4444);
console.log('Math.floor(2.4444) returns: ', mathFloor); // 2

/* also built-in */
console.log('hey'); // hey

const parseFl = parseFloat('20.343434');
console.log("parseFloat('20.343434') as a STRING returns a NUMBER: ", parseFl); // 20.343434

const parseI = parseInt('20.343434');
console.log("parseInt('20.343434') as a STRING returns a WHOLE NUMBER: ", parseI); // 20

const dateN = Date.now();
console.log("Date.now() where you don't pass arguments will return the number of milliseconds passed since January 1st 1970: ", dateN);

const div = document.querySelector('div');
console.log(div);

// type this directly into the console
scrollTo(0, 200);
// or try this with an object being passed
// scrollTo({ top: 500, left: 0, behavior: 'smooth' })


/* CUSTOM */
// example one
function calculateBill() {
    const total = 100 * 1.13;
    console.log('inside function: ', total); // 112.99999999999999
    console.log('inside function: calculate bill running'); // inside function: calculate bill running
}
calculateBill();
// console.log(total); // error, total is not defined - SCOPE!

// example two - return
function calculateBillReturn() {
    const total = 100 * 1.13;
    return total;
}
calculateBillReturn();
// console.log(total); // error, total is not defined - we need to capture the return!

// example three - capture return in a variable!
function calculateBillReturn() {
    const total = 100 * 1.13;
    return total;
}
const myTotal = calculateBillReturn();
console.log(myTotal); // 112.99999999999999
// or this:
console.log(`Your total is $${myTotal}, tax included.`); // Your total is $112.99999999999999, tax included.
// or this:
console.log(`Your total is $${calculateBillReturn()}, inclucing tax.`); // Your total is $112.99999999999999, inclucing tax.


/* PARAMETERS AND ARGUMENTS */
// vars defined in global/outer scope
let bill = 100;
let taxRate = 0.13;
function calculateBillNew() {
    const total = bill * 1 + taxRate;
    return total;
}
const myTotal2 = calculateBillNew();
console.log('my total 2', myTotal2); // my total 2 100.13
bill = 200;
const myTotal3 = calculateBillNew();
console.log('my total 3', myTotal3); // my total 3 200.13

// make values previously set as global vars to parameters for the function
function calculateBillParam(billAmount, canadianTax) {
    const total = billAmount * (1 + canadianTax);
    return total;
}
const myTotalParam1 = calculateBillParam(100, 0.13);
console.log('values as params ', myTotalParam1); // values as params  112.99999999999999

// values/arguments passed into a function can be variables aswell
function calculateBillParams2(billAmount2, canadianTax2) {
    const total = billAmount2 * (1 + canadianTax2);
    return total;
}
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotalParam2 = calculateBillParams2(wesTotal, wesTaxRate);
console.log('WES tax thingy here: ', myTotalParam2); // WES tax thingy here:  650

// this function will break
function sayHiTo() {
    return `Hello ${firstName}`;
}
const greeting = sayHiTo();
console.log(greeting); // firstName is not defined

// this function will work, as long as we pass it a value
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}
const greeting1 = sayHiTo('wes');
console.log(greeting1); // Hello wes

// this function will also work, we just passing it a parameter with an undefined value
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}
const greeting2 = sayHiTo();
console.log(greeting2); // Hello undefined

// passing expressions
function calculateNewBill(billAmount2, canadianTax2) {
    const total = billAmount2 * (1 + canadianTax2);
    return total;
}
let myTotalNewBill = calculateNewBill(100, 0.15);
console.log('canadian expression: ', myTotalNewBill); // canadian expression:  114.99999999999999
let myTotalNewBill2 = calculateNewBill(20 + 20 + 30 + 20, 0.15);
console.log('made up expression: ', myTotalNewBill2); // made up expression:  103.49999999999999

// pass functions as arguments
function doctorize(name) {
    return `Dr. ${name}`;
}
function yell(name) {
    return `HEY ${name.toUpperCase()} !`;
}
doctorize('umpa'); // "Dr. umpa"
yell('lumpa'); // "HEY LUMPA !"
yell(doctorize('Lumpa')); // "HEY DR. LUMPA !"

// set a default to avoid breaking a function in case of missing to pass a value
function yello(namoh = 'Silly Goose') {
    return `Hey ${namoh.toUpperCase()}`;
}
yello(); // "Hey SILLY GOOSE"

// overwriting default values
function calculateBill(billAmount = 120, taxRate = 0.2, tipRate = 0.2) {
	console.log('Running Calculate Bill');
	const total = billAmount + billAmount * taxRate + billAmount * tipRate;
	return total;
}
// won't work, needs to be 100, undefined, 0.5
// const testBill = calculateBill(100, ,0.5);
