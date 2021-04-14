/* function init() {
    // grab the first matching p
    const p = document.querySelector('p');
    console.log(p);
}
document.addEventListener('DOMContentLoaded', init); */

// grab the first matching p element
const p = document.querySelector('p');
console.log(p); // <p>Hi I'm the first ever item p</p>

// grab all div elements (node list)
const divs = document.querySelectorAll('div');
console.log(divs); // NodeList(3) [div.items, div.item, div.item.item2]

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

/* const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
// grab the first matching img element inside element with a class of item2
// you can specifically address an element via class
const item2Image = item2.querySelector('img');
console.log(item2); // <div class="item item2">...</div> */

// other ways of grabbing elements
const idElement = document.getElementById('wes');
console.log(idElement); // <h2 id="wes">Sub Div headline</h2>

