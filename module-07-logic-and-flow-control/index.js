// BEDMAS -------------------------------------

const age = 10 * 5 - 2; // 48
const age2 = 10 * (5 - 2); // 30

// another example
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount + taxRate;
  return total;
}

const total = calculateBill(100) + (calculateBill(20) - calculateBill(15)); // equals to the operation 128 + (25.6 - 19.2)


// FLOW CONTROL -------------------------------------

// IF STATEMENTS
if (10 > 2) {
  console.log('Yo'); // Yo
} else if (11 > 10) {
  console.log('first else if yes'); // ignored, because the first statement already returned true
} else if (3 > 1) {
  console.log('second else if yes'); // ignored, because the first statement already returned true
}

const alter = 50;

if (alter > 70) {
  console.log('In your seventies');
} else if (alter > 60) {
  console.log('In your sixties');
} else if (alter > 50) {
  console.log('In your fifties');
} else {
  console.log('Nothing was true'); // Nothing was true
}

// IF STATEMENTS inside of functions - one way
/* function slugify(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  }
  return sentence.replace(/\s/g, '-');
}
console.log(slugify('This, too, shall pass.')); // This,-too,-shall-pass.
 console.log(slugify('This, too, shall pass.', true)); // this,-too,-shall-pass. */


// IF STATEMENTS inside of functions - another way
function slugify(sentence, lowercase) {

  let slug = sentence.replace(/\s/g, '-');

  if (lowercase) {
    return slug = slug.toLowerCase();
  }
  return slug;
}
console.log(slugify('Another One here')); // Another-One-here
console.log(slugify('Another One here', true)); // another-one-here


// OPERATORS
// checks for value
age == 48; // true
age == '48'; // true

// checks for type
age === 48; // true
age === '48'; // false
console.log(typeof (48)); // number
console.log(typeof ('48')); // string


// >, >=, >==
/* 10 > 10 // false
10 >= 10 // true
10 >== 10 // Uncaugth SyntaxError: Unexpected token '='
'10' > 10 // false */


// || and &&
/* const naming = 'wes';
const lastNaming = 'bos';

if (naming === 'wes' || naming === 'scott') {
  console.log('cool name(s)'); // cool name(s)
  console.log(naming); // wes
}

if (naming === 'wes' && lastNaming === 'bos') {
  console.log(naming, lastNaming); // wes bos
}

if (naming === 'scott' || (naming === 'wes' && lastNaming === 'bos')) {
  console.log(naming, lastNaming); // wes bos
} */


// FUNCTION RETURNDS
const naming = 'wes';
const isAwesomeName = 'awesome'.includes(naming)
if (isAwesomeName) {
  console.log('super awesome'); // super awesome
}

// own function, that returns true or false
function nameIsAwesome(naming) {
  return 'awesome'.includes(naming);
}
if (nameIsAwesome('wes')) {
  console.log('own function wes');
}


// TRUTHY and FALSY
const dog = 'snickers';
if (dog) {
  console.log('you have a dog'); // you have a dog
} else {
  console.log('you don\'t have a dog'); // ignored because first statement ist true
}

const dog2 = '';
if (dog2) {
  console.log('you have a dog'); // ignored because second statement is true
} else {
  console.log('you don\'t have a dog'); // you don't have a dog
}

// TRUTHY
/* let score = 1;
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // 1
} else {
  console.log('no score yet');
} */

/* let score = -10;
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // -10
} else {
  console.log('no score yet');
} */

/* let score = "0";
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // 0
} else {
  console.log('no score yet');
} */

/* let score = [];
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // []
} else {
  console.log('no score yet');
} */

/* let score = {};
if (score) {
  console.log('there is a score already');
  console.log(score); // {}
} else {
  console.log('no score yet');
} */

// FALSY
/* let score = 0;
if (score) {
  console.log('there is a score of 0 already');
  console.log(score);
} else {
  console.log('no score yet'); // no score yet
} */

/* let score;
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); // undefined
  console.log('no score yet'); // no score yet
} */

/* let score = 'wes' * 100;
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); // NaN
  console.log('no score yet'); // no score yet
} */

/* let score = '';
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); //
  console.log('no score yet'); // no score yet
} */

// GRAB ALL OF THE POSSIBLE VALUES, LOOP OVER, return TRUTHY OR FALSY
const values = [[], {}, -10, 1, 0, '', 'full string', ' ', undefined, NaN, null];

values.forEach(value => {
  if (value) {
    console.log(value, 'is truthy')
  } else {
    console.log(value, 'is falsy')
  }
});

// [] 'is truthy'
// {} 'is truthy'
// -10 'is truthy'
// 1 'is truthy'
// 0 'is falsy'
// '' is falsy
// full string is truthy
// ' ' is truthy
// undefined 'is falsy'
// NaN 'is falsy'
// null 'is falsy'

console.clear();


// COERCION -------------------------------------

const isCool = false;
if (!isCool) {
  console.log('nope'); // nope
}

/* const holla = "ella";
!"ella" // false
!!"ella" // true */

// TERNARIES

// verbose if statement
/* const count = 2;
let word;
if (count === 1) {
  word = 'item';
} else {
  word = 'items';
}
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence); // You have 2 items in your cart */

// Ternary
/* const count = 1;
const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence); // You have 1 item in your cart */

// Ternary more dynamic
const count = 3;
const sentence = `You have ${count} items${count === 1 ? '' : 's'} in your cart`;
console.log(sentence); // You have 3 itemss in your cart

// Ternary use with functions
/* function showAdminBar() {
  console.log('Showing admin bar'); // Showing admin bar
};
const isAdmin = true;
isAdmin ? showAdminBar() : null; */

// && trick
function check1() {
  console.log('Running check1'); // Running check1
  return true;
}

function check2() {
  console.log('Running check2'); // Running check2
  return false;
}

function check3() {
  console.log('Running check3');
  return true;
}

if (check1() && check2() && check3()) {
  console.log('all checks passed');
} else {
  console.log('some checks failed'); // some checks failed
}

// CONDITIONAL ABUSE
function showAdminBar() {
  console.log('Showing admin bar'); // Showing admin bar
};
const isAdmin = true;
isAdmin && showAdminBar();

// Statements block
// this:
if (isAdmin) {
  showAdminBar();
}
// can be turned into this:
if (isAdmin) showAdminBar();
