const sectionColorGuess = document.getElementById('color-guess');

// Requisito 4
function generateColors() {
  let arrayColor = [];
  for (let index = 0; index < 3; index += 1) {
    const numberColor = Math.floor(Math.random() * 255);
    arrayColor[index] = numberColor;
  }
  const randomColor = `rgb(${arrayColor[0]} , ${arrayColor[1]} , ${arrayColor[2]})`;
  return randomColor;
}

// Requisito 3
function generateCircles() {
  const arrayColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayColors[index] = generateColors();
    const coloredCircles = document.createElement('div');
    coloredCircles.classList.add('ball');
    coloredCircles.style.backgroundColor = arrayColors[index];
    sectionColorGuess.appendChild(coloredCircles);
  }
}

generateCircles();
