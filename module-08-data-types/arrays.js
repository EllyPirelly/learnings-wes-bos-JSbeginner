// ARRAY
/* const names = ['wes', 'kait', 'snickers'];
console.log(names);
// check typeof
console.log(typeof names); // object
// check if type is array
console.log(Array.isArray(names)); // true
// access items
console.log(names[1]); // kait
// check for length
console.log(names.length); // 3
// check for the last item
console.log(names[names.length - 1]); // will return the last one: snickers */

// METHODS - MUTABLE
// two const for demonstration sake
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBackwards = numbers.reverse();
console.log(numbersBackwards); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1] */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// the second var, like above, is not needed, do this:
numbers.reverse();
console.log(numbers); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1] */

// METHODS - IMMUTABLE
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice); // (2) [3, 4]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// METHODS - mutate method, NOT mutate the original array
// you need to take a copy of the original array
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersReversed = [...numbers];
numbersReversed.reverse();

console.log(numbersReversed); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// immediately call the method
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersReversed = [...numbers].reverse();

console.log(numbersReversed); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// ADD ITEMS
// push - add item to the end - mutates
/* const names = ['wes', 'kait', 'snickers'];
names.push('lux');
console.log(names); // (4) ["wes", "kait", "snickers", "lux"] */

// unshift - add an item to the front - mutates
/* const names = ['wes', 'kait', 'snickers'];
names.unshift('poppy');
console.log(names); // (4) ["poppy", "wes", "kait", "snickers"] */

// spread - add item to the end - immutable
/* const names = ['wes', 'kait', 'snickers'];
const names2 = [...names, 'lux'];
console.log(names2); // (4) ["wes", "kait", "snickers", "lux"]
console.log(names); // (4) ["wes", "kait", "snickers"] */

// spread - add item to the front - immutable
/* const names = ['wes', 'kait', 'snickers'];
const names2 = ['lux', ...names];
console.log(names2); // ["lux", "wes", "kait", "snickers"]
console.log(names); // (4) ["wes", "kait", "snickers"] */

// spread - add item to the middle - immutable
/* const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2)
];
console.log(newBikes); // (5) ["bianchi", "miele", "benotto", "panasonic", "miyata"]
console.log(bikes); // (4) ["bianchi", "miele", "panasonic", "miyata"] */

// spread - remove item from the middle - immutable
/* const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
    ...bikes.slice(0, 2),
    ...bikes.slice(3)
];
console.log(newBikes); // ["bianchi", "miele", "miyata"]
console.log(bikes); // (4) ["bianchi", "miele", "panasonic", "miyata"] */

// FINDINDEX
/* const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
console.log(names); // (5) ["poppy", "wes", "kait", "snickers", "lux"]
const kaitIndex = names.findIndex(name => {
    if (name === 'kait') {
        return true;
    } else {
        return false;
    }
});
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait */

// shorten to explicit return, log selected index
/* const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => {
    return (name === 'kait')
});
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait
console.log(names); // (5) ["poppy", "wes", "kait", "snickers", "lux"] */

// FINDINDEX and SPREAD - shorten to implicit return, use spread, log resulting array
/* const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => name === 'kait');
console.log(kaitIndex); // 2
console.log(names[kaitIndex]); // kait
const newNamesWithoutKait = [
    // get everything up to kaitIndex
    ...names.slice(0, kaitIndex),
    // everything after kaitIndex
    ...names.slice(kaitIndex + 1)
];
console.log(newNamesWithoutKait); // (4) ["poppy", "wes", "snickers", "lux"]
console.log(names); // (5) ["poppy", "wes", "kait", "snickers", "lux"] */

// FINDINDEX and FLAT - shorten to implicit return, use flat(), log resulting array
/* const names = ['poppy', 'wes', 'kait', 'snickers', 'lux'];
const kaitIndex = names.findIndex(name => name === 'kait');
const newNamesWithoutKait = [
    // get everything up to kaitIndex
    names.slice(0, kaitIndex),
    // everything after kaitIndex
    names.slice(kaitIndex + 1)
].flat();
console.log(newNamesWithoutKait); // (4) ["poppy", "wes", "snickers", "lux"]
console.log(names); // (5) ["poppy", "wes", "kait", "snickers", "lux"] */

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
console.log(comments); // (5) [{…}, {…}, {…}, {…}, {…}]
console.log(deleteComment(233, comments)); // (4) [{…}, {…}, {…}, {…}]
console.log(comments); // (5) [{…}, {…}, {…}, {…}, {…}]

// SLICE - immutable
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);

console.log(pizzaSlice); // (2) [3, 4]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// SPLICE - mutable
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(3, 2);
console.log(numbers); // (7) [1, 2, 3, 6, 7, 8, 9] */