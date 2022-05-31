const sectionColorGuess = document.getElementById('color-guess');
const pColorGuess = document.getElementById('rgb-color');
const pAnswer = document.getElementById('answer');
const buttonResetGame = document.getElementById('reset-game');
const score = document.getElementById('score');
const plus = document.getElementsByClassName('plus');

// Requisito 4
function generateColors() {
  const arrayColor = [];
  for (let index = 0; index < 3; index += 1) {
    const numberColor = Math.floor(Math.random() * 256);
    arrayColor[index] = numberColor;
  }
  const randomColor = `rgb(${arrayColor[0]}, ${arrayColor[1]}, ${arrayColor[2]})`;
  return randomColor;
}

// Requisito 7
let points = 0;

function countScore() {
  points += 3;
  score.innerText = points;
}

// Requisito 3
function generateCircles() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    const newColor = generateColors();
    arrayColors.push(newColor);
    const coloredCircles = document.createElement('div');
    coloredCircles.classList.add('ball');
    coloredCircles.style.backgroundColor = newColor;
    coloredCircles.addEventListener('click', rightOrWorng);
    sectionColorGuess.appendChild(coloredCircles);
    console.log(newColor);
  }
  pColorGuess.innerText = arrayColors[Math.floor(Math.random() * arrayColors.length)]; // Requisito 2
}

generateCircles();

function resetGame() {
  console.clear();
  sectionColorGuess.innerHTML = '';
  pAnswer.innerText = 'Escolha uma cor';
  pAnswer.className = 'default-color';
  generateCircles();
  sectionColorGuess.classList.remove('disable');
  plus[0].classList.add('display');
}

buttonResetGame.addEventListener('click', resetGame);

// Requisito 5
function rightOrWorng(event) {
  const clickedColor = event.target.style.backgroundColor;
  if (clickedColor === pColorGuess.innerText) {
    pAnswer.innerText = 'Acertou!';
    pAnswer.className = 'right-color';
    countScore();
    sectionColorGuess.classList.toggle('disable');
    plus[0].classList.remove('display');
    setTimeout(resetGame, 1000);
    
  } else {
    pAnswer.innerText = 'Errou! Tente novamente!';
    pAnswer.className = 'wrong-color';
    sectionColorGuess.classList.toggle('disable');
    setTimeout(resetGame, 1000);
  }
}
