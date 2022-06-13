// select the div above the accept button
const terms = document.querySelector('.terms-and-conditions');
// select the accept button down below
const button = document.querySelector('.accept');



// scroll - a thing from the past before IntersectionObserver:
/* terms.addEventListener('scroll', function (eve) {
  console.log('scrollTop', eve.currentTarget.scrollTop); // scrollTop 1460
  console.log('scrollHeight', eve.currentTarget.scrollHeight);
}); // scrollHeight 1984 */



// Intersection Observer - select strong tag in the midst of all of the text
/* const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload);
}

const obs = new IntersectionObserver(obCallback);

// pass it something to observe, in this case: watch
obs.observe(watch); */



// IntersectionObserver for button
function obCallback(payload) {
  // console.log(payload[0].isIntersecting);
  // console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    obs.unobserve(terms.lastElementChild);
  }
}

const obs = new IntersectionObserver(obCallback, {
  // root of what we are scrolling with
  root: terms,
  // fully on a page
  threshold: 1,
});

// pass it something to observe
obs.observe(terms.lastElementChild);
