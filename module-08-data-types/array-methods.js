const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const buns = ['egg', 'wonder', 'brioche'];

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: 'Love the burgs', rating: 4 },
    { comment: 'Horrible Service', rating: 2 },
    { comment: 'Smoothies are great, liked the burger too', rating: 5 },
    { comment: 'Ambiance needs work', rating: 3 },
    { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

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
    pork: 7
};
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats)); */

// forEach()
/* const meats = {
    beyond: 10,
    beef: 5,
    pork: 7
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
    pork: 7
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
    pork: 7
};
Object.entries(meats).forEach(([key, value]) => {
    console.log(key, value); // beyond 10 // beef 5 // pork 7 - single line logs
}); */




// INSTANCE METHODS

    // Display all bun types with " or " - use join()

    // We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string

    // take the last item off toppings with pop()
    // add it back with push()
    // take the first item off toppings with shift()
    // add it back in with unshift()
    // Do the last four,but immutable (with spreads and new variables)


    // Make a copy of the toppings array with slice()
    // Make a copy of the toppings array with a spread
    // take out items 3 to 5 of your new toppings array with splice()
    // find the index of Avocado with indexOf() / lastIndexOf()
    // Check if hot sauce is in the toppings with includes()
    // add it if it's not
    // flip those toppings around with reverse()

// CALLBACK METHODS

    // find the first rating that talks about a burger with find()
    // find all ratings that are above 2 with filter()
    // find all ratings that talk about a burger with filter()
    // Remove the one star rating however you like!

    // check if there is at least 5 of one type of meat with some()
    // make sure we have at least 3 of every meat with every()
    // sort the toppings alphabetically with sort()
    // sort the order totals from most expensive to least with .sort()
    // Sort the prices with sort()

// LOOPING METHODS (next)
