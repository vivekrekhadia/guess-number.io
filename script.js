'use strict';
let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number!👏';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#ffa500';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 'you lose!';
  //     }
  //   } else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 'you lose!';
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
