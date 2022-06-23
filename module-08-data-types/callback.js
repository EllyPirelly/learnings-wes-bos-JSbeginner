// CALLBACK METHODS -----------------------

// find() - first rating that has 'burg' or 'burger' in it
// SIMPLE FUNCTION
/* const feedback = [
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
console.log(burgRating); // {comment: "Love the burgs", rating: 4} */

// ASSIGNED TO A CONST - another way of doing it
/* const feedback = [
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
console.log(burgRating); // {comment: "Love the burgs", rating: 4} */

// ARROW FUNCTION - another way of doing it
/* const feedback = [
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
console.log(burgRating); // {comment: "Love the burgs", rating: 4} */

// IMPLICIT RETURN - another way of doing it
/* const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const findBurgRating = singleFeedback => singleFeedback.comment.includes('burg');

const burgRating = feedback.find(findBurgRating);
console.log(burgRating); // {comment: "Love the burgs", rating: 4} */

// GROUP findBurgRating into an object - another way of doing it
/* const feedback = [
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
console.log(util.findBurgRating); // ƒ (singleFeedback) { return singleFeedback.comment.includes('burg'); } */


// HIGH-ORDER function  -----------------------
/* const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
]; */

// the lines below are really unefficient and tied to 'burg' / 'smoothie', how to make this more general?
/* const findBurgRating = singleFeedback => singleFeedback.comment.includes('burg');
const findSmoothieRating = singleFeedback => singleFeedback.comment.includes('Smoothie');
const burgRating = feedback.find(findBurgRating);
const smoothieRating = feedback.find(findSmoothieRating);
console.log(burgRating, smoothieRating); // {comment: 'Love the burgs', rating: 4} // {comment: 'Smoothies are great, liked the burger too', rating: 5} */

// how to make this more general? make a function that makes another function
/* function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  }
} */
// findByWord does not find the burger or smoothie themselves
// it just returns a function which then in turn will find them for you
/* const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothies'));
console.log(burgRating, smoothieRating); // {comment: 'Love the burgs', rating: 4} // {comment: 'Smoothies are great, liked the burger too', rating: 5} */


// use filter() to find all ratings that are above 2
/* const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
]; */

// regular function - long version
/* const goodReviews = feedback.filter(singleFeedback => {
  if (singleFeedback.rating > 2) {
    return true;
  } else {
    return false;
  }
}); */

// regular function - short version
/* const goodReviews = feedback.filter(singleFeedback => {
  return singleFeedback.rating > 2;
});

console.table(goodReviews); */

// same but implicit return
/* const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const goodReviews = feedback.filter(singleFeedback => singleFeedback.rating > 2);
console.table(goodReviews); */

// make a function that makes another function - flexible
/* const feedback = [
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
console.table(goodReviews); */

// find all ratings that talk about a burger with filter()
/* const feedback = [
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
console.table(burgRatings); */

// remove the one star rating however you like
/* const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const legitRatings = feedback.filter(single => single.rating !== 1);
console.table(legitRatings); */

// use some() to check if there is at least one type of meat has value 5
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

console.log(Object.values(meats)); // (3) [10, 5, 7]

const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
console.log(isThereEnoughOfAtLeastOneMeat); // true */

// use every() to make sure we have at least 3 of every meat with every()
/* const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

console.log(Object.values(meats)); // (3) [10, 5, 7]

const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
console.log(isThereEnoughOfEveryMeat); // true */

// use sort() to sort toppings alphabetically
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];
console.log(toppings.sort()); // (11) ["Avocado", "Bacon", "Cheese", "Chiles", "Chili", "Eggs", "Lettuce", "Mushrooms ", "Onions", "Pickles", "Tomatoes"] */

// use sort() to sort numbers from smallest to greatest
/* const numbers = [1, 2, 100, 3, 200, 400, 155];

const numbersSorted = numbers.sort(function(firstItem, secondItem) {
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

console.log(numbersSorted); // (7) [1, 2, 3, 100, 155, 200, 400] */

// use sort() to sort the order totals from most expensive to least
/* const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

function totalSort(a, b) {
  return a - b;
}

console.log(orderTotals.sort(totalSort)); // (8) [34, 342, 523, 634, 854, 1002, 1644, 2222]
console.log(orderTotals.reverse()); // (8) [2222, 1644, 854, 634, 34, 523, 1002, 342] */

// use sort() to sort the prices
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
