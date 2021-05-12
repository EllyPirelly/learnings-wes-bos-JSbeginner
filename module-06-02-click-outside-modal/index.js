const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(eve) {
    const button = eve.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200', '400')}" width="400" height="400" alt="${name}">
        <p>${desc}</p>
    `;

    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (eve) {
    // check if click happens inside the modal (have this boolean!)
    const isOutside = !eve.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
        /* or (without the function): */
        /* modalOuter.classList.remove('open'); */
    }
});

window.addEventListener('keydown', (eve) => {
    if (eve.key === 'Escape') {
        closeModal();
        /* or (without the function): */
        /* modalOuter.classList.remove('open'); */
    }
});
