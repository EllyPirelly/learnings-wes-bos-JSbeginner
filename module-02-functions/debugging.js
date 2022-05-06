// LOGS -----------------------
console.log('%c All kinds of console logs that are now yellow', 'background: yellow');

const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

console.log('Hey I log a console.log');
console.warn('Watch out! This is a console.warn');
console.error('Error Message here. This is a console.error');
console.table(people);

people.forEach((person, index) => {

  if (person.name === 'Wes') {
    console.warn('warn wizzard console.warn');
    console.error('error wizzard console.error');
    }

});

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(`${person.cool}`);
  console.log(`${person.country}`);
  console.log('DONE');
  console.groupEnd(`${person.name}`);
})


// GRABBING ELEMENTS -----------------------
console.log('%c Grabbing Elements', 'background: yellow');
console.log('See Readme/js');
// in JavaScript console
// inspect an element and type
// $0 // will return to you whatever element you've currently selected, the last one you've selected
// $1 // will return to you the second to last you've selected
// $('div') // will return the first div that matches
// $$('div') // will return all of the divs that matches


// DEBUGGER -----------------------
console.log('%c Debugger', 'background: yellow');
console.log('See Readme/js');

people.forEach((person, index) => {
  // debugger; // comment this out to see in action in the console
  console.log(person.name);
});


// SCOPE -----------------------
console.log('%c Scope, will be looked into later in the course', 'background: yellow');
// will be looked into more later in the course


// NETWORK REQUESTS -----------------------
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
// `fetchDadJoke()` comment this out to get dadjokes


// BREAK ON ATTRIBUTE -----------------------
console.log('%c Break on Attribute', 'background: yellow');
console.log('See Readme');

const button = document.querySelector('.bigger');
  button.addEventListener('click', function(e) {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});
