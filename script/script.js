'use strict';

//#region Functions declaration
function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function guessTheNumber() {
  const originNumber = parseInt(Math.random() * 99 + 1);
  //console.log(originNumber);
  let tryCounter = 10;

  function tryToGuess() {
    if (tryCounter === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?'))
        guessTheNumber();
      return;
    }

    tryCounter -= 1;

    let num = prompt('Угадай число от 1 до 100:');
    if (num === null) { // нажато 'Отмена'
      alert('Игра закончена по желанию игрока.');
      return;
    }

    if (!isNumber(num))
      alert('Введи число!');
    else if (num > originNumber)
      alert('Загаданное число меньше ' + num + ', осталось попыток ' + tryCounter);
    else if (num < originNumber)
      alert('Загаданное число больше ' + num + ', осталось попыток ' + tryCounter);
    else {
      if (confirm('Поздравляю, Вы угадали!!! Загаданное число = ' + originNumber + '. Хотели бы сыграть еще?'))
        guessTheNumber();
      else
        alert('Спасибо за игру!');
      return;
    }
    return tryToGuess();
  }

  tryToGuess();
}
//#endregion Functions declaration

const bot = guessTheNumber();
bot();