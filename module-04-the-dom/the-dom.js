/* START BATCH 01 OF EXAMPLES - Selecting Elements */

/* // grab the first matching p element
const p = document.querySelector('p');
console.log(p); // <p>Hi I'm the first ever item p</p>

// grab all div elements (node list)
const divs = document.querySelectorAll('div');
console.log(divs); // NodeList(4) [div.items, div.item, div.item.item2, div]

// grab all div elements with a class of item (node list)
const specificdivs = document.querySelectorAll('div.item');
console.log(specificdivs); // NodeList(2) [div.item, div.item.item2]

// grab all img elements inside elements with a class of item (node list)
const imgInItem = document.querySelectorAll('.item img');
console.log(imgInItem); // NodeList(2) [img, img]

// grab the first matching img element inside element with a class of item
const imgInFirstItem = document.querySelector('.item img');
console.log(imgInFirstItem); // <img src="https://source.unsplash.com/random/150x150">

// grab the first matching element with a class of item2
const imgInItemWithClass = document.querySelector('.item2');
console.log(imgInItemWithClass); // <div class="item item2">...</div>

// grab the first matching img element inside element with a class of item2
const item2 = document.querySelector('.item2');
// you can specifically address an element via class
const item2Image = item2.querySelector('img');
console.log(item2); // <div class="item item2">...</div>

// other ways of grabbing elements
const idElement = document.getElementById('wes');
console.log(idElement); // <h2 id="wes">Sub Div headline</h2> */


/* START BATCH 2 OF EXAMPLES - Element Properties and Methods*/

/* const heading = document.querySelector('h2');
console.log(heading); // <h2>Badly styled heading in HTML</h2>
console.dir(heading); // h2

console.log(heading.textContent); // Badly styled heading in HTML I am a hidden span within the h2
console.log(heading.innerText); // Badly styled heading in HTML

heading.textContent = 'Set new headline with textContent';

console.log(heading.textContent); // Set new headline with textContent
console.log(heading.innerText); // Set new headline with textContent

console.log(heading.innerHTML); // Set new headline with textContent
console.log(heading.outerHTML); // <h2>Set new headline with textContent</h2> */


/* START BATCH 3 OF EXAMPLES - Element Properties and Methods*/

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent); // This is what I ate 🧇

// one possibility to update
/* pizzaList.textContent = `${pizzaList.textContent} plus pizza 🍕`;
console.log(pizzaList.textContent); // This is what I ate 🧇 plus pizza 🍕 */

// better method to update, adds to the front
pizzaList.insertAdjacentText('afterbegin', '🍿');
console.log(pizzaList.textContent); // 🍿This is what I ate 🧇

// adds this to the end
pizzaList.insertAdjacentText('beforeend', '🍕');
console.log(pizzaList.textContent); // 🍿This is what I ate 🧇🍕

// adds this as its OWN NODE on an extra line BEFORE the element
pizzaList.insertAdjacentText('beforebegin', '🍔');
console.log(pizzaList.textContent); // 🍿This is what I ate 🧇🍕
const article = document.querySelector('article');
console.log(article.textContent); // I'm an article headline 🍔🍿This is what I ate 🧇🍕

