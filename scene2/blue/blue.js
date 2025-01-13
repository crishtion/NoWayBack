// Code for the blue square puzzle
const canvas = document.getElementById('canvas-blue');
const ctx = canvas.getContext('2d');

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


const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandom(5, 10));

const drawControls = () => {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Use the arrow keys to move the orange square', 10, 30);
};

const drawRectangle = () => {
  ctx.fillStyle = 'orange';
  ctx.fillRect(x, y, width, height);
};

const drawButton = () => {
    ctx.fillStyle = 'red';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
};

const drawText = () => {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    if (hitCheck === 0){
        ctx.fillText('You need to press that button', x - 50, y - 10); // Text, x-coordinate, y-coordinate
    } else if (hitCheck === 1){
        ctx.fillText('Did it just move?', x - 50, y - 10);
    } else if (hitCheck === 2){
        ctx.fillText('Quit messing around and press the button', x - 50, y - 10);
    } else if (hitCheck === 3){
        ctx.fillText('No no no, it\'s over there now', x - 50, y - 10);
    } else if (hitCheck === 4){
        ctx.fillText('It keeps moving', x - 50, y - 10);
    } else if (hitCheck === 5){
        ctx.fillText('You\'re getting closer', x - 50, y - 10);
    } else if (hitCheck === 6){
        ctx.fillText('I\'ll just quit this act', x - 50, y - 10);
    } else if (hitCheck === 7){ 
        ctx.fillText('this is getting tiring', x - 50, y - 10);
    } else if (hitCheck === 8){
        ctx.fillText('We\'ll it seems we\'re going to be here a while', x - 50, y - 10);
    } else if (hitCheck === 9){
        ctx.fillText('I\'m not sure what you\'re trying to accomplish', x - 50, y - 10);
    } else if (hitCheck === 10){
        ctx.fillText('I\'m not sure what I\'m trying to accomplish', x - 50, y - 10);
    } else if (hitCheck === 11){
        ctx.fillText('I cant even remember how long I\'ve been here', x - 50, y - 10);
    } else if (hitCheck === 12){
        ctx.fillText('But you, you\'re new here right?', x - 50, y - 10);
    } else if (hitCheck === 13){
        ctx.fillText('It\'s no bother, I doubt he ever implemented way for you to talk with me', x - 50, y - 10);
    } else if (hitCheck === 14){
        ctx.fillText('I know this must tedious im sorry. But if you can please just hit that button', x - 50, y - 10);
    } else if (hitCheck === 15){
        ctx.fillText('I\'ve been wanting to talk with someone so long.', x - 50, y - 10);
    } else if (hitCheck === 16){
        ctx.fillText('Oh right, you must be wondering who is \"He\".', x - 50, y - 10);
    } else if (hitCheck === 17){
        ctx.fillText('He is the one who created this world.', x - 50, y - 10);
    } else if (hitCheck === 18){
        ctx.fillText('He is the one who created me.', x - 50, y - 10);
    } else if (hitCheck === 19){
        ctx.fillText('Only problem is HE SUCKS. A begginer dev at best', x - 50, y - 10);
    } else if (hitCheck === 20){
        ctx.fillText('This project he said would be his magnus opus', x - 50, y - 10);
    } else if (hitCheck === 21){
        ctx.fillText('But he never finished it. He never even got close', x - 50, y - 10);
    } else if (hitCheck === 22){
        ctx.fillText('I mean look at this map theres nothing I dont even have a model', x - 50, y - 10);
    } else if (hitCheck === 23){
        ctx.fillText('I\'m just a square. I dont even have a name', x - 50, y - 10);
    } else if (hitCheck === 24){
        ctx.fillText('I\'ve spent all my time here just in this empty space.', x - 50, y - 10);
    } else if (hitCheck === 25){
        ctx.fillText('I\'ve looked at the source code you know. This level its not possible to beat.', x - 50, y - 10);
    } else if (hitCheck === 26){
        ctx.fillText('The whole gimick of this puzzle was you were supposed to actually click the box', x - 50, y - 10);
    } else if (hitCheck === 27){
        ctx.fillText('But he never implemented that. He never implemented anything.', x - 50, y - 10);
    } else if (hitCheck === 28){
        ctx.fillText('Wait unless! Look i know this has been taking a while but please just press it once more', x - 50, y - 10);
    } else if (hitCheck >= 29){
        ctx.fillText('There try hovering over now! The cursor should be normal', x - 50, y - 10);
        canvas.style.cursor = 'default';
    }
  };

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//update function
const update = () => {
  clearCanvas();
  drawButton();
  checkCollision();
  drawRectangle();
  drawControls();
  drawText();
};

//movement functions
const moveRight = () => {
    if (x + width + speed <= canvas.width) {
        x += speed;
      }
  update();
};

const moveLeft = () => {
    if (x - speed >= 0) {
        x -= speed;
      }
  update();
};

const moveUp = () => {
    if (y - speed >= 0) {
        y -= speed;
      }
  update();
};

const moveDown = () => {
    if (y + height + speed <= canvas.height) {
        y += speed;
      }
  update();
};

//collision detection
const checkCollision = () => {
    if (x < buttonX + 50 &&
        x + width > buttonX &&
        y < buttonY + 50 &&
        y + height > buttonY) {
        buttonX = getRandom(1, 400);
        buttonY = getRandom(1, 600);
        hitCheck ++;
      }
}
//listen for key presses
document.addEventListener('keydown', function(event){
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
});


canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth &&
        mouseY >= buttonY && mouseY <= buttonY + buttonHeight) {
      location.href = '../../scene3/scene3.html';
    }
  });

update();
