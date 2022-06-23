// forEach() -------------------------------

// example 1 - forEach() with function outside
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function logTopping(topping, index, array) {
  console.log(topping);
  console.log(topping, index, array);
}

toppings.forEach(logTopping); */

// example 2 - forEach() no function outside
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

toppings.forEach(topping => {
  console.log(topping);
}); */

// example 3 - perform more operations
/* const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function logTopping(topping, index, originalArray) {

  const prevTopping = originalArray[index - 1];
  const nextTopping = originalArray[index + 1];

  // log the topping
  console.log('originalTopping: ', topping);

  // log the prev topping if there is one
  if (prevTopping) {
    console.log('prevTopping: ', prevTopping);
  }

  // log the next topping if there is one
  if (nextTopping) {
    console.log('nextTopping: ', nextTopping);
  }
  // or:
  // nextTopping ? console.log(nextTopping) : null;

  // if its the last item in the array, say Goodbye
  index === originalArray.length - 1
    ? console.log('Goodbye')
    : console.log('next please');
  // or:
  // index === originalArray.length && console.log('Goodbye');

  console.log('----');
}
toppings.forEach(logTopping); */


// map() -------------------------------

// map() - simple use
/* const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];
console.log(faces); // (8) ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺']

function addArms(face) {
  return `👋🏻${face}👋🏻`;
};

const toys = faces.map(addArms);
console.log(toys); // (8) ['👋🏻😃👋🏻', '👋🏻🤠👋🏻', '👋🏻🤡👋🏻', '👋🏻🤑👋🏻', '👋🏻😵👋🏻', '👋🏻🌞👋🏻', '👋🏻🐶👋🏻', '👋🏻😺👋🏻'] */


// map() - simple use
/* const fullNames = ['wes', 'kait', 'poppy'].map(name => `${name} bos`);
console.log(fullNames); // (3) ['wes bos', 'kait bos', 'poppy bos'] */


// map() - chaining
/* function bosify(name) {
  return `${name} Bos`;
}

function capitalize(word) {
  // one way:
  // return word[0].toUpperCase() + word.slice();
  // better way: concatenate string via back ticks instead of using +
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
console.log(fullNames); // (3) ["Wes Bos", "Kait Bos", "Poppy Bos"] */


// map() - with numbers
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
console.log(orderTotals); // (8) [342, 1002, 523, 34, 634, 854, 1644, 2222]

// turn all values to 1
const orderTotalsOne = orderTotals.map(total => 1);
console.log(orderTotalsOne); // (8) [1, 1, 1, 1, 1, 1, 1, 1]

// add tax to each value
const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax); // (8) [386.46, 1132.26, 590.9899999999999, 38.419999999999995, 716.42, 965.0199999999999, 1857.7199999999998, 2510.8599999999997]
console.log(orderTotals); // (8) [342, 1002, 523, 34, 634, 854, 1644, 2222]


// repeat(), fill(), map(), forEach() - cowboys
/* const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];
console.log(faces); // (8) ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"]

function attachBody(face, body) {
    return `
             ${face}
           ${body.repeat(3)}
          ${Array(3).fill(body).join(' ')}
        👇🏻  ${body.repeat(2)}  👇🏻
           ${Array(2).fill(body).join(' ')}
           ${Array(2).fill(body).join(' ')}
           👠  👠
    `
}
faces.map(face => attachBody(face, '🍟')).forEach(body => console.log(body)); */


// map() - with objects
const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley'
    }
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep'
    }
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer'
    }
  }
];

const cleanPeople = people.map(function (person) {
  // get their birthday
  // figure out how old they are

  // then timestamp
  const birthday = new Date(person.birthday).getTime();
  // now timestamp
  const now = Date.now();

  const age = Math.floor((now - birthday) / 31536000000);
  console.log(age);

  // return their full name and birthday in an object
  return {
    age: age,
    name: `${person.names.first} ${person.names.last}`,
  }
});
console.table(cleanPeople);



// filter()
/* const people = [
    {
        birthday: 'April 22, 1993',
        names: {
            first: 'Keith',
            last: 'Buckley'
        }
    },
    {
        birthday: 'January 3, 1975',
        names: {
            first: 'Larry',
            last: 'Heep'
        }
    },
    {
        birthday: 'February 12, 1944',
        names: {
            first: 'Linda',
            last: 'Bermeer'
        }
    }
];

const cleanPeople = people.map(function (person) {
    const birthday = new Date(person.birthday).getTime();
    const now = Date.now();
    const age = Math.floor((now - birthday) / 31536000000);
    return {
        age: age,
        name: `${person.names.first} ${person.names.last}`,
    }
}); */

/* const over40 = cleanPeople.filter(function (person) {
    console.log(person);
    if (person.age > 40) {
        return true;
    } else {
        return false;
    }
}); */

/* const over40 = cleanPeople.filter(person => {
    return person.age > 40;
});
console.table(over40); */

/* const over40 = cleanPeople.filter(person => person.age > 40);
console.table(over40);

if (over40.length) {
    console.log('there is someone over 40');
} */



// find()
/* const students = [
    {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
    },
    {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
    },
    {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
    },
    {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
    },
    {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
    },
    {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
    },
    {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
    },
    {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
    },
    {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
    },
]; */


// find() student with 565a
/* const student = students.find(studi => studi.id === '565a');
console.log(student); // {id: "565a", first_name: "Bendicty", last_name: "Woodage"}

const student2 = students.filter(studi => studi.id === '565a');
console.log(student2); // [0: {id: "565a", first_name: "Bendicty", last_name: "Woodage"}] */


// find() student with 565a with external higher order function
/* function findById(id) {
    return function isStudent(studi) {
        return studi.id === id;
    }
}
const student = students.find(findById('565a'));
console.log(student); // {id: "565a", first_name: "Bendicty", last_name: "Woodage"} */


// find(), more flexible, because what happpens if the student has 15 properties on them?
/* function findByProp(prop, propWeAreLookingFor) {
    return function fullStudent(studentele) {
        return studentele[prop] === propWeAreLookingFor;
    }
}

const student2 = students.find(findByProp('id', '565a'));
const student3 = students.find(findByProp('first_name', 'Micki'));
console.log(student2); // {id: "565a", first_name: "Bendicty", last_name: "Woodage"}
console.log(student3); // {id: "3a16", first_name: "Micki", last_name: "Mattes"} */



// reduce() - example 1
// how would I add all of these up?
/* const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222]; */

// messy, works, but not good because the callback method relies on an external variable that has been made outside
// side effect, where you update a variable that exists outsideof the function
/* let total = 0;
orderTotals.forEach(singleTotal => {
    total = total + singleTotal;
});
console.log(total); // 7255 */

// proper, with reduce()
/* function tallyNumbers(tally, currentTotal) {
    console.log(`the current tally is ${tally}`);
    console.log(`the current total is ${currentTotal}`);
    console.log('------');
    // return the current tally PLUS the amount of this order
    return tally + currentTotal;
}

const allOrders = orderTotals.reduce(tallyNumbers, 0);
console.log(allOrders); */


// reduce() - example 2
/* const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 2343 },
    { type: 'socks', price: 542 },
    { type: 'pants', price: 123 },
];

// how many of each instanced are there
function inventoryReducer(accuTotals, item) {
    console.log(`looping over ${item.type}`);

    // increment the type by 1
    // as if statement:
    if (accuTotals[item.type]) {
        accuTotals[item.type] = accuTotals[item.type] + 1;
        // accuTotals[item.type]++;
    } else {
        accuTotals[item.type] = 1;
    }

    // shortened, version 1:
    // accuTotals[item.type] = accuTotals[item.type] + 1 || 1;

    // shortened, version 2, example with shirt:
    // accuTotals.shirt ? accuTotals.shirt + 1 : accuTotals.shirt = 1;

    // return the accuTotals, so the next loop can use it
    return accuTotals;
}
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts); // {shirt: 2, pants: 3, socks: 2}

// what is the total value
const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(totalInventoryPrice); // 14117 */



// for
/* for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 100; i <= 120; i += 2) {
    console.log(i);
} */

/* const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    console.log('numbers length', numbers.length);
    console.log('retrieve numbers inside of array', numbers[i]);
} */


// for of
/* const naming = '🦁 Wes 🦁 Bos 🦁';
for (const letter of naming) {
    console.log(letter);
}

const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
for (const number of numbers) {
    console.log('number of', number);
} */


// for in
/* const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
for (const number in numbers) {
    console.log('number in', number);
} */

/* const wes = {
    name: 'wes',
    age: 100,
    cool: true,
}
for (const prop in wes) {
    console.log(prop);
}

const baseHumanStats = {
    feet: 2,
    arms: 2,
    head: 1,
};

function Human(naming) {
    this.naming = naming;
}

const wes2 = new Human('wes');
console.log('wes2', wes2); // wes2 Human {naming: "wes"}
console.log('wes2 arms', wes2.arms) // wes2 arms undefined
console.log('object keys', Object.keys(wes2)); // object keys ["naming"]
console.log('object entries', Object.entries(wes2)); // object entries [Array(2)]

Human.prototype = baseHumanStats;
const wes3 = new Human('wes');
console.log('wes3', wes3); // wes3 Human {naming: "wes"}
console.log('wes3 arms', wes3.arms); // wes3 arms 2
console.log('object keys', Object.keys(wes3)); // object keys ["naming"]

for (const prop in wes3) {
    console.log('wes3 prop', prop); // wes3 prop naming // wes3 prop feet // wes3 prop arms // wes3 prop head
} */


// while loop
/* let cool = true;
let i = 0;

while (cool === true) {
    console.log('you are cool'); // 101loops.js:449 you are cool
    i++;
    if (i > 100) {
        cool = false;
    }
}

// do while loop
let a = 1;
let b = 2;
do {
    console.log('b actually is bigger than a'); // b actually is bigger than a
} while (b <= a); */