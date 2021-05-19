// CREATE A MAP

// .set() API
/* const myMap = new Map();
myMap.set('name', 'wes');
myMap.age = 100;
console.log(myMap); */

// EXAMPLE DICTIONARY
/* const person1 = {
    name: 'wes',
    age: 200,
};
const myMap = new Map();
myMap.set('name', 'wes');
myMap.set(100, 'this is a number');
myMap.set(person1, 'really cool');
console.log(myMap);
console.log(myMap.get(person1)); */

// EXAMPLE SCORES
/* const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat'); */

//console.log(`you win a ${prizes.get(score)}`); // you win a bear

// EXAMPLE LOOPING
/* const ul = document.querySelector('.prizes');
// returns the value
prizes.forEach(entry => {
    console.log(entry);
}); */

// returns array with key and value
/* for (const prize of prizes) {
    console.log(prize);
    console.log(prize[0]);
    console.log(prize[1]);
    console.log(prize[2]);
} */

// DESTRUCTURING
/* const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

const ul = document.querySelector('.prizes');
for (const [points, prize] of prizes) {
    console.log(points, prize);

    const li = `<li>${points} - ${prize}</li>`;
    ul.insertAdjacentHTML('beforeend', li);
}; */

// ARRAY of ARRAYS
/* const arrayOfArrays = new Map([
    ['name', 'bella'],
    ['age', '75']
]);
console.log(arrayOfArrays); */

//.delete() API
const person1 = {
    name: 'wes',
    age: 200,
};
const myMap = new Map();
myMap.set('name', 'wes');
myMap.set(100, 'this is a number');
myMap.set(person1, 'really cool');
myMap.delete('name');

console.log(myMap);
