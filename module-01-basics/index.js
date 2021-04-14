/* STRING */
/* single quotes, double quotes, back ticks */
const prename = 'wes';
const middle = "topher";
const last = `bos`;

/* escaping a character */
const sentence = 'she\'s so cool';
const sentence2 = "she's so \"cool\"";

/* back ticks */
const sentence3 = `she's so "cool"`;

const song = `
    Oh

    yeah

    I like

    pizza
`;
console.log(song);

/* concatenation and interpolation without back ticks */
const hello = 'Hello my name is ' + prename + '. Nice to meet you';

/* concatenation and interpolation with back ticks */
const hello2 = `Hello my name is ${prename} . Nice to meet you`;
const hello3 = `Hello my name is ${prename} . Nice to meet you. I am ${1 + 100} years old.`;

/* handling HTML with back ticks*/
const html = `
    <div>
        <p>Run the index.html in a browser, check which scripts are commented in and check the JavaScript console to
        see what's going on.</p>
        <div>
        <span>Read the <a href="./README.md">Readme.</a></span>
    </div>
        <h1>${prename}</h1>
        <span>${hello3}</span>
    </div>
`;
document.body.innerHTML = html;
console.log(hello3);
console.log(html);

/* NUMBER */
const age = 300;
const nickname = 'horst';
typeof age; // "number"
typeof nickname; // "string"
console.log('var age: ', age, 'var nickname: ', nickname);

const integ = 200; // whole number
const floatN = 100.25; // number that has a decimal

/* helper methods */
Math.round(20.5) // 21
Math.round(20.2) // 20
Math.floor(20.9999999999) // 20
Math.ceil(20.99999) // 21
Math.random() // returns random floating-point number between 0 (inclusive) and 1 (exclusive)

/* modulo */
const smarties = 20;
const kids = 3;
const eachKidGets = smarties / kids;
console.log(`Each kid gets ${eachKidGets} smarties`); // Each kid gets 6.666666666666667 smarties
const left = smarties % kids;
console.log(`show me what's left: ${left}`);

/* floating-point number */
const floatP = 0.1 + 0.2;
console.log('floating-point here: ', floatP); // 0.30000000000000004

/* Infinity / -Infinity */
1000 ** 200; // Infinity
typeof Infinity // "number"
typeof -Infinity // "number"

/* NaN - Not a Number */
10 / 'dog'; // NaN
typeof NaN; // "number"

/* OBJECT */
const person = {
    first: 'wes',
    last: 'bos',
    age: 300
};
console.table(person);
console.log(typeof(person)); // object
console.log(person.first); // wes
console.log(person.last); // bos
console.log(person.age); // 300

/* SYMBOL */
// a way to do unique properties / unique identifiers
// more details later in the course

/* NULL AND UNDEFINED */
/* undefined */
let dog;
console.log(dog); // undefined

/* null */
let somethingUndefined; // undefined
let somethingNull = null; // null

/* BOOLEAN */
let isDrawing = false;

let age2 = 18;
const ofAge = age2 > 19;
console.log(ofAge); // false
age2 = 400;
console.log(age2); // 400

/* equality */
10 === 10 // true, will check for value AND type
10 == 10 // true, will check for value
"10" == 10 // true, only checks for value NOT type
"10" === 10 // false, different types
