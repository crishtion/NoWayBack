const redDoor = document.getElementById('red');
const blueDoor =  document.getElementById('blue');
const redDoorText = document.getElementById('redText');
let redDoorLocked = true;


let unlocked = () =>{
  
}

const locked = () =>{
  redDoor.style.backgroundColor = 'grey';
  redDoorText.innerHTML = 'Still under development- the game maker'
}

const returnToBase = () =>{
  redDoor.style.backgroundColor = 'red';
  redDoorText.innerHTML = 'Locked'
}

if(redDoorLocked === true){
  redDoor.addEventListener('mouseenter', locked);
  redDoor.addEventListener('mouseleave', returnToBase);
} 

document.getElementById("blue").onclick = function () {
          window.location.href = "/scene2/blue/blue.html";
    };
