'use strict';

//#region Functions declaration
function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function guessTheNumber() {
  const originNumber = parseInt(Math.random() * 99 + 1);
  //console.log(originNumber);

  function tryToGuess() {
    let num = prompt('Угадай число от 1 до 100:');
    if (num === null) // нажато 'Отмена'
      return;

    if (!isNumber(num))
      alert('Введи число!');
    else if (num > originNumber)
      alert('Загаданное число меньше ' + num);
    else if (num < originNumber)
      alert('Загаданное число больше ' + num);
    else {
      alert('УГАДАЛИ!!! Загаданное число = ' + originNumber);
      return;
    }
    return tryToGuess();
  }

  tryToGuess();
}
//#endregion Functions declaration

const bot = guessTheNumber();
bot();