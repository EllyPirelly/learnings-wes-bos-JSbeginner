// GLOBAL VARIABLE - GLOBAL SCOPE --------

/* const first = 'Global First!';
console.log('%c Look ma, a global var!', 'background: yellow');
console.log(first); */

/* const one = 'One here';
let two = 'Two here';
var age = 100;
console.log(one); // One here
console.log(two); // Two here
console.log(age); // 100
console.log((window.one)); // undefined
console.log((window.two)); // undefined
console.log((window.age)); // 100 */

/* function sayHi() {
  console.log('hey from sayHi here');
}
// you can call this from here, from the script tag or from the console - all three methods work
sayHi(); */


// FUNCTION SCOPE --------

const age = 100;
function go() {
  const hair = 'blonde';
}
console.log(age); // 100
// console.log(hair); // Uncaught ReferenceError: hair is not defined


const alter = 50;
function go() {
  const color = 'blue';
  return color;
}
const newHair = go();
console.log(alter); // 100
console.log(newHair); // blue


const global = 200;
function bam() {
  const meme = 'lama';
  console.log(global); // 200
  console.log(meme); // lama
}
bam();


const naming = 'naming outer';
function namefunction() {
  const naming = 'naming inner';
  console.log(naming);
}
namefunction(); // naming inner


function yellHi(namehere) {
  function yellAnother() {
    console.log(namehere.toUpperCase());
  }
  yellAnother();
}
// yellAnother(); // Uncaught ReferenceError: yellAnother is not defined


// BLOCK SCOPE --------

/* if (1 === 1) {
  const cool = true;
}
console.log('const:', cool); // Uncaught ReferenceError: cool is not defined */

/* if (1 === 1) {
  var cool = true;
}
console.log('var:', cool); // true */

/* if (1 === 1) {
  let cool = true;
}
console.log('let:', cool); // Uncaught ReferenceError: cool is not defined */

/* let right;
if (1 === 1) {
  right = true;
}
console.log('outside', right); // true */

/* function isCool(namesome) {
  let cool;
  if (namesome === 'some name') {
    cool = true;
  }
  console.log(cool);
  return cool;
} */

// with var, not good, can cause issues
/* for(var i = 0; i < 10; i++) {
  console.log(i);
} */

// with let, better, block scoped!
/* for(let i = 0; i < 10; i++) {
  console.log(i);
} */

// SCOPE LOOK-UP --------

const dog = 'snickers';
function logDog() {
  console.log(dog); // snickers
}
function anotherdog() {
  const dog = 'sunny'; // won't log
  logDog();
}
anotherdog();


const cat = 'smuckers';
function logCat(cat) {
  console.log(cat); // Schnitzel
}
function anotherCat() {
  const cat = 'smitty'; // won't log
  logCat('Schnitzel');
}
anotherCat();
