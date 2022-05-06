const regeneratorRuntime = require("regenerator-runtime");
const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();

// input controls (for pixel amount and scaling of reput image)
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

const options = {
    SIZE: 6,
    SCALE: 1.5,
};

function handleOption(event) {
    const { value, name } = event.currentTarget;
    options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));

// populate user's video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        /* video: { width: 1280, height: 720 }, */
        /* video: { width: 640, height: 320 }, */
        video: { width: 840, height: 480 },
    });
    video.srcObject = stream;
    await video.play();

    // size the canvases to be the same as the video
    console.log(video.videoWidth, video.videoHeight);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

// face detection
async function detect() {
    const faces = await faceDetector.detect(video);
    faces.forEach(drawFace);
    faces.forEach(censor);
    // ask the browser when the next animation frame is
    // tell it to run detect for us
    /* requestAnimationFrame(detect); */
};

// draw face "styles"
function drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ffc600';
    ctx.lineWidth = 2;
    ctx.strokeRect(left, top, width, height);
}

// draw small face, and draw again but scaled up
function censor({ boundingBox: face }) {
    faceCtx.imageSmoothingEnabled = false;
    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

    // draw the small face
    faceCtx.drawImage(
        // 5 source arguments
        video, // where does the source come from
        face.x, // where do we start the source pull from
        face.y,
        face.width, // width and height from source pull (the square)
        face.height,
        // 4 draw arguments
        face.x, // where should we start drawing
        face.y,
        options.SIZE, // small image width
        options.SIZE, // small image height
    );

    // draw the small face back on, but scale up
    const width = face.width * options.SCALE;
    const height = face.height * options.SCALE;

    faceCtx.drawImage(
        faceCanvas, // source from itself
        face.x,
        face.y,
        options.SIZE,
        options.SIZE,
        // drawing arguments
        face.x - (width - face.height) / 2,
        face.y - (height - face.height) / 2,
        width,
        height,
    );
}

populateVideo().then(detect);