# Module 6 - Etch-a-Sketch

## What is this about?

![mod 0601](./img/screen-mod0601-01.png)

- Etch-a-Sketch
  - JavaScript, HTML, CSS
  - use arrow keys up, right, down, left, to move around
  - line in rainbow colors
  - click "Click to clear" to start over
  - when reloading the page (`cmd + r`), starting spot is randomized

## Topics to cover

- DOM elements
- keyboard events
- canvas
- switch statement

**canvas**

- grab canvas
- grab context (which is either 2d or 3d)
- the exercise is build with 2d context, see examples with [3d context here: ](https://threejs.org/), [for example ](https://threejs.org/examples/#webgl_effects_parallaxbarrier)
- canvas is a set of APIs, set of methods, that are used for drawing
- rectangles, circles, drawing, lines, borders, different fill colors, you name it - all those are available in canvas
- programmatically draw something to the browser
- `canvas` is the element
- `context` is where the drawing happens

```
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
```

- `'round'` to ensure a smooth drawing (default is a squared off edge)
- `lineWidth` by default is 1px

**keyboard events**

- don't forget to add a `preventDefault()` to the function that handles the arrow keys
- this will prevent the default scrolling of the page when hitting arrow keys

**switch statement**

- take in a variable, like the key, and depending on the four cases: go up, go down, go left or go right
- a switch statement always needs a default case
- `break` will stop the switch from running and skip over the `false` statements

**colors**

- everytime an arrow key moves the cursor, increment the H (hue) value by one

```
let hue = 0;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;

function draw({ key }) {
    // increment hue by 10
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ...
}
```

- explicitly update the `strokeStyle` by 10

```
// randomise colors
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
```

- [Mother-effing hsl()](https://mothereffinghsl.com/)
