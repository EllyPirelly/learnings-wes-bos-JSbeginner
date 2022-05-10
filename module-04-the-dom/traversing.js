const wes = document.querySelector('.wes');

/* console.log(wes); // <p class="wes">I am Wes, I <em>love </em> to bbq.</p>
console.log(wes.children); // HTMLCollection(2) [em, strong]
console.log(wes.childNodes); // NodeList(4) [text, em, text, strong] */


/* PROPERTIES FOR ELEMENTS */
console.log('first element', wes.firstElementChild); // <em>love </em>
console.log('last element', wes.lastElementChild); // <strong>make websites.</strong>
console.log('previous element sibling', wes.previousElementSibling); // null
console.log('next element sibling', wes.nextElementSibling); // <img class="nice cool" src="https://source.unsplash.com/random/250x250">
console.log('parent element', wes.parentElement); // <body>...</body>

/* PROPERTIES FOR NODES */
/* el.childNodes
el.firstChild
el.lastChild
el.previousSibling
el.nextSibling
el.parentNode */


/* CREATE / REMOVE */
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p); // <p>I will be removed</p> -> still there