const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// card button click function

function handleCardButtonClick(eve) {
  const button = eve.currentTarget;
  // closest() is kinda like querySelectorAll() except it's the opposite - it will climb UP the nested tree of DOM elements
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // populate the modal inner with the below constructed info
  // replace the previous image size of 200 with 400
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '400')}" width="400" height="400" alt="${name}">
    <p>${desc}</p>
  `;

  // open the outer modal
  modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

// close modal function

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (eve) {
  // via closest check if the click happened inside the inner modal at all
  const isOutside = !eve.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (eve) => {
  if (eve.key === 'Escape') {
    closeModal();
  }
});
