// STATIC METHODS
// Array.of();
/* const names = Array.of('wes', 'kait', 'snickers');
console.log(names); // (3) ["wes", "kait", "snickers"]
console.log(Array.of(...'wes')); // (3) ["w", "e", "s"] */

/* const names2 = ['wes2', 'kait2', 'snickers2'];
console.log(names2); // (3) ["wes2", "kait2", "snickers2"] */


// Array.from()
/* const from = Array.from({ length: 10 });
console.log(from); */


// Array.from() with function that creates a range from x to y
/* const range = Array.from({ length: 10 }, function () {
  return 'wes';
});
console.log(range); // (10) ["wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes", "wes"] */

/* const range = Array.from({ length: 10 }, function (item, index) {
  return index;
});
console.log(range); // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */

/* function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}
console.log(createRange(3, 7)); // (5) [3, 4, 5, 6, 7] */


// Array.isArray(), , check if array really is an array
/* function createRange(start, end) {

  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;

}
const myRange = createRange(3, 7);
console.log(Array.isArray(myRange)); // true */


// Object.entries(), Object.keys(), Object.values() - make three arrays
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats)); */

// forEach()
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
Object.values(meats).forEach(qty => {
  console.log(qty); // 10 // 5 // 7 - single line logs
});
Object.keys(meats).forEach(qty => {
  console.log(qty); // beyond // beef // pork - single line logs
});
Object.entries(meats).forEach(entry => {
  console.log(entry); // (2) ["beyond", 10] // (2) ["beef", 5] // (2) ["pork", 7] - single line logs
}); */

// forEach(), split up into their own variables
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
Object.entries(meats).forEach(entry => {
  const key = entry[0];
  const value = entry[1];
  console.log(key, value); // beyond 10 // beef 5 // pork 7 - single line logs
}); */

// forEach(), split up into their own variables, destructuring
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};
Object.entries(meats).forEach(entry => {
  const [key, value] = entry;
  console.log(key, value); // beyond 10 // beef 5 // pork 7 - single line logs
}); */
// or
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};
Object.entries(meats).forEach(([key, value]) => {
  console.log(key, value); // beyond 10 // beef 5 // pork 7 - single line logs
}); */


// INSTANCE METHODS
// BUNS
/* // use join() to display all bun items with " or "
const buns = ['egg', 'wonder', 'brioche'];

console.log(buns); // ["egg", "wonder", "brioche"]
console.log(buns.join()); // egg,wonder,brioche
console.log(buns.join(' or ')); // egg or wonder or brioche

// use split() to turn a string "hot dogs,hamburgers,sausages,corn" into an array
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split()); // ["hot dogs,hamburgers,sausages,corn"]
console.log(foodString.split(',')); // ["hot dogs", "hamburgers", "sausages", "corn"]
console.log(foodString.split(''));
// ["h", "o", "t", " ", "d", "o", "g", "s", ",", "h", "a", "m", "b", "u", "r", "g", "e", "r", "s", ",", "s", "a", "u", "s", "a", "g", "e", "s", ",", "c", "o", "r", "n"] */

// TOPPINGS
/* // use pop() to take the last item off toppings
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
const lastItem = toppings.pop();
console.log(lastItem); // Cheese
console.log(toppings); // (3) ["Mushrooms ", "Tomatoes", "Onions"]

// use push() to add it back
const t2 = toppings.push(lastItem);
console.log(t2); // 4
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]

// use shift() to take the first item off
const firstItem = toppings.shift();
console.log(firstItem); // Mushrooms
console.log(toppings); // (3) ["Tomatoes", "Onions", "Cheese"]

// use unshift() to add it back
toppings.unshift(firstItem);
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"] */

// TOPPINGS IMMUTABLE
// use slice() and spread to take off / bring back item
// take the last item off
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings); // (3) ["Mushrooms ", "Tomatoes", "Onions"]

// add it back
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"] */

// TOPPINGS - slice and spread
// use slice() to make a copy of the toppings array
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];

const toppingsCopy = toppings.slice(0);
toppings[0] = 'Mushy Boi';
console.log('original toppings', toppings); // original toppings (4) ["Mushy Boi", "Tomatoes", "Onions", "Cheese"]
console.log('toppings copy', toppingsCopy); // toppings copy (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"] */

// use spread `...` to make a copy of the toppings array
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
const toppingsCopy = [...toppings];

console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
console.log(toppingsCopy); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]

toppingsCopy[0] = 'PARMESAN';
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
console.log(toppingsCopy); // (4) ["PARMESAN", "Tomatoes", "Onions", "Cheese"] */

// TOPPINGS - other methods
// use splice() to take out items 3 to 5 off the new toppings array
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];
console.log(toppings); // (11) ["Mushrooms ", "Tomatoes", "Eggs", "Chili", "Lettuce", "Avocado", "Chiles", "Bacon", "Pickles", "Onions", "Cheese"]
const toppingsCopy = [...toppings];
toppingsCopy.splice(3, 5);
console.log(toppingsCopy); // (6) ["Mushrooms ", "Tomatoes", "Eggs", "Pickles", "Onions", "Cheese"] */

// indexOf() / lastIndexOf() to find the index of 'Avocado'
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Cheese'];
console.log(toppings); // (7) ["Mushrooms ", "Tomatoes", "Eggs", "Chili", "Lettuce", "Avocado", "Cheese"]
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex); // 5

const avoZwo = toppings.lastIndexOf('Avocado');
console.log(avoZwo); // 5 */

// indexOf() works with any type but be aware of reference vs value!:
/* const wesObject = { name: 'wes' };
const people = [{ name: 'scott' }, wesObject];
console.log(people.indexOf(wesObject)); // 1
console.log(people.indexOf({ name: 'scott' })); // -1 */

// includes() to check if hot sauce is in the array
/* const arrEx = [1, 2, 3, 4];
console.log(arrEx.includes(5)); // false */

/* const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
const isInToppings = toppings.includes('Hot Sauce');

console.log(isInToppings); // false
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]

// add if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}

console.log(toppings); // (5) ["Mushrooms ", "Tomatoes", "Onions", "Cheese", "Hot Sauce"] */

// use reverse() - mutable - to flip toppings
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
toppings.reverse();
console.log(toppings); // (4) ["Cheese", "Onions", "Tomatoes", "Mushrooms "] */

// immutable - to flip toppings
const toppings = ['Mushrooms ', 'Tomatoes', 'Onions', 'Cheese'];
console.log(toppings); // (4) ["Mushrooms ", "Tomatoes", "Onions", "Cheese"]
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed); // (4) ["Cheese", "Onions", "Tomatoes", "Mushrooms "]
