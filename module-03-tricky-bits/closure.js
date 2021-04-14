/* function outer() {
    const outerVar = 'outer hey';
    function inner() {
        const innerVar = 'inner hey';
        console.log(innerVar);
        console.log(outerVar);
    }
    inner();
    // run outer() in the console (!), works:
    // inner hey
    // outer hey
}
// inner(); // Uncaught ReferenceError: inner is not defined - error, because it's not returned!
// then, run on page load, works:
outer(); // inner hey // outer hey */


function outer() {
    const outerVar = 'outer hey 2';
    function inner() {
        const innerVar = 'inner hey 2';
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}
const innerFn = outer();
// run innerFn in the console - returns the inner() FUNCTION

// then, run on page load, works:
innerFn(); // inner hey // outer hey


// example of closure - functions inside of functions

function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`;
    }
}
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('budda'));
console.log(sayHello('weasel'));
console.log(sayHey('petey'));


// example how to use closure to create "private variables"

function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `your name ${gameName} score is ${score}`;
    }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
// run hockeyGame() in the JavaScript console
// increments every time it's run, independent from soccerGame():
// "your name Hockey score is 1"
// run soccerGame() in the JavaScript console
// increments every time it's run, independent from hockeyGame():
// "your name Soccer score is 1"
