# Module 5 - Events - Event Listener

As most of the content is information and small coding bits, this README here is used as a notepad. <br>
This module contains no project. <br>

[Event Listener](#event-listener)

[Targets, bubbling, propagation and capture](#targets-bubbling-propagation-and-capture)

[Prevent default and form events](#prevent-default-and-form-events)

[Accessibility gotchas and keyboard codes](#accessibility-gotchas-and-keyboard-codes)

## Event Listener

- DOM elements emit events - when they are clicked, hovered, dragged, they will fire off
- **following examples are referring to `index.html` and `index.js`**

**event listener**

- "go, get something", "listen for something", "do something"
- event listeners are used to listen for when events happen and react to them
- event listeners can be attached to all elements, as well as to the `document` and the `window`
- `addEventListener()` will take two arguments, first the type of event, second an anonymous callback function

**callback function**

- is just a regular function that gets passed to a method that will then be called at a later point in time
- with `addEventListener()` this function will be called/run by the browser when it needs to

```
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// anonymous callback function
butts.addEventListener('click', function () {
  console.log('anon callback function');
});

// named function
function handleClick() {
  console.log('it got clicked');
}
butts.addEventListener('click', handleClick);
/* butts.removeEventListener('click', handleClick); */

// arrow function
const hooray = () => console.log('hooray');
coolButton.addEventListener('click', hooray);
coolButton.addEventListener('click', hooray);
```
- try to reference a named function in that callback as it's generally way easier to maintain

**removeEventListener**

- `removeEventListener()` **needs reference to a named function**
- `removeEventListener()` unbinds the function from the element
  - binding: taking a function, listening for a specific event against a specific element
- a named function (or an arrow function that is stored in a variable), **must** be used to be able to reference and unbind
- the arrow function (stored in the const hooray) above technically is an anonymous function but as it's stored in a variable it is referencable

**listening for events on multiple items**

- example: take 10 `<button>`
- selecting all of them gives a node list, not HTML elements
- node list elements don't have `addEventListener()` on them
- you need to loop over each individual node list elements with `forEach()`
- for `removeEventListener()` it's the same, it needs to be looped over

```
const buyButton = document.querySelectorAll('button.buy');
console.log(buyButton); // NodeList, NOT HTML elements

// with anonymous function
function buyItem() {
  console.log('buying item anon function');
}
buyButton.forEach(function (calledAnythingWeWant) {
  console.log(calledAnythingWeWant);
  calledAnythingWeWant.addEventListener('click', buyItem);
});

// with named function
function buyItem() {
  console.log('buying item');
}
function loopOverButton(calledAnythingWeWant) {
  console.log('looped over click named function');
  calledAnythingWeWant.addEventListener('click', buyItem);
}
buyButton.forEach(loopOverButton);

// with arrow function
buyButton.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('arrow click');
  })
})
```

## Targets, Bubbling, Propagation and Capture

- **following examples are referring to `event.html` and `event.js`**
- example: take 10 `<button>`
- how to get information about what has specifically been clicked, as we use one handler function for all buttons?
- that information is in the **event object**, with all kinds of useful information and methods for working with events
- to access the **event object**, the callback/handler function needs to have a parameter that is the `event`
- it doesn't matter what that event is called as long as it's the first argument of the callback, as the first argument IS the **event object**
- `event.target` once you have the target, you can access anything you want about it (and is accessible)
- what's the difference between `event.target` and `event.currentTarget`?
  - the difference comes in when there's elements that are nested **inside** of the element that's been listened to
  - `event.target` is the thing that got clicked
  - `event.currentTarget` is the the thing that fired the event listener
  - most cases most likely need `.currentTarget`
  - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

**Propagation and Bubbling**

- it is possible to click on multiple things at the same time = propagation
- example click on `<strong>` - also all other added events are fired

![event01](./img/screen-mod05-events01.png)

- what happens is that events bubble up
- click on `<strong>`, also click on `<button>`, also click on `<body>`, also click on `<html>`, also click on `window`, also click on (in my case) Google Chrome browser
- even though the tiny `<strong>` is clicked, both the browser and the operating system will register that click and it will keep bubbling up
- how to prevent that? with `stopPropagation()`

**Capture**

- is sort of the opposite
- a click on a deeper nested element will go through all of the "outer" elements, doesn't do anything
- after going through to the lowest DOM node, what happens is it starts to bubble up, will trigger the event
- example: listen to click on `window` first and stop it from going any further
- that happens via the third argument you can add to `addEventListner()`
- be careful to not unintentally stop events through `stopPropagation()`

**most common use case for event listener**

- listening for clicks on lower level element
- stopping the propagation when clicking on that element
- so that elements that are higher, that are also listening for clicks, do not also fire that specific element event listener

**this**

- reserved word
- in a callback function where you want to reference the actual element that the event was called against - the `this` keyword is going to surface that for you
- the `this` keyword is always going to be equal whatever is to the left of the dot
- the `this` keyword has a bit of a downside, when you change a function to an arrow function, then the `this` keyword is no longer scoped to that element
- recommendation to not use it in event listeners and callbacks, use `e.target` or `e.currentTarget`

## Prevent Default and Form Events

- **following examples are referring to `forms.html` and `forms.js`**

**Prevent Default**

- there's a couple of HTML elements that have default functionality
- however you can stop the default action of the browser and pick it up from JavaScript
- `preventDefault()` method on events
- click on `<a>` obviously gets you to the website as the default of a link is to change the page

```
<a class="wes" href="https://wesbos.com">Wes Bos</a>

const wes = document.querySelector('.wes');

wes.addEventListener('click', function (eve) {
  console.log(eve);
})
```

- however you can prevent the default from happening

```
const wes = document.querySelector('.wes');

wes.addEventListener('click', function (eve) {
  eve.preventDefault();
})
```

- `preventDefault()` is extremely handy when you wish for the default thing to stop from happening

**form element**

```
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
  console.log(eve);
  eve.preventDefault();
})
```

- whatever you've submitted is put in the URL `http://127.0.0.1:5500/module-05-events/forms.html?name=something&email=wesbos%40gmail.com`
- more often than not you don't want to submit the form to a server side, but want to: stop it from submitting, grab those details with JavaScript, and continue on

**other types of events with forms**

- `keyup`, `keydown`, `focus`, `blur`...

```
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (eve) {
  const name = eve.currentTarget.name.value;
  if (name.includes('Chad')) {
    alert('Sorry bro');
    eve.preventDefault();
  }
});

function logEvent(eve) {
  console.log(eve.type);
  console.log(eve.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
```

## Accessibility gotchas and keyboard codes

- HTML by itself is very accessible

**common pitfalls**

- don't use buttons and links against their purpose
  - buttons: actions inside of an application
  - links: change the page
- things that are not keyboard accessible should not have clicks registered on them unless they **have** to
- example `<img>`
  - there might be use cases where you need to click on the image
  - maybe you want to present a larger version of it, maybe you want to zoom in or click and drag around...
  - however, without a mouse, you cannot click on the `<img>` with only the keyboard
  - what you can do is give the `<img>` a `role="button"`
  - consider, that you then also have to adapt the event listener!

`<img>`, not clickable with only keyboard:

```
<img class="photo" src="https://source.unsplash.com/random/200x200" alt="nice">

const imgAcc = document.querySelector('.photo');

imgAcc.addEventListener('click', function () {
  console.log('you clicked the image');
})
```

`<img>`, clickable with keyboard due to `tabindex` which makes it focusable, and of course then eventlistener:

```
<img class="photo-clickable" src="https://source.unsplash.com/random/200x200" alt="nice-clickable" tabindex="0">

const imgAccTab = document.querySelector('.photo-clickable');

function handlePhotoClick(eve) {
  if (eve.type === 'click' || eve.key === 'Enter') {
    console.log('clicked the image via keyboard due to tabindex');
  }
}

imgAccTab.addEventListener('click', handlePhotoClick);
// keyup is needed as otherwise a click won't be triggered
imgAccTab.addEventListener('keyup', handlePhotoClick);
```

`<img>`, clickable with keyboard, role button:
```
<img class="photo-button" role="button" tabindex="0"  src="https://source.unsplash.com/random/200x200" alt="nice-button">

const imgAccButton = document.querySelector('.photo-button');

function handlePhotoClick(eve) {
  if (eve.type === 'click' || eve.key === 'Enter') {
    console.log('you clicked the image type button');
  }
}

imgAccButton.addEventListener('click', handlePhotoClick);
// keyup is needed as otherwise a click won't be triggered
imgAccButton.addEventListener('keyup', handlePhotoClick);
```
