# Module 6 - Scoll To Accept - Intersection Observer

## What is this about?

![mod 0603](./img/screen-mod0603-000.gif)

- JavaScript, HTML, CSS
- have an outer `<div>` terms and conditions with `overflow: scroll` set on it
- select that element and listen for scroll on it
- the accept button at the bottom doesn't work until it's been scrolled all the way down ("scroll to accept")

## scoll events and why this might not be what we want

**example for scroll**

```
// select the div above the accept button
const terms = document.querySelector('.terms-and-conditions');

// a thing from the past before IntersectionObserver:
terms.addEventListener('scroll', function (eve) {
  console.log('scrollTop', eve.currentTarget.scrollTop); // scrollTop 1460
  console.log('scrollHeight', eve.currentTarget.scrollHeight);
}); // scrollHeight 1984
```

- `scrollTop`, is a property on elements, returns how far from top has been scrolled
- `scrollHeight`, is a property on elements, returns how high the actual scrolling thing is
- (just as an info: a scroll event doesn't bubble)

![mod 0602](./img/screen-mod0603-00.png)

- if scolled all to the bottom, the numbers for scrolled from top and scrolled height are not the same, as the accept button has some padding and a border and the last `<p>` has some margin
- to fix this it would be needed to work with `offsetHeight`, **which is a thing of the past**
- the way that this is done NOW is called **IntersectionObserver()**

## IntersectionObserver()

- rather than figuring out how far along the page the user has scolled, `IntersectionObserver()` is used to figure out if something is currently viewable on the page
- `IntersectionObserver()` will observe if an element is on or off, or partway on or off of the page
- it's just a watcher
- `IntersectionObserver()` takes in a callback (a function that gets called at a certain point)
- this is a callback that needs to be fired every single time that it needs to check if something is currently on the page
- it's different than a click callback, or a scroll callback

#### Simple example: Observe the element "watch for me"

```
// Select the strong tag in the midst of all of the text
const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload);
}

const obs = new IntersectionObserver(obCallback);

// pass it something to observe, in this case: watch
obs.observe(watch);
```

![mod 0602](./img/screen-mod0603-01.png)

- check out all of the info you can get

#### Simple example: Observe how far on the page it currently is

```
// Select the strong tag in the midst of all of the text
const watch = document.querySelector('.watch');

function obCallback(payload) {
  console.log(payload[0].isIntersecting);
  console.log(payload[0].intersectionRatio);
}

const obs = new IntersectionObserver(obCallback);

// pass it something to observe, in this case: watch
obs.observe(watch);
```

![mod 0602](./img/screen-mod0603-03.png)

- check out all of the info you can get

#### Accept Button

- `intersectionRatio()` is used to determine if it's been scrolled all the way to the bottom
- the second argument `IntersectionObserver` can take it can be an options object, which takes in two things:
  - first the root of what we are scrolling with (by default it's going to be the body)
  - second the threshold; with the `threshold` we can pass in if that object is off `threshold: 0`, halfway on `threshold: 0.5`, fully on `threshold: 1`
- in our case we use fully on the page
```
const obs = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
```
- watch out!
  - your last element scrolled needs to be visible in the browser 100%!
  - if parts of your last element are already scrolled out of the page the event won't fire!
  - this is the reason for the tiny but always visible `<p>Thank you!</p>` at the end of terms and conditions

You don't see this observer pattern all that much, the only two ways currently in the browser are `IntersectionObserver` (when something is currently scrolled into view), `ResizeObserver` (when an element is resized)

### side note - how to check if terms and conditions are present on the page at all

```
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return;
  }

  terms.addEventListener('scroll', function (eve) {
    console.log(eve);
  });
}

scrollToAccept();
```
