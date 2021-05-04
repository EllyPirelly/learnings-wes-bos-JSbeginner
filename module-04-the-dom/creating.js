const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');
console.log(myParagraph); // <p class="special">I am a p</p>

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/150x150';
myImage.alt = 'meaningful alt text';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// const body = document.querySelector('body');
/* document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage); */

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// add something to the top, like a heading
const heading = document.createElement('h2');
heading.textContent = 'heading coming in via insertAdjacent';

myDiv.insertAdjacentElement('afterbegin', heading);

// unordered list
const myList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
myList.appendChild(li);

const li5 = document.createElement('li');
li5.textContent = 'five';
myList.append(li5);

const li1 = li5.cloneNode();
li1.textContent = 'one';
myList.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li.insertAdjacentElement('beforebegin', li2);

document.body.insertAdjacentElement('afterbegin', myList);