// select the elements on the page - canvas, context, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const FIXED_AMOUNT = 40;

// setup canvas for drawing
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
/* const { canvasWidth, canvasHeight } = canvas; // destructuring */

// create randomised starting spot
let x = Math.floor(Math.random() * canvasWidth);
let y = Math.floor(Math.random() * canvasHeight);

// define line style
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = FIXED_AMOUNT;

// set line style rainbow color, starting point, draw starting point
let hue = 0;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;
// start drawing/"set pencil on surface"
ctx.beginPath();
// starting x and y (left and top)
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// handler function for arrow keys
function handleKey(eve) {
    if (eve.key.includes('Arrow')) {
        eve.preventDefault();
        draw({ key: eve.key });
    }
}

// draw function
function draw({ key }) {
    // increment hue by 10
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    /* ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`; // randomise colors */
    // start path
    ctx.beginPath();
    // again set original starting position
    ctx.moveTo(x, y);
    // move x and y depending on user action
    switch (key) {
        case 'ArrowUp':
            y = y - FIXED_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + FIXED_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + FIXED_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - FIXED_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// clear / wobble function
function clearCanvas() {
    canvas.classList.add('wobble');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    canvas.addEventListener('animationend', function () {
        canvas.classList.remove('wobble');
    }, { once: true });
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
// hook up the shake button to clear canvas
shakeButton.addEventListener('click', clearCanvas);