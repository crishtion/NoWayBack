//Linking variables to HTML
const hidden = document.getElementById("hide");
const title = document.getElementById("title");
const button1 = document.getElementById('button1');
const start = document.getElementById('boom');
const fake = document.getElementById('truth');
const instructions = document.getElementById('instructions');
const heresTheTrruth = document.getElementById('truth')
const gone = document.getElementById('goAway')
let destruct = false;
let x = 0
let clickCount = 0



//Functionality
button1.style.display = 'none';
fake.style.display = 'none';

button1.addEventListener('click', function(){
  clickCount++
  if(clickCount === 0){
    button1.innerHTML = 'Ok i lied';
  
  } else if(clickCount === 1){
    button1.innerHTML = 'No seriously this isn\'t the button'
   
  } else if(clickCount === 2){
    button1.innerHTML = 'You\'re seriously waisting your time';
   
  } else if(clickCount === 3){
    button1.innerHTML = 'ok maybe their is something';

  } else if(clickCount === 4){
    button1.innerHTML = '10';

  } else if(clickCount === 5){
    button1.innerHTML = '9';

  } else if(clickCount === 6){
    button1.innerHTML = '8';

  } else if(clickCount === 7){
    button1.innerHTML = '7';

  } else if(clickCount === 8){
    button1.innerHTML = '6';

  } else if(clickCount === 9){
    button1.innerHTML = '5';

  } else if(clickCount === 10){
    button1.innerHTML = '4';

  } else if(clickCount === 11){
    button1.innerHTML = '3';

  } else if(clickCount === 12){
    button1.innerHTML = '2';

  } else if(clickCount === 13){
    button1.innerHTML = '1';

  } else if(clickCount === 14){
    button1.innerHTML = 'ok no i lied again, not really sorry. i warned you earlier';
  
  } else if(clickCount > 49 && clickCount < 100){
    button1.innerHTML = 'Heres the truth, theres a prize at 100 clicks';
  
  } else if(clickCount >= 100 && clickCount < 150){
    button1.innerHTML = 'Or was it 150?';
 
  } else if(clickCount === 150){
    location.href = 'youWin.html'
  }
})

// Simple countdown timer
function startTimer(duration, display) {
  let timer = duration;
  
  let intervalId = setInterval(function () {
    display.textContent = timer;

    if(timer <= 20){
      display.style.color = 'red'
    } else if(timer <= 40){
      display.style.color = ' orange'
      fake.style.display = 'block'
    } else if(timer <= 50){
      button1.style.display = 'block'
    } else if(timer <= 60){
      display.style.color = 'green'
    }

    if (--timer < 0) {
      clearInterval(intervalId);
      display.textContent = 'TIME IS UP!';
      document.body.innerHTML = ' '
    }
  }, 1000);
}
const countdownDisplay = document.getElementById('countdown');

const doom = () =>{
  if(x < 1){
    gone.style.display = 'none';
    title.innerHTML = `No Way Back! Self Destructing in`; 
    instructions.innerHTML = 'The game has started you have one minute to find the hidden button to stop the timer. good luck'
    startTimer(60, countdownDisplay); 
    x++
  }
}

//when game start do this
start.addEventListener('click', doom);
start.addEventListener('click', function(){
  start.style.display = 'none'
})

test3 = document.getElementById('test3');
test3.addEventListener('click', function(){
  location.href = 'scene3/scene3.html'
})
