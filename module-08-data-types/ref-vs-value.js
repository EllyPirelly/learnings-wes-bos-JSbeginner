// REFERENCE vs VALUE - STRINGS
/* let name1 = 'betty';
let name2 = 'betty';
console.log(name1 === name2); // true

name1 = 'paul';
console.log(name1); // paul
console.log(name2); // betty
console.log(name1 === name2); // false

// update name1 what is to be name2
name1 = name2;
console.log(name1); // betty (!)
console.log(name1 === name2); // true

name2 = 'bettina';
console.log(name1 === name2); // false
console.log(name2); // bettina */

// REFERENCE vs VALUE - OBJECTS
/* const person1 = {
    first: 'todd',
    last: 'smith',
};

const person2 = {
    first: 'todd',
    last: 'smith',
};

console.log(person1 === person2); // false

const person3 = person1;
person1.first = 'teddy';

console.log(person3.first); // teddy
console.log(person1.first); // teddy (!)

console.log(person1); // {first: "teddy", last: "smith"}
console.log(person2); // {first: "todd", last: "smith"}
console.log(person3); // {first: "teddy", last: "smith"}

person3.last = 'cool';

console.log(person3); // {first: "teddy", last: "cool"}
console.log(person1); // {first: "teddy", last: "cool"} */

// COPY via spread
/* const person1 = {
    first: 'todd',
    last: 'smith',
};

const person2 = {
    first: 'todd',
    last: 'smith',
};

const person3 = { ...person1 };
console.log(person3); // {first: "todd", last: "smith"}

person3.first = 'Larry';
console.log(person3.first); // Larry
console.log(person1.first); // todd
console.log(person3); // {first: "Larry", last: "smith"} */

// COPY via Object.assign()
/* const person4 = Object.assign({}, person1);
console.log(person3); // {first: "Larry", last: "smith"} */

// COPY only one level deep
/* const person1 = {
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
// {first: "todd", last: "smith", clothing: {{shirts: 100, shoes: 4}}} */

// DEEP COPY or DEEP CLONE - with lodash
/* const person1 = {
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
// {first: "todd", last: "smith", clothing: {{shirts: 100, shoes: 4}}} */

// MERGING OBJECTS via spread
/* const meatInventory = {
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
// bacon: 2 lettuce: 5 lobsters: 5 oyster: 10 sausage: 3 tomatoes: 3 */

// REFERENCE vs COPY in FUNCTIONS
/* let name1 = 'betty';

function doStuff(data) {
    data = 'something else';
    console.log(data); // something else
}

doStuff(name1);
console.log(name1); // betty */


// REFERENCE vs COPY with OBJECTS IN FUNCTIONS
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