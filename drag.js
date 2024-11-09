const canvas = document.getElementById('greenCanvas');
const ctx = canvas.getContext('2d');

let isDragging = false;
let dragStartX, dragStartY;

const houseImage = new Image(50, 50);
houseImage.src = './assets/house.png';
//houseImage.onload = draw;

const mousePosition = { x: 0, y: 0 }

let rectangles = [
  { x: 700, y: 50, width: 50, height: 50, color: 'blue', draggable: true, img: null },
  { x: 600, y: 50, width: 50, height: 50, color: 'red', draggable: true, img: null },
  { x: 500, y: 50, width: 50, height: 50, color: 'yellow', draggable: true, img: null },
  { x: 300, y: 50, width: 100, height: 100, color: 'orange', draggable: true, img: null },
  { x: 300, y: 300, width: 50, height: 50, color: 'pink', draggable: false, img: houseImage },
  { x: 500, y: 300, width: 50, height: 50, color: 'pink', draggable: false, img: houseImage },
  { x: 100, y: 300, width: 50, height: 50, color: 'pink', draggable: false, img: houseImage },
  { x: 200, y: 200, width: 50, height: 50, color: 'pink', draggable: false, img: houseImage },
];
let currentRectIndex = null;

function isOverlapping(rect1, rect2) {
  return !(rect1.x + rect1.width < rect2.x ||
    rect1.x > rect2.x + rect2.width ||
    rect1.y + rect1.height < rect2.y ||
    rect1.y > rect2.y + rect2.height);
}

canvas.addEventListener('mousedown', (e) => {
  // const rect = canvas.getBoundingClientRect();
  const x = mousePosition.x;
  const y = mousePosition.y;

  rectangles.forEach((rect, index) => {
    if (x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height) {
      if (rect.draggable) {
        isDragging = true;
        dragStartX = x - rect.x;
        dragStartY = y - rect.y;
        currentRectIndex = index;
      }
    }
  });
});

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  if (!rect)
    return;

  mousePosition.x = e.clientX - rect.left;
  mousePosition.y = e.clientY - rect.top;
  if (isDragging && currentRectIndex !== null) {
    const buffer = 0; // Buffer for the border

    let newX = Math.max(buffer, Math.min(mousePosition.x - dragStartX, canvas.width - rectangles[currentRectIndex].width - buffer));
    let newY = Math.max(buffer, Math.min(mousePosition.y - dragStartY, canvas.height - rectangles[currentRectIndex].height - buffer));
    newX = (newX + 25) - (newX + 25) % 50;
    newY = (newY + 25) - (newY + 25) % 50;

    let tempRect = { ...rectangles[currentRectIndex], x: newX, y: newY };
    let overlapping = rectangles.some((rect, index) => index !== currentRectIndex && isOverlapping(tempRect, rect));

    if (!overlapping) {
      rectangles[currentRectIndex].x = newX;
      rectangles[currentRectIndex].y = newY;
      //draw();
    }
  }
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
  currentRectIndex = null;
});

canvas.addEventListener('mouseout', () => {
  isDragging = false;
  currentRectIndex = null;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Set the properties for the square
  const x = (mousePosition.x) - (mousePosition.x) % 50; 
  const y = (mousePosition.y) - (mousePosition.y) % 50;  
  const lineColor = "white";
  const lineWidth = 3;
  // Set the line width and color
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  // Draw the hollow square
  ctx.strokeRect(x, y, 50, 50);

  rectangles.forEach(rect => {
    if (rect.img) {
      ctx.fillStyle = rect.color;
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
      ctx.drawImage(rect.img, rect.x, rect.y, 50, 50);
      // ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
      // ctx.drawImage(rect.img, 0, 0);
    } else { // Fill color
      ctx.fillStyle = rect.color;
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
  });

  requestAnimationFrame(draw);
}

draw();