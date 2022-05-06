# Module 1 - Basics

As most of the content is information and small coding bits, this README here is used as a notepad. <br>
This module contains no project. <br>

[Browser, Editor and Terminal Setup](#Browser-Editor-and-Terminal-Setup)

[Running and Loading JavaScript](#Running-and-Loading-JS)

[Variables and Statements](#Variables-and-Statements)

[Code Quality Tooling with Prettier and ESLint](#Code-Quality-Tooling-with-Prettier-and-ESLint)

[Types - Introduction](#Types-Introduction)

[Type - String](#Type-String)

[Type - Number](#Type-Number)

[Type - Object](#Type-Object)

[Type - Symbol](#Type-Symbol)

[Type - Null and Undefined](#Type-null-and-undefined)

[Type - Boolean and equality](#Type-Boolean-and-equality)

## Browser, Editor and Terminal Setup
Check out here [what Wes Bos is using as software and hardware](https://wesbos.com/uses).

#### Which browser to use for this course
Chrome on MAC

#### Dev Tools
Learn these few shortcuts!
- `cmd option i` dev tools where you last left them
- `cmd shift c` inspect elements
- `cmd option j` JavaScript console
- `cmd option u` view source in new tab

#### IDE
- Visual Studio Code (in terms of tooling for JavaScript Wes Bos recommends VSC)

#### nodejs and npm
- run `node -v` in your terminal to check if you have node installed
  - no node? [see nodejs website for download](https://nodejs.org/en/)
- run `npm -v` in your terminal to check if you have npm installed
  - no npm? first install node, [npm is coming with it](https://www.npmjs.com/get-npm)
- run `node` in your terminal to get into the **node environment**
  - node.js is JavaScript that can run on the server
  - inputs are executed and results are returned
  - run `ctrl c` to exit the node environment

#### Commandline Basics
- `cd` change directory
- `cd ..` go up a level
- `ls -l` list out everything that's in the current directory
- `pwd` "print work directory", if you ever want to know where you are
- `cmd k` clear the terminal window

#### Relative Path
- `./` means IN the same folder
- `../` means go up one level

## Running and Loading JS
You can run JavaScript in various ways:
  - within the Browser console (in Dev Tools)
  - with node in a terminal
  - via external JavaScript file
    - in HTML file: `<script src="./some.js" async defer></script>`, refers to an external js file on the same level
    - if you put the `<script>` tag in the `<head>` please mind, that the **script will have run (end ended!) before the** `<body>` **tag is rendered**, so whatever's in the `<body>` can't be addressed via JavaScript!
    - put the `<script>` tag always **right before** your closing `<body>` tag to make sure that everything you want to address (as elements etc.) has already been rendered!
    - you can add `async defer`, this will delay the actual running of the JavaScript; will download the js file asyncronously and will run it once the HTML has been loaded on the page
    - of course you can have multiple `<script>` tags within `<body>` but please be aware that every js file needs to be downloaded and loaded so this can be VERY inefficient

## Variables and Statements
Different types of variables: **var**, **let** and **const**

```
var name = 'Nike';
let age = 300;
const alive = true;
```

- `var` and `let` can be updated, their values can be re-assigned
- `const` values can not be changed (not totally true, wait for chapter Arrays and Objects)


Strict mode `use strict;`
  - results from old-ish JavaScript where people simply declared variables as follows `dog = 'Boomer';`
  - it wasn’t clear if it's a `var`, `let` or `const` so `use strict;` was introduced to force people to properly declare their variables
  - obviously, old code still needs to be supported so we cannot set `use strict;` for EVERYTHING, as this would break the older JavaScript, BUT we can introduce it for code we create from scratch
  - `use strict;` is enforced anyhow by default when you use JavaScript modules (and JavaScript modules is probably how you are going to write all of your modern JavaScript)

Semicolons `;` yes or no?
  - it's probably best to learn JavaScript with semicolons
  - also probably yes if you work in more than one language

Scoping
  - "where are my variables available to **me**?"
  - `var` is differently scoped than `let` and `const`
  ```
  // function scoped
  // only available inside the parent function
  var name = 'Nike';

  // block scoped
  let age = 300;
  const alive = true;
  ```
  - Wes Bos always uses `const` per default, his approach is a variable does not need to update, if so, he THEN changes to `let`

Naming conventions
  - allowed: `A` to `Z`, `a` to `z`, `_` (comes from lowdash), `$` (comes from jQuery)
  - variable names should NOT start with a capital letter UNLESS THEY ARE A CLASS
  - camel case: `useCamelCaseForVariableNames` for variable names
  - upper camel case: `UpperCamelCaseForClass` if you are building a class
  - snake case: `this_is_snake_case`
  - not allowed: dashes (kebab case) are not allowed `this-is-not-allowed`, even though dashes are allowed in CSS selectors
## Code Quality Tooling with Prettier and ESLint
- [ESLint demo/tryout page](https://eslint.org/demo)
  - JavaScript linter tool for identifying potential issues
  - you can have different plug-ins for ESLint (e.g., a vue plug-in, react plug-in, etc.)
- [Prettier playground](https://prettier.io/playground/)
  - Prettier is entirely for formatting code and somewhat opinionated
- Wes Bos shared ESLint set-up on GitHub here [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos)
- I did not configure my set-up his way; VSCode already includes some features I will first check out while coding along to his courses

## Types Introduction
- every time you have a value it will fall into one of the 7 types
- `SNOB'N'US` (🤓  memory hook)
  - String
  - Number
  - Object
  - Boolean
  - Null
  - Undefined
  - Symbol

## Type String
- 3 "kinds" of strings:
```
'single quotes'
"double quotes"
`back ticks`
```
- escaping a character: `const sentence = "she's so \"cool\"";`

- with the use of back ticks:
  - you don't need to escape characters
  - interpolation and concatenation
  - maintenance of blank lines
```
const sentence3 = `she's so "cool"`;
```
```
const song = `
  Oh

  yeah

  I like

  pizza
`;
```
```
// concatenation and interpolation without back ticks

const hello = 'Hello my name is ' + prename + '. Nice to meet you';
```
- using a `+` within a string concatenates all to a string

```
// concatenation and interpolation with back ticks

const hello2 = `Hello my name is ${prename}. Nice to meet you`;
```
- pop a variable inside of a string with `${variable}`

## Type Number
- there's only one type of number in JavaScript which is "number"
- the use `typeof` + variable or number will tell you the type
```
const age = 300;
const nickname = 'horst';
typeof age; // "number"
typeof nickname; // "string"
```
```
// both are `typeof "number"`

const integ = 200; // whole number
const floatN = 100.25; // number that has a decimal
```
- `+ - x /` operators are available on numbers
```
// be aware when you are mixing types, type conversion might happen, concatenation

1 + "1" // "11"
```

- helper methods:
  - run `Math.` in the browser's Dev Tools JavaScript console, there's tons of helper methods you can use for doing math
  - most important ones might be:
    - `Math.round()`, values you put as parameter will be rounded up or down
    - `Math.floor()`, values you put as parameter will give you the lower end
    - `Math.ceil()`, value you put as parameter will give you the upper one
    - `Math.random()`, you don't need to put a parameter here as this returns a random floating-point number between 0 (inclusive) and 1 (exclusive)

**Modulo:**
- how many is left after something has been split up evenly
```
const smarties = 20;
const kids = 3;
const eachKidGets = smarties / kids;
console.log(`Each kid gets ${eachKidGets} smarties`); // Each kid gets 6.666666666666667 smarties
const left = smarties % kids;
console.log(`show me what's left: ${left}`);
```

**Floating-Point:**
```
const floatP = 0.1 + 0.2;
console.log('floating-point here: ', floatP); // 0.30000000000000004

```
- [floating point explained](https://0.30000000000000004.com/)

**Infinity / -Infinity:**
```
10 ** 2 // 100
1000 ** 20 // 1e+60
1000 ** 200; // Infinity
typeof Infinity // "number"
typeof -Infinity // "number"
```
- dealing with numbers that are too high to be calculated by computers

**NaN - Not a Number:**
```
10 / 'dog'; // NaN
typeof NaN; // "number"
```

## Type Object
- everything in JavaScript is an object
- used to collect data / functionality
- group things together
```
const person = {
  first: 'wes',
  last: 'bos',
  age: 300
};
console.table(person);
console.table(typeof(person)); // object
console.log(person.first); // wes
console.log(person.last); // bos
console.log(person.age); // 300
```
- order of property-value-pairs doesn't matter in an object, when you need something where order matters use an array
- access values via dot notation

## Type Symbol
- a way to do unique properties / unique identifiers
- more details later in the course

## Type Null and Undefined
**null and undefined**
- a way to express "nothing" in JavaScript
- both express "nothing" in JavaScript, but in different ways

**undefined**

- a value that not yet has a value set, hasn't assigned anything to it:
```
let home; // undefined
```
- if you try to access a variable which has been created but not set:
```
let dog;
console.log(dog); // undefined
```

**null**

- has no value set to it:
```
let somethingUndefined; // undefined
```
- has the value of null ("nothing") explicitly set:
```
let somethingNull = null; // null
```

## Type Boolean and Equality
- true or false
- on or off
- used for logic like if statements
- used for calculation
```
let age2 = 18;
const ofAge = age2 > 19;
console.log(ofAge); // false
age2 = 400;
console.log(age2); // 400
```

- `=` only for setting / assigning / updating a value of a variable
- `===`, `==` almost always use `===`
```
10 === 10 // true -> will check for value AND type
10 == 10 // true -> will check for value
"10" == 10 // true, only checks for value NOT type
"10" === 10 // false, different types
```