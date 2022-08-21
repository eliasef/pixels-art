// requisito 2

function createColors(color) {
  const myUl = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const newLi = document.createElement('li');
    newLi.className = 'color';
    newLi.style.backgroundColor = color[i];
    myUl.appendChild(newLi);
  }
}
createColors(['black', 'blue', 'red', 'green']);

// requisito 4

function createPixelsLi(quantidade) {
  const myUl = document.getElementById('pixel-board');
  for (let i = 0; i < quantidade; i += 1) {
    const br = document.createElement('br');

    for (let coluna = 0; coluna < quantidade; coluna += 1) {
      const newLi = document.createElement('li');
      newLi.className = 'pixel';
      myUl.appendChild(newLi);
      myUl.appendChild(br);
      newLi.style.backgroundColor = 'white';
    }
  }
}

createPixelsLi(5);

// requisot 6

function blackSelected() {
  const colors = document.querySelector('.color');
  colors.className = 'color selected';
}

blackSelected();

// requisito 7

function changeColorSelected() {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      colors[i].className = 'color selected';
    });
  }
}

changeColorSelected();

// requisito 8

function addColorPixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      pixels[i].style.backgroundColor = selected.style.backgroundColor;
    });
  }
}

addColorPixel();

// requisito 9

function clearButton() {
  const button = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');

  button.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

clearButton();

// requisito 10

function generatePixels() {
  const input = document.getElementById('board-size');
  const button = document.getElementById('generate-board');
  const pixels = document.getElementById('pixel-board');

  button.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    } else if (input.value < 5) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    }
    pixels.textContent = '';
    createPixelsLi(input.value);
    addColorPixel();
  });
}

generatePixels();

// requisito 12

function randomColor() {
  const color = document.querySelectorAll('.color');
  for (let i = 1; i < color.length; i += 1) {
    color[i].style.backgroundColor = '#' + Math.floor(Math.random() * 255);
  }
}

randomColor();
