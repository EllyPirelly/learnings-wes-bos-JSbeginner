// SWITCH STATEMENTS
const turtle = document.querySelector('.turt');
const speed = 50;
let x = 0;
let y = 0;
let flipped = false;
let rotate = 0;

function handleKeyDown(eve) {
    // if it's not an arrow key we don't care
    if (!eve.key.includes('Arrow')) {
        return;
    }
    switch (eve.key) {
        case 'ArrowUp':
            y = y - 1;
            rotate = -90;
            break;
        case 'ArrowDown':
            y = y + 1;
            rotate = 90;
            break;
        case 'ArrowLeft':
            x = x - 1;
            rotate = 0;
            flipped = true;
            break;
        case 'ArrowRight':
            x = x + 1;
            rotate = 0;
            flipped = false;
            break;
        default:
            console.log('that is not a valid move');
            break;
    }

    //turtle.style.background = 'red';
    //turtle.style['background'] = 'yellow';
    //turtle.style['border'] = `5px solid black`;
    //turtle.style['madeup'] = `5px solid black`;

    turtle.setAttribute('style', `
        --rotateX: ${flipped ? '180deg' : '0'};
        --x: ${x * speed}px;
        --y: ${y * speed}px;
        --rotate: ${rotate}deg;
    `);
}

window.addEventListener('keydown', handleKeyDown);