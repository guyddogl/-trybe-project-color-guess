const sectionColorGuess = document.getElementById('color-guess');
const pColorGuess = document.getElementById('rgb-color');

// Requisito 4
function generateColors() {
  const arrayColor = [];
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
    const newColor = generateColors();
    arrayColors.push(newColor);
    const coloredCircles = document.createElement('div');
    coloredCircles.classList.add('ball');
    coloredCircles.style.backgroundColor = newColor;
    sectionColorGuess.appendChild(coloredCircles);
  }
  let randomNumber = Math.floor(Math.random() * arrayColors.length);
  trueColor = arrayColors[randomNumber];
  pColorGuess.innerText = trueColor;
  // console.log(trueColor);
}

generateCircles();

// Requisito 2
function colorToGuess() {

}