const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

/* FUNCTIONS */
/* anonymous callback function */
butts.addEventListener('click', function () {
    console.log('anon callback function');
});

/* named function */
function handleClick() {
    console.log('it got clicked');
}
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);
//butts.removeEventListener('click', handleClick);

/* arrow function */
const hooray = () => console.log('hooray');
coolButton.addEventListener('click', hooray);

/* LISTEN ON MULTIPLE ITEMS */
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(eve) {
    console.log('you clicked a button');
    const button = eve.target;

    console.log(eve.target);
    console.log(eve.currentTarget);
    console.log(eve.target === eve.currentTarget); // true

    /*console.log(button.textContent);
    console.log(parseFloat(eve.target.dataset.price)); // parseFloat makes that a number
    console.log(eve.target.dataset.price);
    console.log(typeof eve.target.dataset.price); // string !!! */
    // stop this event from bubbling up
    /* eve.stopPropagation(); */
}
buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

/* window.addEventListener('click', function (eve) {
    console.log('you clicked the window');
    console.log(eve.target);
    eve.stopPropagation();
}); */

/* CAPTURE */
window.addEventListener('click', function (eve) {
    console.log('you clicked the window');
    console.log(eve.target);
    console.log(eve.type);
    console.log(eve.bubbles);
    /* eve.stopPropagation(); */ // don't use this on window level or following event will never fire
}, { capture: true });

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function (eve) {
    console.log(eve.currentTarget);
    console.log(this);
});