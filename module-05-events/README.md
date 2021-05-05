# Module 5 - Events - Event Listener

<!-- As most of the "Module 5 - Events - Event Listener" content is information and small coding bits, this README here is used as a notepad.

Please check html file [index.html](./index.html) in this module's folder to check which js files are referenced to follow up with the coding bits. -->

[Event Listener](#event-listener)

[Targets, bubbling, propagation and capture](#targets-bubbling-propagation-and-capture)

[Prevent default and form events](#prevent-default-and-form-events)

[Accessibility gotchas and keyboard codes](#accessibility-gotchas-and-keyboard-codes)

## Event Listener

- DOM elements emit events - when they are clicked, hovered, dragged, they will fire off

**event listener**

- "go, get something", "listen for something", "do something"
- event listeners are used to listen for when events happen and react to them
- event listeners can be attached to all elements, as well as to the `document` and the `window`
- `addEventListener()` will take two arguments, first the type of event, second an anonymous callback function

**callback function**

- is just a regular function that gets passed to a method that will then be called at a later point in time
- anonymous, as it's not named, there's no reference to it (!)
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
coolButton.addEventListener('click', handleClick);
butts.removeEventListener('click', handleClick);

// arrow function
const hooray = () => console.log('hooray');
coolButton.addEventListener('click', hooray);
```

**removeEventListener**

- `removeEventListener()` **needs reference to a function**
- `removeEventListener()` unbinds the function from the element
  - binding: taking a function, listening for a specific event against a specific element
- a named function or an arrow function that is stored in a variable, **must** be used to be able to reference and unbind
- the arrow function above technically is an anonymous function, as it's stored in a variable it is referencable

**listening for events on multiple items**

- example 10 `<button>`
  - selecting all of them gives a node list, not HTML elements
  - elements here don't have `addEventListener()` on them
  - you need to loop over the elements with `forEach()`
- for `removeEventListener()` it's the same, it needs to be looped over

```
const buyButton = document.querySelectorAll('button.buy');

// with anonymous function
function buyItem() {
    console.log('buying item');
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
    console.log('looped over click');
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

- arrow function downside: unbinding of event listeners doesn't work as it's an anonymous function

## Targets, Bubbling, Propagation and Capture

- event object

## Prevent Default and Form Events

## Accessibility gotchas and keyboard codes
