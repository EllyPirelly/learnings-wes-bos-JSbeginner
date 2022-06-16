// OBJECT LITERAL SYNTAX
/* const person = {
  name: 'Helga',
  age: 100,
};
console.log(person); // {name: 'Helga', age: 100}
*/

// also possible
/* const person = new Object({
  name: 'Helga',
  age: 100,
}); */

// SHORTEN
/* const age = 100;
const name = 'Helga';
const person = {
  name: name,
  age: age,
};
// can be shortened to
const person = { name, age };
console.log(person);
*/

// CREATE OWN PROPERTIES
/* const person = {
  name: 'Helga',
  age: 100,
  'cool-dude': true,
  'really cool': true,
  '777': true,
};
console.log(person); // {777: true, name: 'Helga', age: 100, cool-dude: true, really cool: true}
*/


// NESTED OBJECT, access, adding, overwriting with dot notation
/* const person = {
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
console.log(person.age); // 50 */


// IMMUTABLE OBJECT
/* const helga = {
  name: 'Helga',
  age: 100,
};
console.log(helga.age); // age: 100

helga.job = 'Chef cook';
helga.age = 50;
console.log(helga.age); // age: 50

// not going to freeze the original object helga
// will return a new object helgaFroze which can never be changed
const helgaFroze = Object.freeze(helga);
helga.age = 75;
console.log(helga.age); // age: 50 */


// BRACKET NOTATION, reason 1
/* const age = 100;
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
console.log('propertyToCheck:', person.propertyToCheck); */


// BRACKET NOTATION, reason 2
/* const person = {
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
console.log(person[777]); // true */


// REFERENCING MULTIPLE LEVELS DEEP
/* const person = {
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
console.log(person['hey man'].shoes); // 4 */


// CHECKING FOR EXISTANCE
/* const nameInput = document.querySelector('[name="first"]');
const naming = nameInput.value;
console.log(nameInput); // input object
console.log(naming); // valuehere

const notPresentInput = document.querySelector('[name="not-present"]');
console.log(notPresentInput); // null
// const nomen = notPresentInput.value; // Uncaught TypeError: Cannot read property 'value' of null

const noma = notPresentInput ? notPresentInput.value : 'not present';
console.log(noma); // not present */


// MOVE A PROPERTY FROM AN OBJECT
/* const person = {
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
console.log(person['hey man']); // undefined, because deleted */


// METHODS
/* const person = {
  name: 'Helga',
  age: 100,
  sayHello: function (greeting = 'Hola') {
    return `${greeting} ${this.name}!`;
  },
};
console.log(person.sayHello()); // Hola Helga!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Helga! */

// METHOD SHORTHAND
/* const person = {
  name: 'Helga',
  age: 100,
  sayHello(greeting = 'Hola') {
    return `${greeting} ${this.name}!`;
  },
};
console.log(person.sayHello()); // Hola Helga!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Helga! */

// METHOD ARROW FUNCTION
/* const person = {
  name: 'Helga',
  age: 100,
  sneeze: () => {
    console.log('regular log:', 'ahhhchoooo');
    // regular log: ahhhchoooo

    console.log('with this:', 'ahhhchoooo', this);
    // with this: ahhhchoooo Window {window: Window, self: Window, document: document, name: "", location: Location, …}
  },
};
person.sneeze(); */


// METHOD REGULAR FUNCTION
const person = {
  name: 'Helga',
  age: 100,
  sneeze1: function () {
    console.log('regular function:', 'brrrr', this);
    // regular function: brrrr {name: "Helga", age: 100, sneeze: ƒ, sneeze1: ƒ}
  }
};
person.sneeze1();
