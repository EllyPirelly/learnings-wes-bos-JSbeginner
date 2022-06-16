# Module 7 - Logic and Flow Control

As most of the content (except for the animated turtle, see down below) is information and small coding bits, this README here is used as a notepad.

[BEDMAS](#BEDMAS)

[Flow Control - If Statements, Function Returns, Truthy, Falsy](#Flow-Control)

[Coercion, Ternaries and Conditional Abuse](#Coercion-Ternaries-Conditional-Abuse)

[Case Switch and Animating a Turtle with CSS Variables](#Switch-Case)
![mod 0603](./img/screen-mod0704-01.gif)

[Intervals and Timers](#Intervals-and-Timers)

## BEDMAS

**Following examples are referring to `index.html` and `index.js`**

- **order of operations** in which JavaScript runs (exactly how math works)
  - Brackets (Parenthesis)
  - Exponents (to the power of)
  - Divisions
  - Multiplikation
  - Addition
  - Substraction

```
// BEDMAS example
const age = 10 * 5 - 2; // 48
const age2 = 10 * (5 - 2); // 30
```

```
// BEDMAS example
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount + taxRate;
  return total;
}

const total = calculateBill(100) + (calculateBill(20) - calculateBill(15)); // equals to the operation 128 + (25.6 - 19.2)
```
## Flow Control

### If Statements

- are the foundation of all logic in JavaScript
- they expect a Boolean that either is `true` or `false` or some sort of condition that is evaluated to `true` or `false` (or `truthy` / `falsy`)

```
if (10 > 2) {
  console.log('Yo'); // Yo
} else if (11 > 10) {
  console.log('first else if yes'); // ignored, because the first statement already returned true
} else if (3 > 1) {
  console.log('second else if yes'); // ignored, because the first statement already returned true
}
```

- watch out: if the first statement returns `true`, the ones that follow will be ignored; as soon as an if statement finds itself to be `true`, it will skip the rest of the if statement
- check for multiple things to be `true` in using seperate if statements

```
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
```

- an `else` NEVER has a condition, it's just sort of a worst case scenario
- "if nothing is `true`, run me"

### If Statements inside of functions

- regex (regular expression)
  - https://regex101.com/
  - `/\s/g, '-'`
  - always wrapped in an opening and closing `/`
  - inside, this `\s` means "space"
  - `g` means "global"
  - `'-'` means "replace space with a dash"

```
function slugify(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  }
  return sentence.replace(/\s/g, '-');
}
console.log(slugify('This, too, shall pass.')); // This,-too,-shall-pass.
 console.log(slugify('This, too, shall pass.', true)); // this,-too,-shall-pass.
```

- `return` means return a value from a function and **stop that function from running**

```
function slugify(sentence, lowercase) {

  let slug = sentence.replace(/\s/g, '-');

  if (lowercase) {
    return slug = slug.toLowerCase();
  }
  return slug;
}
console.log(slugify('Another One here')); // Another-One-here
console.log(slugify('Another One here', true)); // another-one-here
```

- same as above just with assigning the regex to a variable

### Operators

- equality: `=`, `==`, `===`

#### Almost always use `===`

- why are there `==` and `===` in the first place then? because of `null` and `undefined`

```
null === undefined // false
null == undefined // true
```

**Checks for value with `==`**

```
const age = 10 * 5 - 2; // 48
age == 48; // true
age == '48'; // true
```

- returns `true`, as the value of age is 48
- `48` and `'48'` are technically the same thing, but they are not the same **type**

**Checks for type with `===`**

```
const age = 10 * 5 - 2; // 48
age === 48; // true
age === '48'; // false
console.log(typeof (48)); // number
console.log(typeof ('48')); // string
```

### other operators

```
10 > 10 // false
10 >= 10 // true
10 >== 10 // Uncaugth SyntaxError: Unexpected token '='
'10' > 10 // false
```

- why error with `>==`? because `>=` or `<=` and `=` operators only ever deal with numbers
- if you use `'10' > 10`, `'10'` will be turned into a number

```
const naming = 'wes';
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
}
```

```
10 === 10 // true
10 === 10 && 5 === 5 // true
10 === 10 && 5 === 3 // false

true && true && true && true // true
true && true && false && true // false
true || true || false || true // true

```

- with `&&` if only one evaluates to `false`, everything is evaluated to `false`
- with `||` if one of them evaluates to `true`, everything is evaluated to `true`

### FUNCTION RETURNS

```
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
  console.log('own function wes'); // own function wes
}
```

- `includes()` is a method that will return `true` or `false`

### `truthy` and `falsy`

- an if statement does not only require `true` or `false`, but also takes in `truthy` or `falsy`

```
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
```

- an empty string is not `true` and it's not `false`, it's an empty string, so how come that this still works
- because if statements take in a number of different values and will try to **coerce them** and will try to turn them into a Boolean of `true` or `false`
- so values of `truthy` and `falsy` will also work

### check for `truthy` / `falsy` values

```
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
```

![mod 0702](./img/screen-mod0702-01.png)

### Truthy Values

**1**

```
let score = 1;
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // 1
} else {
  console.log('no score yet');
}
```

**-10**

```
let score = -10;
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // -10
} else {
  console.log('no score yet');
}
```

**string**

```
let score = "0";
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // 0
} else {
  console.log('no score yet');
}
```
- `'some words'` a full string is `truthy`
- any string with content will be `truthy`
- so also `'0'` or `' '` will be `truthy`

**empty array**

```
let score = [];
if (score) {
  console.log('there is a score already'); // there is a score already
  console.log(score); // []
} else {
  console.log('no score yet');
}
```
- an array that has nothing in it is `truthy`
- if you have to check for anything IN an array, check for `.length()`
- `[1, 2, 3].length // 3` will be true
- `[].length // 0` will be false

**empty object**

```
let score = {};
if (score) {
  console.log('there is a score already');
  console.log(score); // {}
} else {
  console.log('no score yet');
}
```
- an object that has nothing in it is `truthy`
- if you have to check if anything is IN there, check `Object.keys({})`, will return to you an empty array where you then can use `.length` on: `Object.keys({}).length` and that's 0 (elements in it)

### Falsy Values

**0**

```
let score = 0;
if (score) {
  console.log('there is a score of 0 already');
  console.log(score);
} else {
  console.log('no score yet'); // no score yet
}
```
- `0`, a zero will equate to `false`
- `0 == false // true`
- only `0` will be `falsy`, all other numbers will be `truthy`

**undefined**

```
let score;
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); // undefined
  console.log('no score yet'); // no score yet
}
```
- how do you make an undefined variable? Do not assign a value to it.

**null**

- `falsy`

**NaN**

```
let score = 'wes' * 100;
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); // NaN
  console.log('no score yet'); // no score yet
}
```

**`''`**

```
let score = '';
if (score) {
  console.log('there is a score already');
} else {
  console.log(score); //
  console.log('no score yet'); // no score yet
}
```
- `''` an empty string (without whitespace!) is `falsy`

## Coercion Ternaries Conditional Abuse

### Coercion

```
const isCool = false;
if (!isCool) {
  console.log('nope'); // nope
}
```

- `!` means "is the opposite"
- `!` does coercion
- something of a different type (string, number...) will be taken and coerced into a real Boolean (`true` or `false`)

```
const holla = "ella";
!"ella" // false
!!"ella" // true
```
- `!` will coerce to `false`, `!!` will coerce to `true`

**`!` and `!!` take the fact that something has a `truthy` or `falsy` value and coerce that into a real Boolean.**

### Ternaries

- like a shorthand if statement
- helpful to quickly run functionality based on something being `true` or `false`
- it needs a condition, it needs what to do if `true`, it needs what to do if `false`

**verbose if statementr**

```
const count = 2;
let word;
if (count === 1) {
  word = 'item';
} else {
  word = 'items';
}
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence); // You have 2 items in your cart
```

**Ternary**

```
const count = 1;
const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence); // You have 1 item in your cart
```

**Ternary more dynamic**

```
const count = 3;
const sentence = `You have ${count} items${count === 1 ? '' : 's'} in your cart`;
console.log(sentence); // You have 3 itemss in your cart
```

**Ternary use with functions**

```
function showAdminBar() {
  console.log('Showing admin bar'); // Showing admin bar
};
const isAdmin = true;
isAdmin ? showAdminBar() : null;
```
- how to do "nothing" in this statement? just type `null` (or an empty string `''`)
- using the `false` case is a must and cannot be left off

**`&&` trick**

- chaining: will check along the way if statements are true
- makes sure that all of these three are `true` before continuing

```
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
```
- the third check never runs
- if in a condition at any point of that condition one part is `false`, the condition is returned as `false`
- short circuiting, meaning that the whole condition knowingly was never finished

### Conditional Abuse

```
function showAdminBar() {
  console.log('Showing admin bar'); // Showing admin bar
};
const isAdmin = true;
isAdmin && showAdminBar();
```

- previously `isAdmin ? showAdminBar() : null;` is changed to `isAdmin && showAdminBar();`
- if `isAdmin` is ever `false`, `showAdminBar()` will never run
- this a bit of abuse but totally works

**Statement block `{}`**

```
// this:
if (isAdmin) {
  showAdminBar();
}
// can be turned into this:
if (isAdmin) showAdminBar();
```
- if something is on the same line, the statement block is not needed and `{}` can be deleted
- question is if you _should_ do that

## Switch Case

**Following examples are referring to `switch.html` and `switch.js`**

- pass it the thing that you are testing
- has cases, those cases HAVE to be clearly defined
- `break;` is needed after each single statement
- `default;` is needed at the end, (if something's going wrong in the other statements, there's at least `default;` to handle that)

```
switch (eve.key) {
  case 'ArrowUp':
    ...
    break;
  case 'ArrowDown':
    ...
    break;
  case 'ArrowLeft':
    ...
    break;
  case 'ArrowRight':
    ...
    break;
  default:
    console.log('that is not a valid move');
    break;
}
```

### Make the turtle walk

![mod 0603](./img/screen-mod0704-01.gif)

- make the turtle `turtle.png` walk
- press arrow keys 'up', 'down', 'left', 'right'
- add speed, flip over turtle (change direction), rotate

```
// CSS
.turt {
  position: relative;
  --x: 0;
  --y: 0;
  --rotateX: 0;
  --rotate: 0;
  /* important! first move it bevore rotating it! */
  transform:
    translate(var(--x))
    translateY(var(--y))
    rotateY(var(--rotateX))
    rotate(var(--rotate));
  transition: transform .2s;
}
```
```
// JS
turtle.setAttribute('style', `
  --rotateX: ${flipped ? '180deg' : '0'};
  --x: ${x * speed}px;
  --y: ${y * speed}px;
  --rotate: ${rotate}deg;
`);
```
- update CSS variables with JavaScript
- only CSS attributes that are "real" are going to be added to the turtle
- so how - when it's not a "real" CSS attribute - to apply custom CSS properties?
- use `setAttribute();`

## Intervals and Timers

**Following examples are referring to `intervals.html` and `intervals.js`**

These examples are purely happening in the Browser Developer Console.

- `setTimeout()` and `setInterval()` work the same way
- both are globally scoped methods
- run something AFTER 5 seconds: `setTimeout()`
- run something EVERY 5 seconds: `setInterval()`
- both take two arguments, a callback and milliseconds

### `setTimeout()`

- will run 500 milliseconds after the JavaScript has started

```
// anonymous function
setTimeout(function() {
  console.log('done');
}, 500);
```

```
// reference to a function
function buzzer() {
  console.log('buzzed');
}
setTimeout(buzzer, 500);
```

**Gotcha**

```
function buzzer() {
  console.log('buzzed');
}
console.log('starting');
setTimeout(buzzer, 500);
console.log('finishing');
```

- "starting" and "finishing" will be logged first, then "buzzed"
- this is because of the **callback**: "come back and do it at a later point in time"
- the rest of JavaScript will keep on running while the callback is still waiting for the 500 milliseconds to be over (and to then run)
- asynchronous nature of JavaScript

### `setInterval()`

These examples will run every 2000 milliseconds unless you abort them!

```
// anonymous function
setInterval(function() {
  console.log('intervalled');
}, 2000);
```

```
// reference to a function
function intervalled() {
  console.log('intervalled');
}
console.log('starting');
setInterval(intervalled, 2000);
console.log('finishing');
```

**Gotcha**
- it won't run immediately
- "starting" and "finishing" will be logged first, then "intervalled" will keep on running every 2000 ms until it is aborted - or until eternity
- in only runs after the first 2 seconds have elapsed
- there is no option to tell the interval to run right away and ALSO run after 2 seconds
- if we DO want that sort of functionality, we need to code our own interval

**Example - create own interval function**

```
function intervalling() {
  console.log('intervalling my own');
}

function setImmediateInterval(funcToRun, ms) {
  // right away call that function
  funcToRun();
  // run a regular interval
  return setInterval(funcToRun, ms);
}

// setImmediateInterval(intervalling, 500);
```

- a function `setImmediateInterval()` that as a parameter takes in another function `funcToRun()`
- works exactly as if passed a number or a string
- whenever it gets called with `funcToRun();` it gets transformed into the first paramter `... (funcToRun, ...) { ...`

### Clear/Stop a timer/interval

**`setTimeout()` example - if someone doesn't click for 2 seconds, destroy the web page**

```
function destroy() {
  document.body.innerHTML = `<p>destroyed</p>`;
}
setTimeout(destroy, 2000);
```

**`setTimeout()` example - if someone doesn't click for 2 sec, destroy the web page BUT if someone DOES click it, clear/stop this**

- to clear/stop the timer from running, you must save the reference `bombTimer` to that timer/interval in a variable `const bombTimer = setTimeout(destroy, 2000);`
- there is no other way in clearing the timer without having saved reference to it in a variable

```
function destroy() {
  document.body.innerHTML = `<p>destroyed</p>`;
}
const bombTimer = setTimeout(destroy, 2000);
console.log(typeof bombTimer); // number; it's a reference to all timers currently on the page

window.addEventListener('click', function () {
  console.log('clicked, not destroyed');
  // how do I stop the timer from running?
  // save reference to bombTimer
  clearTimeout(bombTimer);
});
```

**`setInterval()` example - once you click, `setInterval()` is stopped/cleared**

```
const poopInterval = setInterval(function () {
  console.log('💩');
  console.log('har har');
}, 10);

window.addEventListener('click', function () {
  clearInterval(poopInterval);
  console.log('stop silly pooping');
});
```

**`setInterval()` and `setTimeout()` example - run this every 100 milliseconds but after 3 seconds stop it entirely**

```
const poopInterval = setInterval(function () {
  console.log('💩');
  console.log('har har');
}, 100);

setTimeout(function () {
  clearInterval(poopInterval);
  console.log('pooping stopped');
}, 3000);
```