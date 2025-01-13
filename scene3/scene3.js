//setting up canvas and ctx
const canvas = document.getElementById('canvas-green');
const ctx = canvas.getContext('2d');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const lights = document.getElementById('light');
document.getElementById('userForm').style.display = 'none';
noButton.style.display = 'none';
yesButton.style.display = 'none';
lights.style.display = 'none';

//game variables
let x = 50;
let y = 70;
let buttonX = 300;
let buttonY = 350;
let buttonWidth = 50;
let buttonHeight = 50;
let width = 50;
let height = 50;
let speed = 10;
let hitCheck = 0;
let playerName = 'Player';
let controlsOff = false
let inDialog = false;
let buttonPressed = false;

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  playerName = document.getElementById('userInput').value; // Get the user input value
  console.log('Player Name:', playerName); // Log the player name to the console
  update(); // Call update to reflect any changes if needed
});

document.getElementById('userForm').addEventListener('submit', function(event) {
  document.getElementById('userForm').style.display = 'none';
  hitCheck++;
  update();
});

function drawControls(){
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    if(hitCheck === 0){
    ctx.fillText('Use SPACE bar to move through diallog', 10, 30);
    } if(hitCheck === 1){
    ctx.fillText('Use the arrow keys to move the orange square', 10, 30);
    } if(hitCheck >= 2){ 
    ctx.fillText('Try to escape', 10, 30);
    }
}

//Dialog code
function drawText(){
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  if(hitCheck === 0){
  ctx.fillText('Woah what is the place?', x - 50, y - 20);
} if(hitCheck === 1){
  ctx.fillText('Who are you?', x - 50, y - 20);
  inDialog = true;
  document.getElementById('userForm').style.display = 'block';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  controlsOff = true;
} if(hitCheck === 2){
  inDialog = true;
  controlsOff = true;
  ctx.fillText(`So your\'e name is ${playerName}?`, x - 50, y - 20);
  yesButton.style.display = 'block';
   yesButton.addEventListener('click', function(){
    hitCheck++;
    console.log(hitCheck);
    update();
   });
  noButton.style.display = 'block';
    noButton.addEventListener('click', function(){
      hitCheck--;
      console.log(hitCheck);
      update();
    });
} if(hitCheck === 3){
  inDialog = true;
  controlsOff = false;
  noButton.style.display = 'none';
  yesButton.innerHTML = 'You dont remember me?';
  yesButton.addEventListener('click', function(){
    hitCheck = 4;
    console.log(hitCheck);
    update();
  });
  ctx.fillText('Can\'t say i\'ve heard that name before', x - 50, y - 20);
} if(hitCheck === 4){
  inDialog = true;
  controlsOff = false;
  ctx.fillText('No. I dont. I dont even know where I am.', x - 50, y - 20);
  yesButton.innerHTML = 'I was just with you in the blue room?';
  yesButton.addEventListener('click', function(){
    hitCheck = 5;
    console.log(hitCheck);
    update();
  });
} if(hitCheck === 5){
  inDialog = true;
  yesButton.style.display = 'none';
  ctx.fillText('I dont know what you\'re talking about, can we just try to get out of here.', x - 50, y - 20);
  for(let i = 0; i < 1; i++){
    setInterval(function(){
      hitCheck = 6;
      console.log(hitCheck);
      update();
    }, 10000);
  }
}
}


//draw functions
function drawRectangle(){
  ctx.fillStyle = 'orange';
  ctx.fillRect(x, y, width, height);
}

function drawButton(){
  ctx.fillStyle = 'red';
  ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
}

function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//collision detection
function checkCollision(){
    if (x < buttonX + 50 &&
        x + width > buttonX &&
        y < buttonY + 50 &&
        y + height > buttonY) {
          buttonPressed = true;
          drawButton = function(){
            ctx.fillStyle = 'yellow';
            ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
            lights.style.display = 'block';
            lights.style.backgroundColor = 'white';
          }
      }
}

function update(){
  clearCanvas();
  drawControls();
  drawButton();
  checkCollision();
  drawText();
  drawRectangle();
}


//movement functions
function moveRight(){
  if (x + width + speed <= canvas.width) {
    x += speed;
  }
}

function moveLeft(){
  if (x - speed >= 0) {
    x -= speed;
  }
}

function moveUp(){
  if (y - speed >= 0) {
    y -= speed;
  }
}

function moveDown(){
  if (y + height + speed <= canvas.height) {
    y += speed;
  }
}

document.addEventListener('keydown', function(event){
if(controlsOff === false){
  if(event.key === 'ArrowRight'){
    moveRight();
  }
  if(event.key === 'ArrowLeft'){
    moveLeft();
  }
  if(event.key === 'ArrowUp'){
    moveUp();
  }
  if(event.key === 'ArrowDown'){
    moveDown();
  }
}
if(inDialog === false){
  if(event.key === " "){
    hitCheck++;
    console.log(hitCheck);
    update();
  }
}
 update();
});


update();