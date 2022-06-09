// make a div
const newDiv = document.createElement('div');

// add a class of wrapper to it
newDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(newDiv);



// make an unordered list
// add three list items with the words "one, two, three" in them
const newUl = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// put that list into the above wrapper
/* easiest way for this case: */
newDiv.innerHTML = newUl;



// create an image
const newImage = document.createElement('img');

// set the source to an image
newImage.src = `https://source.unsplash.com/random/500x500`;

// set the width to 250
newImage.width = 250;
newImage.height = 250;

// add a class
newImage.classList.add('new-class');

// add an alt text
newImage.alt = 'some alt description';

// Append that image to the wrapper
newDiv.appendChild(newImage);



// with HTML string, make a div, with two paragraphs inside of it
const divString = `
  <div class="myDiv">
    <p>paragraph one</p>
    <p>paragraph two</p>
  </div>
`;

// put this div before the unordered list from above
const ulElement = newDiv.querySelector('ul');
console.log(ulElement); // <ul>...</ul> -> now it's an HTML element!
ulElement.insertAdjacentHTML('beforebegin', divString);

// add a class to the second paragraph called warning
const myDiv = newDiv.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();



// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">

      <h2>${name} - ${age}</h2>

      <p>Their height is ${height} and their age is ${age} years. In dog years they would be ${age * 7} years old.</p>

      <button class="delete" type="button">&times; delete</button>
    </div>
  `
  return html;
}
// console.log(generatePlayerCard('dolly', 5, 150));



// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('billy', 12, 120);
cardsHTML = cardsHTML + generatePlayerCard('bobby', 10, 80);
cardsHTML = cardsHTML + generatePlayerCard('timmy', 8, 180);
cardsHTML = cardsHTML + generatePlayerCard('tommy', 11, 150);
// console.log(cardsHTML);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
newDiv.insertAdjacentElement('beforebegin', cards);



// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
/* for that, add button to the HTML, generated in the previous function! */
const buttons = document.querySelectorAll('.delete');

// make delete function
function deleteCard(e) {
  const buttonThatGotClicked = e.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
  /* or
  buttonThatGotClicked.parentElement.remove(); */
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));