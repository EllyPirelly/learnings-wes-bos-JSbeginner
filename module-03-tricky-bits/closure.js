// scope lookup into the outer parent

/* function outer() {
  const outerVar = 'outer hey';
  function inner() {
    const innerVar = 'inner hey';
    console.log(innerVar);
    console.log(outerVar);
  }
  inner();
}
outer(); // inner hey // outer hey */


// assign a function to a variable
// so at a later point you have access to that function

function outer() {
  const outerVar = 'outer hey';
  function inner() {
    const innerVar = 'inner hey';
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}
const innerFn = outer();
console.log(innerFn); // is a function
innerFn(); // innerhey // outer hey


// example of closure - functions inside of functions

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  }
}
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('budda')); // HELLO budda
console.log(sayHello('weasel')); // HELLO weasel
console.log(sayHey('petey')); // HEY petey


// example how to use closure to create "private variables"

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `your ${gameName} score is ${score}`;
  }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
// run hockeyGame() in the JavaScript console
// increments every time it's run, independent from soccerGame():
// "your Hockey score is 1"

// run soccerGame() in the JavaScript console
// increments every time it's run, independent from hockeyGame():
// "your Soccer score is 1"
