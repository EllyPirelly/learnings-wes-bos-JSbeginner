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
const buyButton = document.querySelectorAll('button.buy');
/* console.dir(buyButton); // NodeList, NOT HTML elements
console.dir(butts); // NodeList, NOT HTML elements */

/* with anonymous function */
function buyItem() {
    console.log('buying item');
}
buyButton.forEach(function (calledAnythingWeWant) {
    console.log(calledAnythingWeWant);
    calledAnythingWeWant.addEventListener('click', buyItem);
});

/* with named function */
function buyItem() {
    console.log('buying item');
}
function loopOverButton(calledAnythingWeWant) {
    console.log('looped over click');
    calledAnythingWeWant.addEventListener('click', buyItem);
}
buyButton.forEach(loopOverButton);

/* with arrow function */
buyButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('arrow click');
    })
})