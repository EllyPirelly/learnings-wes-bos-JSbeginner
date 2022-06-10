// TARGET, PROPAGATION and BUBBLING

const buyButton = document.querySelectorAll('button.buy');

function handleBuyButtonClick(eve) {
  console.log('you clicked a button');
    console.log('event', eve); // PointerEvent
  console.log('event target', eve.target); // <button ...>
  console.log('event current target', eve.currentTarget); // <button ...>
  console.log('event target === event current target', eve.target === eve.currentTarget); // true

  /*
  const button = event.target;
  console.log(button.textContent);

  console.log(parseFloat(eve.target.dataset.price)); // parseFloat makes that a number
  console.log(typeof eve.target.dataset.price); // the price as a string !!! */

  // stop this event from bubbling up
  /* eve.stopPropagation(); */
}

buyButton.forEach(function (calledAnythingWeWant) {
  calledAnythingWeWant.addEventListener('click', handleBuyButtonClick);
});

/* window.addEventListener('click', function (eve) {
  console.log('you clicked the window');
  console.log(eve.target);
  eve.stopPropagation(); // don't use this on window level or following event will never fire
}); */



// CAPTURE

window.addEventListener('click', function (eve) {
  console.log('you clicked the window');
  console.log('target', eve.target); // html
  console.log('type', eve.type); // click
  console.log('bubbles', eve.bubbles); // true
  /* eve.stopPropagation(); */ // don't use this on window level or following event will never fire
}, { capture: true });


const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (eve) {
  console.log('mouseenter', eve.currentTarget); // fires every time the mouse enters the <img>
  console.log('this', this); // <img ...>
});