// Logs
console.log('%c All kinds of console logs', 'background: yellow');

const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
];

console.log('Hey I log');
console.warn('Watch out!');
console.error('Error Message Here');
console.table(people);

people.forEach((person, index) => {

    if (person.name === 'Wes') {
        console.warn('canadian coder warn wizzard');
        console.error('canadian coder error wizzard');
      }

});

people.forEach((person, index) => {
    console.groupCollapsed(`${person.name}`);
	console.log(`${person.cool}`);
	console.log(`${person.country}`);
    console.log('DONE');
	console.groupEnd(`${person.name}`);
})


// Grabbing Elements
console.log('%c Grabbing Elements', 'background: yellow');
console.log('See Readme/js');
// in JavaScript console
// inspect an element and type
// $0
// $1
// $('div')
// $$('div')


// Debugger
console.log('%c Debugger', 'background: yellow');
console.log('See Readme/js');

people.forEach((person, index) => {
    // debugger;
    console.log(person.name);
});


// Scope
console.log('%c Scope, will be looked into later in the course', 'background: yellow');
// will be looked into more later in the course


// Network Requests
console.log('%c Network Requests', 'background: yellow');
console.log('See Readme/js');

async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const joke = await res.text();
    console.log(joke); // What did the late tomato say to the early tomato? I’ll ketch up
    return joke;
}
// `fetchDadJoke()` in the JavaScript Console


// Break On Attribute
console.log('%c Break on Attribute', 'background: yellow');
console.log('See Readme');

const button = document.querySelector('.bigger');
    button.addEventListener('click', function(e) {
    const newFontSize =
        parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});


// Some Setup Code

function doctorize(name) {
    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist(); // ReferenceError: doesntExist is not defined
    return `Hello ${name}`;
}

function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
}
