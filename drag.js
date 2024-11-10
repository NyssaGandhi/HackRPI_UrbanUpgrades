const canvas = document.getElementById('greenCanvas');
const ctx = canvas.getContext('2d');

let isDragging = false;
let dragStartX, dragStartY;

const houseImage = new Image();
houseImage.src = './assets/house.png';

const solarImage = new Image();
solarImage.src = './assets/solarpanel.png';

const coalImage = new Image();
coalImage.src = './assets/coal.png';

const hydroImage = new Image();
hydroImage.src = './assets/hydro.png';

const mousePosition = { x: 0, y: 0 }

let powerPlants = [
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'orange', draggable: true, img: coalImage, type: 'coal' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'red', draggable: true, img: null, type: 'oil' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'yellow', draggable: true, img: null, type: 'gas' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'purple', draggable: true, img: null, type: 'nuclear' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'goldenrod', draggable: true, img: null, type: 'biomass' } },
  { cost: 50, rect: { x: 0, y: 0, width: 200, height: 200, color: 'lime', draggable: true, img: solarImage, type: 'solar' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'blue', draggable: true, img: hydroImage, type: 'hydro' } },
  { cost: 50, rect: { x: 0, y: 0, width: 150, height: 150, color: 'skyblue', draggable: true, img: null, type: 'wind' } },
  { cost: 50, rect: { x: 0, y: 0, width: 100, height: 100, color: 'pink', draggable: true, img: null, type: 'geo' } },
]

let rectangles = [
  { x: 300, y: 300, width: 50, height: 50, color: 'black', draggable: false, img: houseImage, type: 'house' },
  { x: 500, y: 400, width: 50, height: 50, color: 'black', draggable: false, img: houseImage, type: 'house' },
  { x: 100, y: 250, width: 50, height: 50, color: 'black', draggable: false, img: houseImage, type: 'house' },
  { x: 600, y: 200, width: 50, height: 50, color: 'black', draggable: false, img: houseImage, type: 'house' },
];
let currentRectIndex = null;

function addPowerPlant(plant) {
  console.log("Adding plant: " + plant.rect.type)
  for (let i = 0; i < rectangles.length; i++) {
    if (rectangles[i].type != 'house') {
      rectangles.splice(i, 1);
    }
  }
  rectangles.push(plant.rect);
}

function addCoalPlant() { addPowerPlant(powerPlants[0]) };
function addOilPlant() { addPowerPlant(powerPlants[1]) };
function addGasPlant() { addPowerPlant(powerPlants[2]) };
function addNuclearPlant() { addPowerPlant(powerPlants[3]) };
function addBiomassPlant() { addPowerPlant(powerPlants[4]) };
function addSolarPlant() { addPowerPlant(powerPlants[5]) };
function addHydroPlant() { addPowerPlant(powerPlants[6]) };
function addWindPlant() { addPowerPlant(powerPlants[7]) };
function addGeoPlant() { addPowerPlant(powerPlants[8]) };


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
      ctx.drawImage(rect.img, rect.x, rect.y, rect.width, rect.height);
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