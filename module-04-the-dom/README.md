# Module 4 - The DOM

<!-- As most of the "Module 4 The DOM" content is information and small coding bits, this README here is used as a notepad. -->

Please check html file [index.html](./index.html) in this module's folder to check which js files are referenced to follow up with the coding bits.

[Introduction to the document](#introduction-to-the-document)

[Selecting Elements](#selecting-elements)

[Element Properties and Methods](#element-properties-and-methods)

[Working with Classes](#working-with-classes)

[Build in and Custom Data Attributes](#build-in-and-custom-data-attributes)

[Creating HTML](#creating-html)

[HTML from Strings and XSS](#html-from-strings-and-xss)

[Traversing and Removing Nodes](#traversing-and-removing-nodes)

[CARDIO](#cardio)

## Introduction to the document

- a big part of working with JavaScript in a web browser is interacting with elements on a page
- to, for example,
    - add event listener ('click', 'scroll', etc)
    - add/remove and modify elements
    - add/remove classes
    - fetch new data
    - play music and videos, etc, etc
    - ... we need the **DOM**<br>

**The browser grabs your written HTML and turns it into something that is called the "Document Object Model", the DOM**
- once we have all HTML elements grabbed and rendered into the DOM, this allows to interface with the DOM via JavaScript
- in the browser, open up the JavaScript console and go to the Elements tab
   - what you see in that Elements tab is NOT actual written HTML, but the HTML that JavaScript grabbed and rendered into the DOM
   - the DOM is represented in a tree that pretty much looks like "regular" written HTML

### Window

**The global scope in the browser is called the `window`**
- the `window` is where all of the global variables are stored, aswell as helpful properties
- example `window.location`, will return an object full of info (current page you're on,
host name, protocol, etc, etc, see screenshot below)
- example `window.innerWidth`, will return the inner width of the window, see screenshot below
- think of the `window` as everything about the currently opened browser window, including the browser variables, the scroll bars, etc
- all of the stuff in your actual browser window generally is stored in the window object

### Document

**`document` is everything from the opening HTML tag `<!DOCTYPE html>` to the closing HTML tag `</html>`**
- the `document` is only concerned about the DOM
- the entire Document **Object** Model is accessible via the `document.` keyword

![the dom 01](./img/screen-mod04-the-dom01.png)

### Navigator

**`navigator` is higher level than the `window` with info, not just about the browser but the device itself**
- e.g. webcam, audio access, battery level, gps coordinates - things that are device specific

![the dom 02](./img/screen-mod04-the-dom02.png)

## Selecting Elements

**A word on loading JS**
- do not have JavaScript loaded and running before elements are rendered (e.g. do not put a `<script>` tag in the `<head>` if possible)
- as mentioned before, put the `<script>` tag right before the `<body>` tag, this will ensure that your HTML is parsed/rendered on the page before the JavaScript is run
- if you have to have a `<script>` tag in the `<head>` tag, make sure that the DOM content is loaded before running the function:

```
// based on HTML present, returns the first matching <p>

function init() {
    // grab the first matching p
    const p = document.querySelector('p');
    console.log(p);
}
document.addEventListener('DOMContentLoaded', init);
```

- before working with elements on a page is possible, they need to be selected
- once elements are selected they can be manipulated
- there are two main ways to select elements, `querySelector` and `querySelectorAll`
- generally used on the `document.` (but that's not always the case, see `getElement`)

**querySelector**

- based on HTML present, returns the first matching element
- will seach the entire page / the entire document
- as a method of a selected element, will only search inside of that selected element

**querySelectorAll**

- based on HTML present, returns a NodeList
- a NodeList is NOT an array!
    - it's a "list of things" (more explanation later in the courses)
    - it does not have all the methods you'd have for an array (e.g. `map()`, `filter()`, `reduce()` and so on)

```
// grab the first matching p element
const p = document.querySelector('p');
console.log(p); // <p>Hi I'm the first ever item p</p>
```
```
// grab all div elements (node list)
const divs = document.querySelectorAll('div');
console.log(divs); // NodeList(3) [div.items, div.item, div.item.item2]
```
```
// grab all div elements with a class of item (node list)
const specificdivs = document.querySelectorAll('div.item');
console.log(specificdivs); // NodeList(2) [div.item, div.item.item2]
```
```
// grab all img elements inside element/s with a class of item (node list)
const imgInItem = document.querySelectorAll('.item img');
console.log(imgInItem); // NodeList(2) [img, img]
```
```
// grab the first matching img element inside element with a class of item
const imgInFirstItem = document.querySelector('.item img');
console.log(imgInFirstItem); // <img src="https://source.unsplash.com/random/150x150">
```
```
// grab the first matching element with a class of item2
const imgInItemWithClass = document.querySelector('.item2');
console.log(imgInItemWithClass); // <div class="item item2">...</div>
```
```
const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
// grab the first matching img element inside element with a class of item2
// you can specifically address an element via class
const item2Image = item2.querySelector('img');
console.log(item2); // <div class="item item2">...</div>
```

**Other ways of addressing elements**

```
const idElement = document.getElementById('wes');
console.log(idElement); // <h2 id="wes">Sub Div headline</h2>
```

![the dom 03](./img/screen-mod04-the-dom03.png)


## Element Properties and Methods

## Working with Classes

## Build in and Custom Data Attributes

## Creating HTML

## HTML from Strings and XSS

## Traversing and Removing Nodes

## CARDIO