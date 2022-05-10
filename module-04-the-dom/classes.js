/* CLASSES */

const pic = document.querySelector('.nice');
// console.log(pic.classList);

pic.classList.add('open');
// console.log(pic.classList);

pic.classList.remove('cool');
// console.log(pic.classList);


/* TOGGLE */

pic.classList.add('round');
function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.classList.contains('round'); // to check if a certain class is there or not


/* ATTRIBUTES */

pic.alt = 'random otherwise helpful alt text';
console.log(pic.alt); // random otherwise helpful alt text
console.log(pic.naturalWidth); // 0 -> because the image isn't downloaded yet!

// load it first to then show width
pic.addEventListener('load', function () {
  console.log(pic.naturalWidth); // 250
});

/* getAttribute and setAttribute */

console.log(pic.getAttribute('alt')); // random otherwise helpful alt text
pic.setAttribute('alt', 'changed via set Attribute');
console.log(pic.getAttribute('alt')); // changed via set Attribute

pic.setAttribute('newly-set-attr', 'new text too');
console.log(pic.getAttribute('newly-set-attr')); // new text too

console.log(pic.hasAttribute('newly-set-attr')); // true
