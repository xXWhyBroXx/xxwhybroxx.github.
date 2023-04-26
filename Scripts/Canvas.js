
```
// Get the canvas element
const canvas = document.querySelector('canvas');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the canvas context
const context = canvas.getContext('2d');

// Set the stroke style
context.strokeStyle = '#000000';

// Set the line width
context.lineWidth = 2;

// Set the line cap
context.lineCap = 'round';

// Set the line join
context.lineJoin = 'round';

// Set the current position
let currentX = 0;
let currentY = 0;

// Draw a line
function drawLine(x, y) {
  context.beginPath();
  context.moveTo(currentX, currentY);
  context.lineTo(x, y);
  context.stroke();
  currentX = x;
  currentY = y;
}

// Event listeners
canvas.addEventListener('mousedown', (event) => {
  currentX = event.clientX;
  currentY = event.clientY;
  canvas.addEventListener('mousemove', onMouseMove);
});

canvas.addEventListener('mouseup', () => {
  canvas.removeEventListener('mousemove', onMouseMove);
});

function onMouseMove(event) {
  drawLine(event.clientX, event.clientY);
}
```

