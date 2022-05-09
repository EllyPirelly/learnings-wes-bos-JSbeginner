# Module 3 - The Tricky Bits

As most of the content is information and small coding bits, this README here is used as a notepad. <br>
This module contains no project. <br>

[Scope](#Scope)

[Hoisting](#Hoisting)

[Closures](#Closures)

## Scope

- scope answers the questions, "where are my variables and functions available to me"
- there are different types of scope

#### Global Variables in Global Scope
- any time you declare a variable (no matter where: `<script>`, js file, console) it will be available anywhere in the application
- in a browser the global scope is the window
- methods that are globally available to us like for example `setTimeout()` are actually on the window object

```
const one = 'One here';
let two = 'Two here';
var age = 100;
console.log(one); // One here
console.log(two); // Two here
console.log(age); // 100
console.log((window.one)); // undefined
console.log((window.two)); // undefined
console.log((window.age)); // 100
```
- why `undefined`?
- `var` variables are attached to the window object - they are globally scoped
- `const` and `let` variables are still globally scoped BUT they are not attached to the window object = `undefined`

```
function sayHi() {
  console.log('hey from sayHi here');
}
// you can call this from the js file, from the script tag or from the console - all three methods work
sayHi();
```
- anything that is in the global scope is attached to the window object (with the exeption of `const` and `let`)
- functions - when declared globally - are available inside of the window object

**BUT**
- using global scope almost always isn't a good idea

#### Function Scope

```
const age = 100;
function go() {
  const hair = 'blonde';
}
console.log(age); // 100
console.log(hair); // Uncaught ReferenceError: hair is not defined
```
- when variables are created inside of a function, those variables are only available to that function
- unless you explicitly return and put that return in it's own variable:

```
const alter = 50;
function go() {
  const color = 'blue';
  return color;
}
const newHair = go();
console.log(alter); // 100
console.log(newHair); // blue
```
- when variables are not bound inside of a function they go up and look one level higher:
```
const global = 200;
function bam() {
  const meme = 'lama';
  console.log(global); // 200
  console.log(meme); // lama
}
bam();
```

- you can name variables that are not in the same scope the same - not a good idea!
- access issues (shadowing / overwriting)

```
const naming = 'naming outer';
function namefunction() {
  const naming = 'naming inner';
  console.log(naming);
}
namefunction(); // naming inner
```

```
function yellHi(namehere) {
  function yellAnother() {
    console.log(namehere.toUpperCase());
  }
  yellAnother();
}
yellAnother(); // Uncaught ReferenceError: yellAnother is not defined
```
- just like variables, functions are scoped to the parent function
- if you create a function inside of a function, that function will only be available to the parent function

#### Block Scope

- `var`, `let` and `const` are scoped differently
- `var` is function scoped
- `let`, `const` are block scoped

```
if (1 === 1) {
  const cool = true;
}
console.log('const:', cool); // Uncaught ReferenceError: cool is not defined

if (1 === 1) {
  var cool = true;
}
console.log('var:', cool); // true

if (1 === 1) {
  let cool = true;
}
console.log('let:', cool); // Uncaught ReferenceError: cool is not defined
```

- if you do need a variable to be available outside of a block, you need to create the variable above it
- inside the block, only update

```
let right;
if (1 === 1) {
  right = true;
}
console.log(right); // true
```

- most likely you'd put this _inside_ of a function and not have this in global scope

```
function isCool(namesome) {
  let cool;
  if (namesome === 'some name') {
    cool = true;
  }
  console.log(cool);
  return cool;
}
```

#### Loops

- with `var`, not good, causes issues
- this `i` leaks outside of this for loop
- if you now need another `for` loop and use that `i` again that could cause bugs
```
for(var i = 0; i < 10; i++) {
  console.log(i);
}
```
- with `let`, better, the `i` is block scoped

```
for(let i = 0; i < 10; i++) {
  console.log(i);
}
```

#### Scope Look-up

- lexical scoping
- looks where the functions are defined, NOT where they run

```
const dog = 'snickers';
function logDog() {
  console.log(dog); // snickers
}
function anotherdog() {
  const dog = 'sunny'; // won't log
  logDog(); // here it's run - JavaScript doesn't care
}
anotherdog();
```

```
const cat = 'smuckers';
function logCat(cat) {
    console.log(cat); // Schnitzel
}
function anotherCat() {
    const cat = 'smitty'; // won't log
    logCat('Schnitzel');
}
anotherCat();
```

- why?  when a function takes in an argument `cat` it will make local variables inside of that function and name them whatever you passed in as the first argument to the function

#### Best Practices

- try not to create global variables

## Hoisting

- hoisting allows you do access/run functions and variables before they have been created
- there's two things that are hoisted in JavaScript
    - function declarations
    - variable declarations

**Hoisting - function declaration**

```
sayHi();

function sayHi() {
    console.log('hey'); // hey
    console.log(add(10, 2)); // 12
}

function add(a, b) {
    return a + b;
}
```
- works because of hoisting
- only works with regular functions, does not work with functions assigned to variables
- JavaScript will re-arrange this so the functions are at the top of the file
- best practice: first create your functions and then call them (or work modular, export/import them)

**Hoisting - variable declaration**

- JavaScript will hoist the variable declaration but it will NOT hoist the actual value

```
console.log(age);
var age = 10; // undefined
```

- before everything runs, JS will hoist all variables to the top
- then it's going ahead and update them

```
var age;
console.log(age);
age = 10; // undefined
console.log(age); // 10
```

## Closures

- hard concept to get, this course bit here is about the basics, more will be explained during upcoming examples in the course

**A closure is the ability for a child/inner function to access variables from a higher level/parent scope function - even after the higher level/parent scope function has been called/closed over.**

```
function outer() {
    const outerVar = 'outer hey';
    function inner() {
        const innerVar = 'inner hey';
        console.log(innerVar);
        console.log(outerVar);
    }
    inner();
    // run outer() in the console (!), works:
    // inner hey
    // outer hey
}
// inner(); // Uncaught ReferenceError: inner is not defined - error, because it's not returned!
// then, run on page load, works:
outer(); // inner hey // outer hey
```

- the inner `function inner()` is able to make a scope look-up into the outer/parent `function outer()` function (that's not really closure just yet but scoping)

```
function outer() {
    const outerVar = 'outer hey 2';
    function inner() {
        const innerVar = 'inner hey 2';
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}
const innerFn = outer();
// run innerFn in the console - returns the inner() FUNCTION

// then, run on page load, works:
innerFn(); // inner hey // outer hey
```

- assign a function to a variable (`const innerFn = outer();`) so at a later point you have access to that function
- even though the `function outer()` is done running (and should have been cleaned up/garbage collected), JavaScript will still maintain the `const outerVar` in memory, so that it's accessible at a later time
- JavaScript - from within the inner `function inner()` - reaches out to the parent scope
- so when you run the `function innerFn()` outside of the parent `function outer()`, JavaScript is still able to access `function inner()`<br><br>
**Don't forget to `return`!**<br>
**Either the inner function itself `return inner(){...}` or (as done in the example) after the `function inner(){...}` with `return inner;`**

#### Example of closure - functions inside of functions

```
function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`;
    }
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('budda'));
console.log(sayHello('weasel'));
console.log(sayHey('petey'));
```

- variable `const myGreet` is created inside of the parent function `function createGreeting()`
- `myGreet` is then referenced and returned within inner function `return function(name)`, via `return ${myGreet}`
- because of that references to variable `const myGreet` which (seen from the inner function) was created in outer scope/the parent function `function createGreeting()`, JavaScript still can access this (outer) variable - even after the parent function/the outer `function createGreeting()` is done running/has been closed over

#### Example how to use closure to create "private variables"

```
function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `your name ${gameName} score is ${score}`;
    }
}
const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
// run hockeyGame() in the JavaScript console
// increments every time it's run, independent from soccerGame():
// "your name Hockey score is 1"
// run soccerGame() in the JavaScript console
// increments every time it's run, independent from hockeyGame():
// "your name Soccer score is 1"
```

- within the outer, the parent `function createGame()` the _empty_ score `let score = 0;` is created
-  within the inner `function win()`, `score` is referenced, incremented and returned
- `score` itself will be undefined, type `score` in JavaScript console: `ReferenceError: score is not defined`
- so there's no way to access `score` unless it's explicitly returned, in our case through `return your name ${gameName} score is ${score};`
- creating functions this way, enables you to maintain multiple games at once, which will run independent from one another!
