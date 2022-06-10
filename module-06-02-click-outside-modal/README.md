# Module 6 - Click Outside Modal

## What is this about?

![mod 0602](./img/screen-mod0602-02.gif)

- JavaScript, HTML, CSS
- have a series of 4 simple cards with simple info
- click on card button will open an outer modal and slightly slide in an inner modal
- the modal consists of
  - an outer modal to be place on top of content, fixed, 100vw, 100vh, semi-transparent background
  - an inner modal that consists of content coming in via JavaScript, centered
- a click outside of the inner modal (or hitting escape) will close the modal
- no close button in this example

## hide modal by default

- usually you would use `display: none;` or `visibility: hidden;`
- Wes Bos likes to use
  - `opacity: 0;` with `pointer-events: none;`
  - `opacity: 0;` alone won't cut it as the modal is still there, would listen to events
  - you also need `pointer-events: none;`, this will tell the browser to ignore any events here, won't capture them
  - show modal again with `opacity: 1;` and `pointer-events: all;`

- `closest()` is kinda like `querySelectorAll()` except it's the opposite - it will climb UP the nested tree of DOM elements

- in this example, the transitioning in of the modal-inner and especially the `<img>` is a bit yanky
- not part of this course but a solution could be to solve this via `document.createElement`, create an image and wait for the image to load
