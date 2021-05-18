// OBJECT LITERAL SYNTAX
/* const person = {
    name: 'Maria',
    age: 100,
} */

// also possible
/* const person = new Object({
    name: 'Maria',
    age: 100,
}); */

// SHORTEN
/* const age = 100;
const person = {
    name: 'Maria',
    age: age,
} */

// CREATE OWN PROPERTIES
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    'cool-dude': true,
    'really cool': true,
    '777': true,
} */

// NESTED OBJECT, access, adding, overwriting with dot notation
/* const age = 100;
const person = {
    name: 'Maria',
    age,
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
/* const age = 100;
const maria = {
    name: 'Maria',
    age,
    clothing: {
        shirts: 10,
        pants: 2,
    }
};
console.log(maria.age); // age: 100

maria.job = 'Chef cook';
maria.age = 50;
console.log(maria.age); // age: 50

const mariaFroze = Object.freeze(maria);
maria.age = 75;
console.log(maria.age); // age: 50 */

// BRACKET NOTATION, reason 1
/* const age = 100;
const person = {
    name: 'Maria',
    propertyToCheck: 'If I\'m logged - are you really looking for the property??',
    age,
    clothing: {
        shirts: 10,
        pants: 2,
    }
};
person.job = 'Chef cook';
person.age = 50;

console.log('regular log:', person.age);
// regular log: 50

const propertyToCheck = prompt('What do you want to check?');

console.log('regular square brackets:', person['age']);
// regular square brackets: 50

console.log('propertyToCheck square brackets:', person[propertyToCheck]);
// whatever you type in the prompt (and is a value in the object) will be logged, e.g. propertyToCheck square brackets: 50

// will literally look for the property
console.log('propertyToCheck:', person.propertyToCheck);
// propertyToCheck: If I'm logged - are you really looking for the property?? */

// BRACKET NOTATION, reason 2
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    'cool-dude': true,
    'really cool': true,
    '777': true,
    clothing: {
        shirts: 10,
        pants: 2,
    },
};

//console.log(person.cool - dude);
// Uncaught ReferenceError: dude is not defined

//console.log(person.really cool);
// Uncaught SyntaxError: missing ) after argument list

//console.log(person.777);
// Uncaught SyntaxError: missing ) after argument list

console.log(person['cool-dude']); // true
console.log(person['really cool']); // true
console.log(person[777]); // true */

// REFERENCING MULTIPLE LEVELS DEEP
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    clothing: {
        shirts: 10,
        pants: 2,
    },
    'hey man': {
        shoes: 4,
    },
};

console.log('multiple level reference:', person.clothing.shirts);
// multiple level reference: 10

console.log('multiple level reference:', person['hey man'].shoes);
// multiple level reference: 4 */

// CHECKING FOR EXISTANCE
/* const nameInput = document.querySelector('[name="first"]');
const naming = nameInput.value;
console.log(nameInput);
// <input type="text" name="first" value="valuehere">
console.log(naming); // valuehere

const notPresentInput = document.querySelector('[name="not-present"]');
//const nomen = notPresentInput.value;
// Uncaught TypeError: Cannot read property 'value' of null
//console.log(notPresentInput); // null

const noma = notPresentInput ? notPresentInput.value : '';
console.log(noma); // will return an empty string */

// MOVE A PROPERTY FROM AN OBJECT
/* const age = 100;
const person = {
    name: 'Maria',
    age,
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
console.log(person); // will log the object without deleted property
console.log(person['hey man']); // undefined */

// METHODS
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    sayHello: function (greeting = 'Hola') {
        return `${greeting} ${this.name}!`;
    },
};
console.log(person.sayHello()); // Hola Maria!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Maria! */

// METHOD SHORTHAND
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    sayHello(greeting = 'Hola') {
        return `${greeting} ${this.name}!`;
    },
};
console.log(person.sayHello()); // Hola Maria!
console.log(person.sayHello('HIIIIIII,')); // HIIIIIII, Maria! */

// METHOD ARROW FUNCTION
/* const age = 100;
const person = {
    name: 'Maria',
    age,
    sneeze: () => {
        console.log('regular log:', 'ahhhchoooo');
        // regular log: ahhhchoooo

        console.log('with this:', 'ahhhchoooo', this);
        // with this: ahhhchoooo Window {window: Window, self: Window, document: document, name: "", location: Location, …}
    },
};
person.sneeze(); */

// METHOD REGULAR FUNCTION
const age = 100;
const person = {
    name: 'Maria',
    age,
    sneeze1: function () {
        console.log('regular function:', 'brrrr', this);
        // regular function: brrrr {name: "Maria", age: 100, sneeze: ƒ, sneeze1: ƒ}
    }
};
person.sneeze1();
