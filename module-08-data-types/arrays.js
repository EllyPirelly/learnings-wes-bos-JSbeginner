// ARRAY
/* const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3) ['wes', 'kait', 'snickers']
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

// ARRAY METHODS - MUTABLE
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBackwards = numbers.reverse();
console.log(numbersBackwards); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1] */

// the second const, like shown above, is not even needed:
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.reverse();
console.log(numbers); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1] */

// ARRAY METHODS - IMMUTABLE
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice); // (2) [3, 4]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// ARRAY METHODS - IMMUTABLE with copy of original array
// immediately call the method
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersReversed = [...numbers].reverse();

console.log(numbersReversed); // (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// ARRAY - ADD ITEMS
// add item to the end with push - mutates
/* const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3) ['wes', 'kait', 'snickers']
names.push('lux');
console.log(names); // (4) ["wes", "kait", "snickers", "lux"] */

// add item to the front with unshift - mutates
/* const names = ['wes', 'kait', 'snickers'];
console.log(names); // (3) ['wes', 'kait', 'snickers']
names.unshift('poppy');
console.log(names); // (4) ["poppy", "wes", "kait", "snickers"] */

// add item to the end with spread - immutable
/* const names = ['wes', 'kait', 'snickers'];
const names2 = [...names, 'lux'];
console.log(names2); // (4) ["wes", "kait", "snickers", "lux"]
console.log(names); // (4) ["wes", "kait", "snickers"] */

// add item to the front with spread - immutable
/* const names = ['wes', 'kait', 'snickers'];
const names2 = ['lux', ...names];
console.log(names2); // ["lux", "wes", "kait", "snickers"]
console.log(names); // (4) ["wes", "kait", "snickers"] */

// SLICE - immutable
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice); // (2) [3, 4]
console.log(numbers); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

// SPLICE - mutable
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(3, 2);
console.log(numbers); // (7) [1, 2, 3, 6, 7, 8, 9] */

// add item to the middle with spread and slice
/* const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
  ...bikes.slice(0, 2),
  'benotto',
  ...bikes.slice(2)
];
console.log(newBikes); // (5) ["bianchi", "miele", "benotto", "panasonic", "miyata"]
console.log(bikes); // (4) ["bianchi", "miele", "panasonic", "miyata"] */

// remove item from the middle with spread and slice
/* const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
  ...bikes.slice(0, 2),
  ...bikes.slice(3)
];
console.log(bikes); // (4) ["bianchi", "miele", "panasonic", "miyata"]
console.log(newBikes); // (3) ["bianchi", "miele", "miyata"] */


// FINDINDEX - if / else
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

// FINDINDEX and SPREAD - shorten to implicit return, use spread
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

// FINDINDEX and FLAT - shorten to implicit return, use flat()
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
