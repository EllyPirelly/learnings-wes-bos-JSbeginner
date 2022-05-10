const item = document.querySelector('.item');

/* INNER HTML */

/* // innerHTML, getter
console.log(item.innerHTML); // <img src="https://source.unsplash.com/random/150x150"> <p>Hi I'm the first ever item p</p>

// innerHTML setter
item.innerHTML = `
  <div>
    <h1>Hey how are you</h1>
  </div>
`;
console.log(item.innerHTML); // will log that html inside of the first .item element found */



/* BACK TICKS */

/* const width = 75;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `meaningful desc text`;
const myHTML = `
  <div class="wrapper">
    <h2>Random ${desc}</h2>
    <img src="${src}" alt="meaningful alt text"/>
  </div>
`;
item.innerHTML = myHTML;
// console.log(item.innerHTML);
console.log(typeof myHTML); // string

const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');
console.log(itemImage); // will log the added class
console.log(typeof itemImage); // object */


/* const width = 75;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `meaningful desc text`;
const myHTML = `
  <div class="wrapper">
    <h2>Random ${desc}</h2>
    <img src="${src}" alt="meaningful alt text"/>
  </div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment); */


/* XSS - Cross-site scripting */

const width = 75;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `meaningful desc text <img onload="alert('example of being hacked - XSS')" src="https://source.unsplash.com/random/250x250" />`;
const myHTML = `
  <div class="wrapper">
    <h2>Random ${desc}</h2>
    <img src="${src}" alt="meaningful alt text"/>
  </div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);