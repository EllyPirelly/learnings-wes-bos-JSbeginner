const item = document.querySelector('.item');
// getter, showing everything as a string
//console.log(item.innerHTML);

// setter
/* item.innerHTML = `
    <div>
        <h1>Hey how are you</h1>
    </div>
`;
console.log(item.innerHTML); */

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
//console.log(item.innerHTML);
console.log(typeof myHTML);

const itemImage = document.querySelector('.wrapper img');
console.log(itemImage);
itemImage.classList.add('round'); */


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