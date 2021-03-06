# Module 8 - Data Types

As most of the content is information and small coding bits, this README here is used as a notepad. <br>
This module contains no project. <br>

[Objects](#Objects)

[Object Reference vs Values](#Object-Reference-vs-Values)

[Map](#Map)

[Arrays](#Arrays)

[Array Cardio Static Methods](#Array-Cardio-Static-Methods)

[Array Cardio Instance Methods](#Array-Cardio-Instance-Methods)

[Array Cardio Callback Methods and Function Generation](#Array-Cardio-Callback-Methods-and-Function-Generation)

## Objects

**Following examples are referring to `object.html` and `object.js`**

- objects are one fundamental building block of JavaScript, just like strings, numbers, boolean
- actually everything in JavaScript is an object
- objects allow us to group together properties and values (keys and values)
- used for example for storing related data, storing functionality, creating your own custom types
- values of an object can be of _any_ type

**Important: objects can be used for where the order of the properties does not matter. You cannot trust the order in an object.**

### Object Literal Syntax

```
const person = {
  name: 'Helga',
  age: 100,
};
console.log(person); // {name: 'Helga', age: 100}
```

### Also possible but used rarely as the object literal syntax is much cleaner

```
const person = new Object({
  name: 'Helga',
  age: 100,
});
```

### Shorten a property/value pair

```
const age = 100;
const name = 'Helga';
const person = {
  name: name,
  age: age,
};
// can be shortened to
const person = { name, age };
console.log(person);
```
- if property and value are the same, it's possible to shorten to the property

### Create own properties

```
const person = {
  name: 'Helga',
  age: 100,
  'cool-dude': true,
  'really cool': true,
  '777': true,
};
console.log(person); // {777: true, name: 'Helga', age: 100, cool-dude: true, really cool: true}
```
- you can have properties with a dash in them
- you can have properties with spaces in them

**Reasoning to always put a comma at the end of the last property value pair**

- when a Syntax Error is shown because of a missing comma it will complain about the _newly_ added line - even though the comma is missing in the line _before_
- more important: Git
  - the person that has to add the next property value pair does not only have to add the new line but also needs to touch the line before to only add a comma
  - with Git Blame, that line will then fall on that person even though another person wrote the original code
- all modern browsers support putting a comma at the end of the last line

### Nested objects: access, add and overwrite through dot notation

```
const person = {
  name: 'Helga',
  age: 100,
  clothing: {
    shirts: 10,
    pants: 2,
  }
};
console.log(person.age); // 100
person.job = 'Chef cook';
person.age = 50;
console.log(person.job); // Chef cook
console.log(person.age); // 50
```

**Why is it possible to change a variable value that has been created with `const`?!**

- `const` does NOT mean that the VALUE of an object cannot be changed
- `const` means that the BINDING to `person` cannot be changed
- "a person can evole and get older, have another profession - so that can change but not the person itself"
- properties CAN change but the actual object itself (`person`) can never be overwritten entirely
### Immutable object

- freeze an entire object with `Object.freeze();`

```
const helga = {
  name: 'Helga',
  age: 100,
};
console.log(helga.age); // age: 100

helga.job = 'Chef cook';
helga.age = 50;
console.log(helga.age); // age: 50

const helgaFroze = Object.freeze(helga);
helga.age = 75;
console.log(helga.age); // age: 50
```

- that's not going to freeze the original object `helga` though
- it will return a new object `helgaFroze`, which can never be changed

### Bracket Notation - reason 1 for `[]`

```
const age = 100;
const person = {
  name: 'Helga',
  propertyToCheck: 'If I\'m logged - are you really looking for the property??',
  age: 100,
  clothing: {
    shirts: 10,
    pants: 2,
  }
};
person.job = 'Chef cook';
person.age = 50;

console.log('regular log:', person.age); // regular log: 50

const propertyToCheck = prompt('What do you want to check?');

console.log('regular square brackets:', person['age']); // regular square brackets: 50

// whatever you type in the prompt (and is a property in the object) will be logged
console.log('propertyToCheck square brackets:', person[propertyToCheck]);
// will literally look for the property 'propertyToCheck' and will log its value
console.log('propertyToCheck:', person.propertyToCheck);
```

**Why is there both `.` and `[]` - as `[]` seem to be much uglier?**

- `person[propertyToCheck])` is not going to look for a property called `propertyToCheck`
- what `person[propertyToCheck])` will do is use the string in that variable as a property look-up
- `console.log(person.propertyToCheck);` will literally look for the PROPERTY `propertyToCheck` on that object
- that's the reason why `[]` are used: `console.log('person[propertyToCheck]);` to reference the NAME of the property

### Bracket Notation - reason 2 for `[]`

- if properties on an object are not referencable via JavaScript, you have to use a string

```
const person = {
  name: 'Helga',
  age: 100,
  'cool-dude': true,
  'really cool': true,
  '777': true,
};

// console.log(person.cool-dude);
// Uncaught ReferenceError: dude is not defined

// console.log(person.cool - dude);
// Uncaught ReferenceError: dude is not defined

// console.log(person.really cool);
// Uncaught SyntaxError: missing ) after argument list

// console.log(person.777);
// Uncaught SyntaxError: missing ) after argument list

console.log(person['cool-dude']); // true
console.log(person['really cool']); // true
console.log(person[777]); // true
```

- `person.cool-dude`, `person.cool - dude`, `person.really cool`, `person.777` are invalid property look-ups
- if that's the case, use square bracket notation, to access those

**Why is that necessary in the first place?**

If you receive data from another language or data from a server side you don't have a choice or a lot of options - you need bracket notation in order to reference that data.

### Referencing multiple levels deep

```
const person = {
  name: 'Helga',
  age: 100,
  clothing: {
    shirts: 10,
    pants: 2,
  },
  'hey man': {
    shoes: 4,
  },
};

console.log(person.clothing.shirts); // 10
console.log(person['hey man'].shoes); // 4
```

### Check for existance

HTML:

```
<input type="text" name="first" value="valuehere">
```

JavaScript:
```
const nameInput = document.querySelector('[name="first"]');
const naming = nameInput.value;
console.log(nameInput); // input object
console.log(naming); // valuehere

const notPresentInput = document.querySelector('[name="not-present"]');
console.log(notPresentInput); // null
// const nomen = notPresentInput.value; // Uncaught TypeError: Cannot read property 'value' of null

const noma = notPresentInput ? notPresentInput.value : 'not present';
console.log(noma); // not present
```

- it's pretty common to check like this and return an empty string<br>
  `const noma = notPresentInput ? notPresentInput.value : '';`

### Move a property from an object

- with `delete`, delete a property from an object
- `delete` will return `true` or `false`

```
const person = {
  name: 'Helga',
  age: 100,
  clothing: {
    shirts: 10,
    pants: 2,
  },
  'hey man': {
    shoes: 4,
  },
};
const deleted = delete person['hey man'];
console.log(deleted); // true
console.log(delete person['hey man']); // true
console.log(person); // will log the object without deleted property 'hey man'
console.log(person['hey man']); // undefined, because deleted
```
### Methods

**What's the difference between a method and a function?**

A method is a function that lives inside of an object.

```
const person = {
  name: 'Helga',
  age: 100,
  sayHello: function (greeting = 'Hola') {
    return `${greeting} ${this.name}!`;
  },
};
console.log(person.sayHello()); // Hola Helga!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Helga!
```

**What is `this`?**

- `this` will always be equal to the left of the dot
- in this case `this` is equal to (the object) `person`
- for prototyping, to use a method on multiple instances, not only on `person`,
- more on that in future courses

### Method shorthand

```
const person = {
  name: 'Helga',
  age: 100,
  sayHello(greeting = 'Hola') {
    return `${greeting} ${this.name}!`;
  },
};
console.log(person.sayHello()); // Hola Helga!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Helga!
```

### Method arrow function

```
const person = {
  name: 'Helga',
  age: 100,
  sneeze: () => {
    console.log('regular log:', 'ahhhchoooo');
    // regular log: ahhhchoooo

    console.log('with this:', 'ahhhchoooo', this);
    // with this: ahhhchoooo Window??{window: Window, self: Window, document: document, name: "", location: Location,?????}
  },
};
person.sneeze();
```

- `this` is equal to `window`
- because it is an arrow function as a property on an object, there is no access to the `this` keyword

### Method regular function

```
  name: 'Helga',
  age: 100,
  sneeze1: function () {
    console.log('regular function:', 'brrrr', this);
    // regular function: brrrr {name: "Helga", age: 100, sneeze: ??, sneeze1: ??}
  }
};
person.sneeze1();
```

- `this` is equal to (the object) `person`

**Arrow functions do not scope `this` to the thing that they are called against, the parent scope will inherit `this`.**

## Object Reference vs Values

**Following examples are referring to `ref-vs-value.html` and `ref-vs-value.js`**

### Strings

```
let name1 = 'betty';
let name2 = 'betty';
console.log(name1 === name2); // true

name1 = 'paul';
console.log(name1 === name2); // false

// update name1 what is to be name2
name1 = name2;
console.log(name1 === name2); // true

name2 = 'bettina';
console.log(name1 === name2); // false
console.log(name2); // bettina
```

- `===` checks
  - the type: is string
  - the value: is exactly the same thing
- when taking `name1` and setting it to `name2` like this `name1 = name2;`, the value of `name2` is taken, copied and pasted into `name1`
- when one of the variables is updated, the other one that has been pointing to does not update itself

### Objects

**Example - comparing objects / object values**

```
const person1 = {
  first: 'todd',
  last: 'smith',
};
const person2 = {
  first: 'todd',
  last: 'smith',
};
console.log(person1 === person2); // false
```

**Why is that `false`?**
- when you are comparing objects, it is done by reference to the object itself, NOT the values inside of it
- even if the content is exactly the same, it is NOT the same object

**Example - object reference**

```
const person1 = {
  first: 'todd',
  last: 'smith',
};
const person2 = {
  first: 'todd',
  last: 'smith',
};
console.log(person1 === person2); // false

const person3 = person1;
console.log(person3); // {first: 'todd', last: 'smith'}
person1.first = 'teddy';
console.log(person3.first); // teddy
console.log(person1.first); // teddy (!)
console.log(person1); // {first: "teddy", last: "smith"}
console.log(person2); // {first: "todd", last: "smith"}
console.log(person3); // {first: "teddy", last: "smith"}

person3.last = 'cool';
console.log(person3); // {first: "teddy", last: "cool"}
console.log(person1); // {first: "teddy", last: "cool"}
```

- `person3` was updated and `person1` was ALSO updated
- `const person3 = person1;` we are creating a variable that **references** (or points) to the original object, instead of making a copy of it
- this happens when Objects (and Arrays) are **referenced** to
- in this example `person3` was never its own object, it was only pointing to `person1`

### Copy via spread operator

- spread `...` operator
- takes in every single item in an object
- takes a copy of single item
- spreads them into a new object
- copying will only work one level deep!
- "shallow copy"

```
const person1 = {
  first: 'todd',
  last: 'smith',
};
const person2 = {
  first: 'todd',
  last: 'smith',
};
console.log(person1); // {first: 'todd', last: 'smith'}
console.log(person2); // {first: 'todd', last: 'smith'}

const person3 = { ...person1 };
console.log(person3); // {first: "todd", last: "smith"}

person3.first = 'Larry';
console.log(person3.first); // Larry
console.log(person1.first); // todd
console.log(person3); // {first: "Larry", last: "smith"}

// copy va Object.assign()
const person4 = Object.assign({}, person1);
console.log(person3); // {first: "Larry", last: "smith"}
```

- copy via `Object.assign()` operator
- not that popular anymore since `spread` has been introduced
- first argument is an empty object, second argument is the object that is supposed to be fold into the first argument's empty object

### Copy only goes one level deep!

```
const person1 = {
  first: 'todd',
  last: 'smith',
  clothing: {
    shirts: 2,
    shoes: 4,
  },
};
const person2 = {
  first: 'todd',
  last: 'smith',
};

const person3 = { ...person1 };
console.log(person3);
// {first: "todd", last: "smith", clothing: {{shirts: 2, shoes: 4}}}

person3.clothing.shirts = 100;
console.log(person3);
// {first: "todd", last: "smith", clothing: {{shirts: 100, shoes: 4}}}

console.log(person1);
// {first: "todd", last: "smith", clothing: {{shirts: 100, shoes: 4}}} // person1 was also updated
```
- `person1` was also updated
- spread operator `{ ...object }` and `Object.assign()` operator both only go one level deep
- both only do shallow copies

### Deep Copy / Deep Clone, e.g. lodash

- via utility library, for example lodash https://lodash.com/
- has lots of methods to work with objects and arrays, one of the is working with copies
- can be included in your script
- all of lodash methods live in the `_`
- `_.cloneDeep(value)` https://lodash.com/docs/4.17.15#cloneDeep

**How to include lodash in your project?**

```
<body>
  ...
  <script src="https://unpkg.com/lodash@4.17.21/lodash.js"></script>
  <script src="./ref-vs-value.js"></script>
</body>
```
- use https://unpkg.com/#/
- change URL to https://unpkg.com/lodash@4.17.21/lodash.js will return the most recent lodash version
- then take that URL and have it as a script tag in your HTML, right before your own scripts start
- when your own JavaScript is depending on having lodash first, put lodash first

```
const person1 = {
  first: 'todd',
  last: 'smith',
  clothing: {
    shirts: 2,
    shoes: 4,
  },
};
const person2 = {
  first: 'todd',
  last: 'smith',
};

const person3 = _.cloneDeep(person1);
person3.clothing.shirts = 100;

console.log(person1);
// {first: "todd", last: "smith", clothing: {{shirts: 2, shoes: 4}}}

console.log(person3);
// {first: "todd", last: "smith", clothing: {{shirts: 100, shoes: 4}}}
```

### Merging objects via spread operator

```
const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 2,
};
const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 10,
};
const inventory = {
  ...meatInventory,
  ...veggieInventory,
  lobsters: 5
};
console.log(inventory);
// bacon: 2 lettuce: 5 lobsters: 5 oyster: 10 sausage: 3 tomatoes: 3
```
- you can spead in as many objects as you want
- you can add your own property value pair
- **in case of duplicate properties, the last one in the code wins and overwrites the one before**

### Reference vs copy in functions

```
let name1 = 'betty';

function doStuff(data) {
  data = 'something else';
  console.log(data); // something else
}

doStuff(name1);
console.log(name1); // betty
```
- when we pass in `name1` to `doStuff()`, it only passes in the **value**
- it does NOT reference to the external variable

### Reference vs copy with objects in functions

```
const meatInventory = {
  bacon: 2,
  sausage: 3,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

function doStuff2(data) {
  data.tomatoes = 5000;
  console.log(data);
  // bacon: 2 lettuce: 5 sausage: 3 tomatoes: 5000
}

doStuff2(inventory);
console.log(inventory);
// bacon: 2 lettuce: 5 sausage: 3 tomatoes: 5000
```
- when you pass in an object into a function, and you modify that object inside of that function, the external object will also be updated
- this is not the case for booleans, numbers and strings - it IS the case for objects and arrays
- be careful to not accidentally also modify data that lives outside of that function

## Map

**Following examples are referring to `maps.html` and `maps.js`**

- `Map()` is very similar to an object
- `Map()` is simply for storing data
- in order to add/delete items on `Map()`, on it we have
  - the `.set()` API
  - the `.get()` API
  - the `.has()` API
  - the `.delete()` API

**In a lot of the exercises that will follow - whenever there's the need to create an object - first it should be evaluated if `Map()` can be used.** <br>
Why would you want to use a `Map()` over an object?<br>
Use `Map()` if you do need to maintain the order of your items.

```
const myMap = new Map();
myMap.set('name', 'wes');
console.log(myMap); // Map(1)??{'name' => 'wes'}
myMap.age = 100;
console.log(myMap); // Map(1)??{'name' => 'wes'} // 100 is in there but not added at the same spot
```

![mod 0803](./img/screen-mod0803-01.png)

- `.set(key, value)` takes two arguments, first one is the key, second one is the value you want to set
- `[[Entries]]` are the actual values in `Map()`
- `age` is not in the same spot, it's a property ON `Map()` but NOT an actual entry IN `Map()`

### Example dictionary with `Map()`

Dictionaries are a way to store additional metadata about something.

```
const person1 = {
  name: 'wes',
  age: 200,
};
const myMap = new Map();
myMap.set('name', 'wes');
myMap.set(100, 'this is a number');
// key is the reference to an object
// value can be anything
myMap.set(person1, 'really cool');
console.log(myMap);
```

![mod 0803](./img/screen-mod0803-02.png)

- to store additional information inside of `Map()` use the reference to the `person1` object as a key in `myMap.set(person1, 'really cool');`
- the key is actually an object and the value is `'really cool'`
- why would that be useful? when at a later point in time you want to reference that / to look it up, use `get()`, see below:

```
const person1 = {
  name: 'wes',
  age: 200,
};
const myMap = new Map();
myMap.set('name', 'wes');
myMap.set(100, 'this is a number');
// key is the reference to an object
// value can be anything
myMap.set(person1, 'really cool');
console.log(myMap);
console.log(myMap.get(person1));
```

![mod 0803](./img/screen-mod0803-03.png)

- use the nice `get()` method, instead of using a unique string or an ID to look the value up later
- use the reference of the object as the key in `Map()` see in this example `console.log(myMap.get(person1));`
- values again can be of ANY type

### Example score with `Map()`

```
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

console.log(`you win a ${prizes.get(score)}`); // you win a bear
console.log(prizes.size); // 3
```
- on `Map()` store some additional information about `score`
- previously, if this was an object, we would have had to use a string of the number in order to look it up
- with `Map()` we can simply use a number `const score = 100` to look up what the corresponding prize is (`you win a bear`)

### Example looping with `Map()` - return value `forEach()`

```
const ul = document.querySelector('.prizes');
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

// returns the value
prizes.forEach(entry => {
  console.log(entry);
});
```

![mod 0803](./img/screen-mod0803-04.png)

### Example looping with `Map()` - return value AND key `for (... of ...)`

```
const ul = document.querySelector('.prizes');
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

// returns value AND key
for (const prize of prizes) {
  console.log(prize);
  // (2)??[100, 'bear'] // (2)??[200, 'duck'] // (2)??[300, 'cat']
  // console.log(prize[0], prize[1], prize[2]);
}
```

![mod 0803](./img/screen-mod0803-05.png)

- looping over all of the entries in prizes `Map()`
- for each create a temporary variable `prize`
- log it

### Example destructuring with `Map()` and creating `<ul>`, `<li>` in the HTML

```
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

const ul = document.querySelector('.prizes');
for (const [points, prize] of prizes) {
  console.log(points, prize);

  const li = `
    <li>${points} - ${prize}</li>
  `;
  ul.insertAdjacentHTML('beforeend', li);
};
```

![mod 0803](./img/screen-mod0803-06.png)
![mod 0803](./img/screen-mod0803-07.png)

### Example Array of Arrays with `Map()`

```
const arrayOfArrays = new Map([
  ['name', 'bella'],
  ['age', '75']
]);
console.log(arrayOfArrays);
```

![mod 0803](./img/screen-mod0803-08.png)

- you can pass an array of multiple arrays into `new Map()`
- object literal syntax is a bit nicer than that though

### Example `.delete()` a property on `Map()`

```
const person1 = {
  name: 'wes',
  age: 200,
};
const myMap = new Map();
console.log(person1); // {name: 'wes', age: 200}

myMap.set('name', 'helga');
myMap.set(100, 'this is a number');
myMap.set(person1, 'really cool');
console.log(person1); // // {name: 'wes', age: 200}
console.log(myMap); // Map(3)??{'name' => 'helga', 100 => 'this is a number', {???} => 'really cool'}

myMap.delete('name');
console.log(myMap); // Map(2)??{100 => 'this is a number', {???} => 'really cool'}
```

![mod 0803](./img/screen-mod0803-09.png)

**PROS of `Map()`**
- `.set()`, `.get()`, `.has()`, `.delete()`
- the keys and the values in `Map()` can be of ANY type
  - previously in the course, there only was the ability to put different types in the VALUE portion of an object
  - `Map()` allows to put ANY type into the key and the value
- order IS guaranteed (with an object, order is NOT guaranteed)

**CONS of `Map()`**
- there is no object literal syntax (as is with objects), we have to create a `new Map()` and then set the items (you _can_ pass items into a `Map()` though, with array of arrays)
- you cannot put functions inside of `Map()` (as you can with objects), that's not what `Map()` is for
- JSON
  - currently JSON does not handle `Map()`
  - if you use `Map()` and want to send your code for example via email, you have to convert it to an object first to then make it a JSON
  - `Object.fromEntries()` tries its best to convert to an object

## Arrays

**Following examples are referring to `arrays.html` and `arrays.js`**

### What's an array?

- an array is used to hold a list of items where the order **matters**
- each item in an array can be of **any** type
- each item's position is called an index
- arrays are zero-based, the index starts counting at `0`
- the number of items inside of an array is called a length
- an array has no keys, the keys are always going to be indexes
- whereas the `{}` are for an object, `[]` are for an array
- an array is of type object (!), it is NOT its own type
- an array can hold data that has a bunch of methods on them that live inside of the array

### Array Literal Syntax

```
const names = [];
```
- similar as with objects, you could also do this `const names = new Array();`

```
const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3)??['wes', 'kait', 'snickers']
// check typeof
console.log(typeof names); // object
// check if type is array
console.log(Array.isArray(names)); // true
// access items
console.log(names[1]); // kait
// check for length
console.log(names.length); // 3
// check for the last item
console.log(names[names.length - 1]); // will return the last one: snickers
```

![mod 0804](./img/screen-mod0804-01.png)

### Array Methods

Most of the methods are immutable, but there are some to be careful with (will be addressed later in the course)

#### Mutable

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBackwards = numbers.reverse();
console.log(numbersBackwards); // (9)??[9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9)??[9, 8, 7, 6, 5, 4, 3, 2, 1]
```
- mutable methods perform mutations, they DO change the original data
- the original array has been reversed as well
- the second const `const numbersBackwards = numbers.reverse();` is not needed/too verboxe, do `numbers.reverse();` instead

#### Immutable

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice); // (2)??[3, 4]
console.log(numbers); // (9)??[1, 2, 3, 4, 5, 6, 7, 8, 9]
```
- use the `slice()` method
- immutable methods DO NOT change the original data
- immutable methods return a new array

#### Immutable with copy of original array

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersReversed = [...numbers].reverse();

console.log(numbersReversed); // (9)??[9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9)??[1, 2, 3, 4, 5, 6, 7, 8, 9]
```
- NOT mutate the original array but take a copy of the original array first
- then work with slice `[...numbers]`
- immediately call `reverse()` on it

#### Add item to the end of an array with `push()`

```
const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3)??['wes', 'kait', 'snickers']
names.push('lux');
console.log(names); // (4)??["wes", "kait", "snickers", "lux"]
```
- `push()` adds an item to the end of an array
- **mutates** the original array

#### Add item to the front of an array with `unshift()`

```
const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3)??['wes', 'kait', 'snickers']
names.unshift('poppy');
console.log(names); // (4)??["poppy", "wes", "kait", "snickers"]
```
- `unshift()` adds an item to the front of an array
- **mutates** the original array

#### Add item to the end of an array with spread `...` - immutable

```
const names = ['wes', 'kait', 'snickers'];
const names2 = [...names, 'lux'];
console.log(names2); // (4)??["wes", "kait", "snickers", "lux"]
console.log(names); // (4)??["wes", "kait", "snickers"]
```
- keeps the original array intact with creating a new array
- copies the original array via spread `...`

#### Add item to the front of an array with spread `...` - immutable

```
const names = ['wes', 'kait', 'snickers'];
const names2 = ['lux', ...names];
console.log(names2); // ["lux", "wes", "kait", "snickers"]
console.log(names); // (4)??["wes", "kait", "snickers"]
```

#### `slice()` and `splice()`

- they are both used to grab a subset of the original array
- `slice()` is immutable, does not mutate the original array
- `splice()` is mutable

**`slice()` - immutable**

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice); // (2)??[3, 4]
console.log(numbers); // (9)??[1, 2, 3, 4, 5, 6, 7, 8, 9]
```
- is immutable, the original array will not be modified
- returns a shallow copy
- takes 2 arguments - start and end
- start and end represent the index of items in that array
- returns a new array with the end not included
- start with index 2 (which is 3), stop before/do not include index 4 (which is 5)

**`splice()` - mutable**

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(3, 2);
console.log(numbers); // (7)??[1, 2, 3, 6, 7, 8, 9]
```
- is mutable, changes the content of the original array by removing or replacing existing elements
- takes 2 arguments - start and "how many you should go for"
- go to index 3 (which is `4`), from there splices off 2 items (which is `4, 5`)

#### Add item to the middle of an array with spread `...` and `slice()`

```
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
  ...bikes.slice(0, 2),
  'benotto',
  ...bikes.slice(2)
];
console.log(newBikes); // (5)??["bianchi", "miele", "benotto", "panasonic", "miyata"]
console.log(bikes); // (4)??["bianchi", "miele", "panasonic", "miyata"]
```
- immutable
- there is no method to insert an item at a specific index and have the rest pushed over
- for the `...` after inserting `'benotto'`, there is no need to put an "end of index" number, it's enough to have the "with this index number the end begins"

#### Remove item from the middle of an array with spread `...` and `slice()`

```
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
  ...bikes.slice(0, 2),
  ...bikes.slice(3)
];
console.log(bikes); // (4)??["bianchi", "miele", "panasonic", "miyata"]
console.log(newBikes); // (3) ["bianchi", "miele", "miyata"]
```
- immutable
- takes up everything up until `'panasonic'` (`0, 2`)
- skips one (`2`) and starts with a one plus from there (`3`), with that, wents to the end

**`findIndex()`, if/else**

```
const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
console.log(names); // (5)??["poppy", "wes", "kait", "snickers", "lux"]
const kaitIndex = names.findIndex(name => {
  if (name === 'kait') {
    return true;
  } else {
    return false;
  }
});
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait
```

**`findIndex()`, shorter, explicit return**

```
const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => {
  return (name === 'kait')
});
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait
console.log(names); // (5)??["poppy", "wes", "kait", "snickers", "lux"]
```

**`findIndex()`, implicit return, spread `...`**

```
const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => name === 'kait');
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait
const newNamesWithoutKait = [
  // get everything up to kaitIndex
  ...names.slice(0, kaitIndex),
  // everything after kaitIndex
  ...names.slice(kaitIndex + 1)
];
console.log(newNamesWithoutKait); // (4)??["poppy", "wes", "snickers", "lux"]
console.log(names); // (5)??["poppy", "wes", "kait", "snickers", "lux"]
```

**`findIndex()`, implicit return, `flat()`**

```
const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => name === 'kait');
const newNamesWithoutKait = [
  // get everything up to kaitIndex
  names.slice(0, kaitIndex),
  // everything after kaitIndex
  names.slice(kaitIndex + 1)
].flat();
console.log(newNamesWithoutKait); // (4)??["poppy", "wes", "snickers", "lux"]
console.log(names); // (5)??["poppy", "wes", "kait", "snickers", "lux"]
```

**`findIndex()`, spread `...` and `slice()`**

```
const comments = [
  { text: 'Cool Beans', id: 123 },
  { text: 'Love This', id: 133 },
  { text: 'Neato', id: 233 },
  { text: 'Good Bikes', id: 333 },
  { text: 'So Good', id: 433 },
];

function deleteComment(id, comments) {
  // find the index of an item in the array
  const commentIndex = comments.findIndex(comment => comment.id === id);
  // make a new array without an item in it
  // return new array
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
  ];
};
console.log(comments); // (5)??[{???}, {???}, {???}, {???}, {???}]
console.log(deleteComment(233, comments)); // (4)??[{???}, {???}, {???}, {???}]
console.log(comments); // (5)??[{???}, {???}, {???}, {???}, {???}]
```

![mod 0804](./img/screen-mod0804-02.png)

## Array Cardio Static Methods

**Following examples are referring to `array-methods.html` and `array-methods.js`**

There are static methods and there are instance or prototype methods.<br>

**What does Static Method mean?**

- static methods live on the `Array`
- `Array.of()`
- `Array.from()`
- `Array.isArray()`
- they are often called "utility methods", handy methods for creating/working with arrays
- they are not a method like `push()`
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods

### `Array.of()`

```
const names = Array.of('wes', 'kait', 'snickers');
console.log(names); // (3)??["wes", "kait", "snickers"]
console.log(Array.of(...'wes')); // (3)??["w", "e", "s"]
```

- will create an array from the argument you pass it
- spread `...` into a function call is possible
  - will take an iterable (something with a length; strings have a length) and return an array from that iterable
- `Array.of()` is most likely rarely used
- most of the time you'll create an array this way:

```
const names2 = ['wes2', 'kait2', 'snickers2'];
console.log(names2); // (3)??["wes2", "kait2", "snickers2"]
```

### `Array.from()`

```
const from = Array.from({ length: 10 });
console.log(from);
```
![mod 0804](./img/screen-mod0804-04.png)

- will take an iterable (something with a length; in this case an object with a length property) and return an array from that iterable
- example will return an array with 10 empty spots

### `Array.from()` with function that creates a range from x to y

```
const range = Array.from({ length: 10 }, function() {
  return 'wes';
});
console.log(range); // (10)??["wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes"]
```

- `Array.from()` takes two arguments
  - the first one is an iterable (most likely will be an an object with a length property)
  - the second argument is referred to as a map argument (callback function)

```
const range = Array.from({ length: 10 }, function(item, index) {
  return index;
});
console.log(range); // (10)??[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

- the callback function can take two arguments `function(item, index)`
- in our example `item` is undefined, so we can refer to it with `function(_, index)` or `function(_item, index)` or `function(item, index)` - just to denote that item doesn't do anything

```
function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}

console.log(createRange(3, 7)); // (5)??[3, 4, 5, 6, 7]
```
- we can use this to make a function
- the function is inclusive of the end number
- "start at 3 (inclusive 3), end at 7 (inclusive 7)"
- **be careful: there is a limit how large your arrays can be**
- you most likely run into large arrays when you deal with 3d graphics

### `Array.isArray()`, check if array really is an array, aka `true`

```
function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}
const myRange = createRange(3, 7);
console.log(Array.isArray(myRange)); // true
```

### Object.entries(), Object.keys(), Object.values() - make three arrays with each method

**Those are static methods that are on the OBJECT instead of on the array, however, they RETURN ARRAYS.**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));
```

![mod 0804](./img/screen-mod0805-01.png)

- `Object.entries()`
  - returns an array of the keys, or values, or - as in our case - both of them
  - gives us an array where each item of it is a nested array inside of it
- `Object.keys()`
  - returns an array of all the object keys
- `Object.values()`
  - returns an array of all the object values

**`forEach()` looping**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

Object.values(meats).forEach(qty => {
  console.log(qty); // 10 // 5 // 7
});

Object.keys(meats).forEach(qty => {
  console.log(qty); // beyond // beef // pork
});
```

- would be a pretty common way to use

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

Object.entries(meats).forEach(entry => {
  console.log(entry); // (2)??["beyond", 10] // (2)??["beef", 5] // (2)??["pork", 7]
});
```
- for each one you get an array with two items
- first item is always going to be the key
- second item is always going to be the value

**`forEach()`, split up into their own variables**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
Object.entries(meats).forEach(entry => {
  const key = entry[0];
  const value = entry[1];
  console.log(key, value); // beyond 10 // beef 5 // pork 7
});
```

**`forEach()`, split up into their own variables, destructuring**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};
Object.entries(meats).forEach(entry => {
  const [key, value] = entry;
  console.log(key, value); // beyond 10 // beef 5 // pork 7
});
```
- or
```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
Object.entries(meats).forEach(([key, value]) => {
  console.log(key, value); // beyond 10 // beef 5 // pork 7
});
```

## Array Cardio Instance Methods

**Following examples are referring to `array-methods.html` and `array-methods.js`**

**What does Instance Method (or Prototype Method) mean?**

![mod 0804](./img/screen-mod0804-03.png)

- instance or prototype methods are the methods with `Array.prototype.something()`:
- when you create an array you get what is referred to as the array prototype
- these are the methods that are on every single array

**`join()`**

```
const buns = ['egg', 'wonder', 'brioche'];

console.log(buns); // ["egg", "wonder", "brioche"]
console.log(buns.join()); // egg,wonder,brioche
console.log(buns.join(' or ')); // egg or wonder or brioche
```

- `join()` turns an array into a string

**`split()`**

```
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split()); // ["hot dogs,hamburgers,sausages,corn"]
console.log(foodString.split(',')); // ["hot dogs", "hamburgers", "sausages", "corn"]
console.log(foodString.split(''));
// ["h", "o", "t", " ", "d", "o", "g", "s", ",", "h", "a", "m", "b", "u", "r", "g", "e", "r", "s", ",", "s", "a", "u", "s", "a", "g", "e", "s", ",", "c", "o", "r", "n"]
```

- `split()` turns a string into an (one) array
- is a method on a string

```
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split(''));
// ["h", "o", "t", " ", "d", "o", "g", "s", ",", "h", "a", "m", "b", "u", "r", "g", "e", "r", "s", ",", "s", "a", "u", "s", "a", "g", "e", "s", ",", "c", "o", "r", "n"]
```

- `split()` on `''` is pretty much similar to spread `...`
- `split()` on `''` returns a string, split into single characters including spaces and commas

**`pop()`**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const lastItem = toppings.pop();
console.log(lastItem); // Cheese
console.log(toppings); // (3)??["Mushrooms ", "Tomatoes", "Onions"]
```

- `pop()` returns the last item of an array
- it takes the last item off of the original array
- it's a **mutable method** because it **mutates the original array**

**`push()`**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const lastItem = toppings.pop();
console.log(lastItem); // Cheese
console.log(toppings); // (3)??["Mushrooms ", "Tomatoes", "Onions"]

const t2 = toppings.push(lastItem);
console.log(t2); // 4
console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
```

- `push()` will return the new length of the array

**`shift()`**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const firstItem = toppings.shift();
console.log(firstItem); // Mushrooms
console.log(toppings); // (3)??["Tomatoes", "Onions", "Cheese"]
```

- `shift()` takes off the first item of an array, **mutates** the original array

**`unshift()`**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const firstItem = toppings.shift();
console.log(firstItem); // Mushrooms
console.log(toppings); // (3)??["Tomatoes", "Onions", "Cheese"]

toppings.unshift(firstItem);
console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
```

- `unshift()` puts the item taken off via `shift()` back

**IMMUTABLE - use `slice()` and spread `...` to take off / bring back items**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]

let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings); // (3)??["Mushrooms ", "Tomatoes", "Onions"]

// add it back
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
```

- spreads everything from the `newToppings` array into the array
- adds on that last item
- use of `let` because of overwriting

**`slice()` - make a copy of the toppings array**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log('original', toppings); // original (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const toppingsCopy = toppings.slice(0);
console.log('copy because of slice', toppingsCopy); // copy because of slice (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

toppings[0] = 'Mushy Boi';
console.log('because of slice this is a copy already; changed', toppings); // because of slice this is a copy already; changed (4)??['Mushy Boi', 'Tomatoes', 'Onions', 'Cheese']
console.log('is the unchanged copy of the original', toppingsCopy); // is the unchanged copy of the original (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']
```

- use `slice()` to make a copy of an array

**spread `...` - make a copy of the toppings array**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log('original', toppings); // original (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

const toppingsCopy = [...toppings];
console.log('copy because of spread', toppingsCopy); // copy because of spread (4)??['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese']

toppingsCopy[0] = 'PARMESAN';
console.log('because of spread this is a copy already; changed', toppingsCopy); // because of spread this is a copy already; changed  (4)??['PARMESAN', 'Tomatoes', 'Onions', 'Cheese']
```

- use spread `...` to make a copy of an array

**`splice()` - take items off of the toppings array**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];
console.log(toppings); // (11)??["Mushrooms ", "Tomatoes", "Eggs", "Chili", "Lettuce", "Avocado", "Chiles", "Bacon", "Pickles", "Onions", "Cheese"]
const toppingsCopy = [...toppings];

toppingsCopy.splice(3, 5);
console.log(toppingsCopy); // (6)??["Mushrooms ", "Tomatoes", "Eggs", "Pickles", "Onions", "Cheese"]
```

- use `splice()` to take out items off an array

**`indexOf()` / `lastIndexOf()` to find the index of `'Avocado'`**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Cheese'];
console.log(toppings); // (7)??["Mushrooms ", "Tomatoes", "Eggs", "Chili", "Lettuce", "Avocado", "Cheese"]
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex); // 5

const avoZwo = toppings.lastIndexOf('Avocado');
console.log(avoZwo); // 5
```

- previously, `.find()` was used but if you're sure what exactly you are looking for (simply strings or numbers or reference to an object), `indexOf()` will do what you want to do
- `indexOf()` will return the first instance
- `indexOf()` works with any types
- `indexOf()` is giving reference to objects

**Gotcha `indexOf()`**

```
const wesObject = { name: 'wes' };
const people = [{ name: 'scott' }, wesObject];

console.log(people); // (2)??[{???}, {???}]

// giving reference to that object
console.log(people.indexOf(wesObject)); // 1

// it did not find anything
console.log(people.indexOf({ name: 'scott' })); // -1
```

**Why does it work when you pass it an object `people.indexOf(wesObject)` but doesn't work when you pass it an object that is kinda of the same "structure" and content `people.indexOf({ name: 'scott' })`?**

- even though the objects `{ name: 'scott' }` may look exactly the same, they are NOT the exact same thing
- **objects don't do a deep check for all the properties**
- in case of `wesObject`, it checks if that object is the exact same object as the object in here `[{ name: 'scott' }, wesObject]`, in this case it's `true`
- whereas when you just checked it for an object that looks exactly the same `{ name: 'scott' }` it returns `false`
- **reference vs value** again
- if you're looking for someone with the name of `'scott'` then you need to use `find()` with a callback

**`includes()` - check if an item is in an array**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
const isInToppings = toppings.includes('Hot Sauce');

console.log(isInToppings); // false
console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]

// add it if it's not there
if (!isInToppings) {
  toppings.push('Hot Sauce');
}

console.log(!isInToppings); // true
console.log(toppings); // (5)??["Mushrooms ", "Tomatoes", "Onions", "Cheese", "Hot Sauce"]
```

- `includes()` is NOT case sensitive
- if you'd want to check for all different versions (`hot sauce`, `Hot sauce`, `hot Sauce`, etc), you'd first lowercase the entire array (more on that later in the course, `map()`)
- `includes()` checks if the array includes a number, a string, or reference to an object

**`reverse()` - flip topping - mutable method**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];

console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
toppings.reverse();
console.log(toppings); // (4)??["Cheese", "Onions", "Tomatoes", "Mushrooms "]
```

- mutatable method, meaning it will reverse the original `toppings` array

**`reverse()` - flip topping - immutable method**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];

console.log(toppings); // (4)??["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed); // (4)??["Cheese", "Onions", "Tomatoes", "Mushrooms "]
```

- make a new array
- take a copy of the original array with spread `...`
- spread the previous array into it
- `reverse()` the new array

## Array Cardio Callback Methods and Function Generation

**Following examples are referring to `callback.html` and `callback.js`**

```
function doSomething(element, index, array) {
  //  function body
}
```

- callback functions as we want to use them can take in 3 arguments
  - element = each individual item (in the example below, this would be `singleFeedback`)
  - `index`, often shortened to `i` (if you ever need to know what index something is, when you are in the loop, you have access to it)
  - `array`, if you need to reference the entire array
- general goal is to have a reusable function

**SIMPLE FUNCTION - `find()`**

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function findBurgRating(singleFeedback) {
  // long version:
  if (singleFeedback.comment.includes('burg')) {
    return true;
  } else {
    return false;
  }
  // short version:
  // return singleFeedback.comment.includes('burg');
}

const burgRating = feedback.find(findBurgRating);
console.log(burgRating); // {comment: "Love the burgs", rating: 4}
```

- the argument of `find()` is a function that either returns `true` or `false`
- with `find(findBurgRating)` we are not _calling_ the function `findburgRating`, just passing a reference to it!
- JavaScript itself is going to run this function once for each of the `singleFeedback` items in our `feedback` array

**ASSIGNING the function to a const, `const findBurgRating`**

- another way of doing this
`findBurgRating` as a `const`, no `if / else`, explicit `return`

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const findBurgRating = function(singleFeedback) {
  return singleFeedback.comment.includes('burg');
}

const burgRating = feedback.find(findBurgRating);
console.log(burgRating); // {comment: "Love the burgs", rating: 4}
```

**ARROW FUNCTION**

- another way of doing this
- `const findBurgRating` as arrow Function

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const findBurgRating = singleFeedback => {
  return singleFeedback.comment.includes('burg');
}

const burgRating = feedback.find(findBurgRating);
console.log(burgRating); // {comment: "Love the burgs", rating: 4}
```

**IMPLICIT RETURN**

- another way of doing this
- `const findBurgRating` as a one liner

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const findBurgRating = singleFeedback => singleFeedback.comment.includes('burg');

const burgRating = feedback.find(findBurgRating);
console.log(burgRating); // {comment: "Love the burgs", rating: 4}

```

**PUTTING A FUNCTION INSIDE OF AN OBJECT**

- another way of doing this
- put the original function `findBurgRating` inside of an object
- that makes it a method
- can be called via dot notation

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];
// putting the function inside of an object, that makes it a method
const util = {
  findBurgRating: function(singleFeedback) {
    return singleFeedback.comment.includes('burg');
  }
}
console.log(util.findBurgRating); // ?? (singleFeedback) { return singleFeedback.comment.includes('burg'); }
```

**High-order function - function that returns other function**

- if you ever get the feeling that your code is too verbose and can be shortended

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

// the lines below are really unefficient and tied to 'burg' / 'smoothie', how to make this more general?
const findBurgRating = singleFeedback => singleFeedback.comment.includes('burg');
const findSmoothieRating = singleFeedback => singleFeedback.comment.includes('Smoothie');
const burgRating = feedback.find(findBurgRating);
const smoothieRating = feedback.find(findSmoothieRating);
console.log(burgRating, smoothieRating); // {comment: 'Love the burgs', rating: 4} // {comment: 'Smoothies are great, liked the burger too', rating: 5}
```

- how to make this more general?
- make a function `findByWord()` that returns another function:

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  }
}

const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothies'));
console.log(burgRating, smoothieRating); // {comment: 'Love the burgs', rating: 4} // {comment: 'Smoothies are great, liked the burger too', rating: 5}
```

- `findByWord()` does not find the burger or smoothie themselves
- it just returns a function which then in turn will find them for you

**SIMPLE FUNCTION - `filter()` - find all ratings that are above 2**

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

// regular function - long version
/* const goodReviews = feedback.filter(singleFeedback => {
  if (singleFeedback.rating > 2) {
    return true;
  } else {
    return false;
  }
}); */

// regular function - short version
const goodReviews = feedback.filter(singleFeedback => {
  return singleFeedback.rating > 2;
});

console.table(goodReviews);
```

- `filter()` works pretty much the same as `find()` but will return a new array instead of one item
- `filter()` method will loop over every single item
- will either return `true` or `false`

![mod 0806](./img/screen-mod0806-01.png)

**IMPLICIT return**

- another way of doing this
- `const goodReviews` as a one liner

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const goodReviews = feedback.filter(singleFeedback => singleFeedback.rating > 2);
console.table(goodReviews);
```

**High-order function - function that returns other function**

- make a function `filterByMinRating()` that returns another function:

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function filterByMinRating(minRating) {
  return function(singleFeedback) {
    return singleFeedback.rating > minRating;
  }
}

const goodReviews = feedback.filter(filterByMinRating(2));
console.table(goodReviews);
```

**`filter()` - find all ratings that talk about burger**

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  }
}

const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);
```

![mod 0806](./img/screen-mod0806-02.png)

**`filter()` - remove the one star rating**

```
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const legitRatings = feedback.filter(single => single.rating !== 1);
console.table(legitRatings);
```

![mod 0806](./img/screen-mod0806-03.png)

**`some()` - check if there is at least one type of meat has value 5**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

console.log(Object.values(meats)); // (3)??[10, 5, 7]

const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
console.log(isThereEnoughOfAtLeastOneMeat); // true
```

- with `Object.values()`, convert object into array to use the method `some()` on it
- we loop over every single item `Object.values(meats)`, check if it's `>= 5`, return result as array

**`every()` - make sure we have at least 3 of every meat**

```
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

console.log(Object.values(meats)); // (3)??[10, 5, 7]

const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
console.log(isThereEnoughOfEveryMeat); // true
```

**`sort()` strings - sort toppings alphabetically**

```
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];
console.log(toppings.sort()); // (11)??["Avocado", "Bacon", "Cheese", "Chiles", "Chili", "Eggs", "Lettuce", "Mushrooms ", "Onions", "Pickles", "Tomatoes"]
```

- by default, it sorts alphabetically as strings

**`sort()` numbers**

```
const numbers = [1, 2, 100, 3, 200, 400, 155];

const numbersSorted = numbers.sort(function (firstItem, secondItem) {
  if (firstItem > secondItem) {
    return 1;
  } else if (secondItem > firstItem) {
    return -1;
  } else {
    return 0;
  }
  // short version:
  // return firstItem - secondItem;
});

console.log(numbersSorted); // (7)??[1, 2, 3, 100, 155, 200, 400]
```

- when you are dealing with numbers or nested elements, `sort()` needs a callback function
- the way that `sort()` works, it takes a compare callback function, loops over items, gives the first and the second item
- up to user to decide what goes in front, behind, or stays in place
- less than `0` - go before it
- `0` - unchanged
- greater than `0` - go behind of it
- every function gets two things: one in the left hand, one in the right hand
- up to developer to decide if places need to be switched
- JavaScript will sort and switch places until there's nothing left to be switched

**`sort()` and `reverse()` - order totals**

```
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

function totalSort(a, b) {
  return a - b;
}

console.log(orderTotals.sort(totalSort)); // (8)??[34, 342, 523, 634, 854, 1002, 1644, 2222]
console.log(orderTotals.reverse()); // (8)??[2222, 1644, 854, 634, 34, 523, 1002, 342]
```

**`sort()` - sort the prices on object with `Object.entries()`**

```
const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};
console.log(prices); // {hotDog: 453, burger: 765, sausage: 634, corn: 234}

const productsSortedByPrice = Object.entries(prices).sort(function(a, b) {
  const aPrice = a[1];
  const bPrice = b[1];
  return aPrice - bPrice;
});
console.table(productsSortedByPrice);

// return back into object
const newProducts = Object.fromEntries(productsSortedByPrice);
console.log(newProducts); // {corn: 234, hotDog: 453, sausage: 634, burger: 765}
```

![mod 0806](./img/screen-mod0806-04.png)

- `Object.entries(prices)` returns an array where each item is an array
- return back into an object with `Object.fromEntries()`
