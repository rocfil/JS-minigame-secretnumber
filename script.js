'use strict';
/* TEST
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
// Selecting and manipulating elements
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 67;
document.querySelector('.guess').value = 27;
*/
// Setting a random number (between 1 and 20):
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling Click Events

document.querySelector('.check').addEventListener('click', function () {
  // saving the input value into a variable, converted as number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // to make sure that guess is a number
  // GAME LOGIC
  if (!guess) {
    // because zero equals to false (!)

    // When there is no input
    displayMessage('⛔ Nenhum número foi inserido');
  } else if (guess === secretNumber) {
    // When player wins
    displayMessage('Número correto! ACERTOU MISERÁVI!'); // using the function above to show the message

    document.querySelector('.number').textContent = secretNumber; // to show the correct number
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      ); // using ternary expression to get a dry code
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Perdestes! :(');
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   // When guess is too high
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   // When guess is too low
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   } // this function is a event handler
  }
});
// setting all values to default when pressing again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});
