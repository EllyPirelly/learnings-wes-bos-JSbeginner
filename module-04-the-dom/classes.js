/* classes */
const pic = document.querySelector('.nice');
//console.log(pic.classList);

pic.classList.add('open');
//console.log(pic.classList);
pic.classList.remove('cool');
//console.log(pic.classList);
pic.classList.add('round');

//pic.classList.toggle('round');

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.classList.contains('round');

/* attributes */
pic.alt = 'random otherwise helpful alt text';
console.log(pic.alt); // random otherwise helpful alt text
console.log(pic.naturalWidth); // 0 -> because the image isn't downloaded yet
window.addEventListener('load', function () {
    console.log(pic.naturalWidth); // 250
});
// better use case
pic.addEventListener('load', function () {
    console.log(pic.naturalWidth); // 250
});

/* getAttribute and setAttribute */
console.log(pic.getAttribute('alt')); // random otherwise helpful alt text
pic.setAttribute('alt', 'changed via set Attribute');
console.log(pic.getAttribute('alt')); // changed via set Attribute
pic.setAttribute('newly-set-attr', 'new text too');
console.log(pic.getAttribute('newly-set-attr')); // new text too


