const wes = document.querySelector('.wes');
/* console.log(wes); // <p class="wes">I am Wes, I <em>love </em> to bbq.</p> */

/* console.log(wes.children); // HTMLCollection [em] */

/* properties for elements */
/* console.log('first element', wes.firstElementChild); // <em>love </em>
console.log('last element', wes.lastElementChild); // <strong>make websites.</strong>
console.log('previous element sibling', wes.previousElementSibling); // null
console.log('next element sibling', wes.nextElementSibling); // <img class="nice cool" src="https://source.unsplash.com/random/250x250">
console.log('parent element', wes.parentElement); // <body>...</body> */

/* properties for nodes */
/* el.childNodes
el.firstChild
el.lastChild
el.previousSibling
el.nextSibling
el.parentNode
console.log(wes.childNodes); // NodeList(3) [text, em, text] */

/* create / remove */
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p); // <p>I will be removed</p> -> still there