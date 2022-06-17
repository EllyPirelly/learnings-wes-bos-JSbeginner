// CREATE A MAP

// .set() API
/* const myMap = new Map();
myMap.set('name', 'wes');
console.log(myMap); // Map(1) {'name' => 'wes'}
myMap.age = 100;
console.log(myMap); // Map(1) {'name' => 'wes'} // 100 is in there but not added at the same spot */

// EXAMPLE DICTIONARY
/* const person1 = {
  name: 'wes',
  age: 200,
};
const myMap = new Map();
myMap.set('name', 'wes');
myMap.set(100, 'this is a number');
// key is the reference to an object
// value can be anything
myMap.set(person1, 'really cool');
console.log(myMap);
console.log(myMap.get(person1)); */


// EXAMPLE SCORES
/* const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

console.log(`you win a ${prizes.get(score)}`); // you win a bear
console.log(prizes.size); // 3 */


// EXAMPLE LOOPING - RETURN VALUE
/* const ul = document.querySelector('.prizes');
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

// returns the value
prizes.forEach(entry => {
  console.log(entry);
}); */

// EXAMPLE LOOPING - RETURN VALUE and KEY
/* const ul = document.querySelector('.prizes');
const score = 100;
const prizes = new Map();
prizes.set(100, 'bear');
prizes.set(200, 'duck');
prizes.set(300, 'cat');

// returns value AND key
for (const prize of prizes) {
  console.log(prize);
  // (2) [100, 'bear'] // (2) [200, 'duck'] // (2) [300, 'cat']
  // console.log(prize[0], prize[1], prize[2]);
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

  const li = `
    <li>${points} - ${prize}</li>
  `;
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
console.log(person1); // {name: 'wes', age: 200}

myMap.set('name', 'helga');
myMap.set(100, 'this is a number');
myMap.set(person1, 'really cool');
console.log(person1); // // {name: 'wes', age: 200}
console.log(myMap); // Map(3) {'name' => 'helga', 100 => 'this is a number', {…} => 'really cool'}

myMap.delete('name');
console.log(myMap); // Map(2) {100 => 'this is a number', {…} => 'really cool'}
